import React, { Component } from 'react'
import Title from './Title'
import CardColumns from './CardColumns'
import CartList from './CartList'
import EmptyCart from './EmptyCart'

export default class Cart extends Component {
  state = {
    cart: []
  }
  render() {
    return (
      
      <React.Fragment>
          <Title name="your" title="cart" />
          <CardColumns />  
          <CartList cart={this.state.cart} />
        </ React.Fragment>
    )
  }
}
