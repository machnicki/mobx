import React, { Component, PropTypes } from 'react'

class Product extends Component {
  render() {
    const { product } = this.props
    const { id, name, addToBasket } = product

    return (
      <li>
        { name }
        <button onClick={ product.addToBasket.bind(product) }>Add to basket</button>
      </li>
    )
  }
}

Product.propTypes = {
  product: PropTypes.obj,
}

Product.defaultProps = {
  product: {},
}

export default Product
