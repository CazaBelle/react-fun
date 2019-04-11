import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../Data'

export default class ProductList extends Component {
  state = {
    products: storeProducts
  }
  render() {

    return (
      <React.Fragment>
        <Title name="Our" title="season"/>
        <div className="row">
      
        {this.state.products.map(product=>{
          return <Product key={product.id} product={product} />
        })}
      </div>
      </React.Fragment>
    )
  }
}
