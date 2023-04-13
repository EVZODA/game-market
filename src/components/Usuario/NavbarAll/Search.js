import React from 'react'
import { useState } from 'react';
import apiInstance from '../../utils/utils';

const Search = () => {

    const [searchInput, setSearchInput] = useState()

    const [searchInfo, setSearchInfo] = useState()

    const coleccionesPermitidas = [
        'usuarios',
        'categorias',
        'productos',
    ];

    const handleColecciones= (e) => {
        setSearchInput({
        ...searchInput,
          coleccionPermitida: e.target.value,
        });
      };


    const handleSearch = (e) => {
        setSearchInput({
            ...searchInput,
          search: e.target.value,
        });
      };

    

    const getResults = async () => {
        const requestGet = await apiInstance.get (
           process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_SEARCH_APP + searchInput.coleccionPermitida + '/' + searchInput.search
        );
        const {data} = requestGet
        console.log(data)
        


        setSearchInfo(data)



        
    }

  return (
    <div className="contain-buscador flex space-x-[25px] my-[25px]">
    <select onChange={handleColecciones} name="lenguajes" id="lang">
      <option value={coleccionesPermitidas[0]}>Usuarios</option>
      <option value={coleccionesPermitidas[1]}>Categorias</option>
      <option value={coleccionesPermitidas[2]}>Productos</option>
    </select>
    <div className="searchcontainer">
        <input type='text'
          className="border-[2px] border-[#8a5422] w-[300px] mr-[20px]"
          placeholder="Busqueda producto"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button
          onClick={getResults}
          className="border-[2px] border-[#8a5422] w-[80px]"
        >
          hola
        </button>
      </div>
  </div>
  )
}

export default Search