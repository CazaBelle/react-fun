import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
  state = {
    cart: []
  }
  render() {
    const {id, name, img, category, price, quantity } = this.props.product
    console.log(this.props.product)
    return (
      <ItemWrapper className="col-9 mx-auto col-md-6 col-lg-3">
        <div className="card">
          <div className="img-container p-5">
            <img src={img} alt="product" className="card-img-top" />
            <button className="cart-btn"
            onClick={() => {
              console.log("add me to cart")
              
            }}> 
              <i className="fas fa-cart-plus" />
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{name}</p>
            <h5 className="font-italic mb-0">
            {price}
            </h5>
          </div>
        </div>
       
      </ItemWrapper>
    )
  }
}

const ItemWrapper = styled.div`
  .img-container {
    overflow: hidden;
    position: relative;
 
  }

  .cart-btn {
    position: absolute;
    bottom: 0; 
    right: 0;
    border: none;
    font-size: 1.4 rem;
  }


`;