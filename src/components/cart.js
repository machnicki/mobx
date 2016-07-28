import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Cart extends Component {
  render() {
    return (
      <ul>
        { this.props.store.cart.map(
          product => (
            <li>
              { product.quantity }
              <button onClick={() => {
                this.props.store.cartMethods.increment(product.productId)
              }}>+</button>
            </li>
          )
        ) }
      </ul>
    )
  }
}

export default Cart
