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
              quantity: { product.quantity },
              price: { product.price }
              <button onClick={() => {
                this.props.store.increment(product.productId)
              }}>+</button>
              <button onClick={() => {
                this.props.store.decrement(product.productId)
              }}>-</button>
            </li>
          )
        ) }
      </ul>
    )
  }
}

export default Cart
