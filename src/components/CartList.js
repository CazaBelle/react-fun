import React from 'react'
import CartItem from './CartItem'

export default function CartList({ value }) {
  const { cart } = value
  return (
    <div>
      hello from cart list 
      <CartItem item={cart}/>
      </div>
  )
}
