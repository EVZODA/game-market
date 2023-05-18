
import HistorialItem from './HistorialItem'
import apiInstance from '../../utils/utils'
import { useEffect, useState } from 'react'


const HistorialPayments = () => {
    

    useEffect(() => {
      getUser()
    }, [])

   const [User, setUser] = useState()
    

    const getUser = async () => {
        const usuario = localStorage.getItem("usuarioid")
        const token = localStorage.getItem("token")
         const responseUser = await apiInstance.get(
            process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_OBTENERUSUARIO_APP + "/" + usuario, 
            {
                headers: {
                  "x-token": token,
                },
              }
        )

        setUser(responseUser)
    }

  return (
    <div className="SectionCart">
      <ul className="flex flex-col items-center space-y-[20px] pt-[20px] bg-slate-200 min-h-[100vh] justify-center">
        {User?.data?.usuario?.historyPayments?.map((history, index) => (
          <HistorialItem
            key={index}
            history={history}
          ></HistorialItem>
        ))}
      </ul>
      </div>
  )
}

export default HistorialPayments