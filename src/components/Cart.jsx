import React from 'react'
import OneProduct from './oneProduct'

// props ili da se radi destrukturiranje, pa prihvatim samo parametar koji mi treba
const Cart = ( {allproducts} ) => {
  return (
    <div className='cart-container'>
      <h3>This is your cart.</h3>
      {/* viticaste zagrade jer pisem neki kod unutra */}
      {allproducts === null ? "No products in your cart." : allproducts.map((p) => (
      <OneProduct product={p} key={p.id} inCart={0} />
  ))}
  </div>
  )
}

export default Cart