import { useEffect, useContext } from 'react'
import CartItem from './CartItem'
import { DataItemsInCart } from '../../Context/UserContextCart'


const Cart = () => {

  const {productsInCart, getProductsInCart} = useContext(DataItemsInCart)

  useEffect(() => {
   getProductsInCart();
  }, [] )



  

  return (
   <div className='SectionCart container'>
<ul className=''>
{productsInCart?.items?.map((productincart, index) => (
  <CartItem key={index} productincart={productincart} ></CartItem>
))}
</ul>
<button>comprar carrito</button>
   </div>
  )
}

export default Cart