
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PurchaseCartSuccess = () => {
    const queryPayment = useSearchParams()
    alert("Pago efectuado")
    window.location = "/inicio"
  return (
  <>
  </>
  )
}

export default PurchaseCartSuccess