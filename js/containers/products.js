import React, { Component } from 'react'
import Product from '../components/product'

class Products extends Component {
  render() {
    return (
      <ul className="products">
        { this.props.store.products.map(product => (
          <Product
            key={ product.id }
            product={ product }
          />
        )) }
      </ul>
    )
  }
}

export default Products
