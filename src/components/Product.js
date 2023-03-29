import React from 'react'

const Product = ({product}) => {
  return (
    <li>
        {product.nombre} {product.precio} {product.descripcion} {product._id}
        <button>Configuracion del producto</button>
    </li>
  )
}

export default Product