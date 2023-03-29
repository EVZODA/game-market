import React from 'react';
import { useState } from 'react';
import axios from 'axios';



const AdminCategoriesPut= () => {

  const [putInput, setPutInput] = useState({})

  const [searchInput, setSearchInput] = useState("")

  const [categories, setCategories] = useState([])

  const [axiosdata, setAxiosData] = useState();

  const handleSearch = (e) => {
    setSearchInput({
      search: e.target.value
    })
  }

  const handleName = (e) => {
    setPutInput({
      ...putInput,
      nombre: e.target.value
    })
  }

  const handlePut = async () =>{
    let token = localStorage.getItem("token") || "";

    try {
      let axiosresponse = await axios.put (
        process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_CATEGORIES_APP + "/"
        + categories[0]._id,
        putInput,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      setAxiosData(axiosresponse)
    } catch (error) {
      setAxiosData(error.response)
    }
  }

  const getCategories = async () => {
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP
    );
    const {data} = requestGet
    setCategories(
      data.categorias.filter(
        (categorie) => 
        categorie.nombre.toLowerCase() === searchInput.search.toLowerCase()
      )
    )
  }

  return (
    <div className="flex flex-col space-y-[7px] px-[8px] items-center justify-center h-[500px]">
      <div className='justify-center items-center'>
        <input onChange={(e)=>{handleSearch(e)}} className='border-[2px] border-[#8a5422] w-[250px] mr-[20px]' placeholder="Nombre de lo quiero editar" />
        <button onClick={getCategories} className='border-[2px] border-[#8a5422] w-[250px] mr-[20px]'>Buscar</button>
      </div>
      <div className='justify-center items-center'>
      <input onChange={(e)=>{handleName(e)}} className='border-[2px] border-[#8a5422] w-[400px] mr-[20px]' placeholder="nombre nuevo" />
        <button onClick={handlePut} className='border-[2px] border-[#8a5422] w-[400px] mr-[20px]'>Editar</button>
      </div>
      <p>{axiosdata ? axiosdata.data.msg : ""}</p>
    </div>
  );
};

export default AdminCategoriesPut