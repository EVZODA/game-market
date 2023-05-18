import { useSearchParams } from "react-router-dom";
import apiInstance from "../../utils/utils";
import { useState, useEffect } from "react";
import Product from "../../Products/Product";


const SearchInfo = () => {

const [searchParams, setSearchParams] = useSearchParams()

const [searchInfo, setSearchInfo] = useState()


useEffect(() => {
  search()
}, [searchParams])

   
    const search = async  () => {

      const requestGet = await apiInstance.get (
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_SEARCH_APP + "productos" + '/' + searchParams.get("search")
     );
     const {data} = requestGet
     console.log(data)
     

     if(searchParams.get("categoria")!=="productos") {
      setSearchInfo(data.results.filter((product)=>product.categoria.nombre===searchParams.get("categoria")))
     } else {
      setSearchInfo(data.results)
     }
    }



  return (
    <div className=" bg-slate-200 py-[30px] min-h-[600px]">
      <ul className="flex flex-wrap justify-center gap-6">
        {searchInfo?.map((product, index)=>{
          return (<Product key={index} product={product}/>)
        })}
      </ul>
    </div>
  )
}

export default SearchInfo