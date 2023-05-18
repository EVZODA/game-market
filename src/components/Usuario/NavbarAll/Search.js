import React from 'react'
import {useState, useEffect} from 'react';
import apiInstance from '../../utils/utils';
import {createSearchParams, useNavigate } from 'react-router-dom';



const Search = () => {

    const [searchInput, setSearchInput] = useState({})

    const navigate = useNavigate()

    const [categories, setCategories] = useState([]);

    

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const requestGet = await apiInstance.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP
    );
    const { data } = requestGet;
    setCategories(data.categorias);
    console.log(data.categorias);
  };




    const coleccionesPermitidas = [
        'productos',
    ];

    const handleCategories= (e) => {
        setSearchInput({
        ...searchInput,
          categoria: e.target.value,
        });
      };


    const handleSearch = (e) => {
        setSearchInput({
            ...searchInput,
          search: e.target.value,
        });
      };

    

    const getResults = async () => {
      
      // Problema de actualizacion del state 
      
      //  if (!searchInput.search) {
      //   setSearchInput({
      //     ...searchInput,
      //     search: "",
      // });
      //  }
      //  if (!searchInput.categoria) {
      //   setSearchInput({
      //     ...searchInput,
      //     categoria: "productos",
      // });
      //  }
      //   navigate({pathname: "searchInfo", search: `?${createSearchParams(searchInput)}`})

      const params = {
        search: searchInput.search,
        categoria:searchInput.categoria
      }
    
       if (!params.search) {
        params.search = ""
       }
       if (!params.categoria) {
        params.categoria = "productos"
       }
        navigate({pathname: "searchInfo", search: `?${createSearchParams(params)}`})

    }




  return (
    <div className="contain-buscador flex flex-col h-[140px] lg:flex-row lg:space-x-6 lg:h-[40px]">
    <select className='mb-[5px] lg:mb-[0px] lg:w-[200px] rounded-[5px] border-none w-full lg:h-full' onChange={handleCategories} name="lenguajes" id="lang">
    <option value={coleccionesPermitidas[0]}></option>
    {categories.map((categorie, index)=>{
      return (<option key={index} value={categorie.nombre}>{categorie.nombre}</option>)
    })}
    </select>
    <div className="flex flex-col lg:flex lg:flex-row lg:h-full lg:items-center h-full">
        <input type='text'
          className=" rounded-[5px] border-none mr-[20px] mb-[5px]  lg:mb-[0px] lg:h-full w-full"
          placeholder="Busqueda producto"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button
          onClick={()=>{getResults()}}
          className="rounded-[5px] border-none mr-[20px] mb-[5px] lg:mb-[0px] lg:h-full bg-white px-[7px] h-full w-full"
        >
          buscar
        </button>
        {}
      </div>
  </div>
  )
}

export default Search