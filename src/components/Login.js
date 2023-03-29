import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'




const url = ( window.location.hostname.includes('localhost') )

? 'http://localhost:8080/api/auth/'
: 'https://restserver-curso-fher.herokuapp.com/api/auth/';

const Login = () => {

    const [LoginInput, setLoginInput] = useState({})

    const [data, setData] = useState({})

    const handleCorreo = (e) => {
      setLoginInput({
        ...LoginInput, correo: e.target.value
      })
    }
  
    const handlePassword = (e) => {
      setLoginInput({
        ...LoginInput, password: e.target.value
      })
    }

    let miFormulario

    const asignarForm = () => {
        miFormulario = document.querySelector('form');
    }


    useEffect(() => {
    asignarForm()
    miFormulario.addEventListener('submit', ev => {
        ev.preventDefault();
        const formData = {};
    
        for( let el of miFormulario.elements ) {
            if ( el.name.length > 0 ) 
                formData[el.name] = el.value
        }
    
        fetch( url + 'login', {
            method: 'POST',
            body: JSON.stringify( formData ),
            headers: { 'Content-Type': 'application/json' }
        })
        .then( resp => resp.json() )
        .then( ({ msg, token, usuario }) => {
            if( msg ){
                console.log( msg);
            }

            console.log(usuario)
    
  
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('usuario', usuario.rol)
            window.localStorage.setItem('usuarioid', usuario.uid)
            window.location = "http://localhost:3000/"
        })
        .catch( err => {
            console.log(err)
        })
        
    });
    
    }, [])
    
    

    
    
    
   
    

    


  return (


    
    <form className="flex flex-col">
                <input type="text" name="correo" className="mb-2" placeholder="Correo" onChange={handleCorreo}/>
                <input type="text" name="password" className="mb-2" placeholder="Password" onChange={handlePassword}/>
    
                <button type="submit" className="btn btn-primary">
                    Ingresar
                </button>
            </form>
  )
}

export default Login