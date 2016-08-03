import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Cart extends Component {
  render() {
    return (
      <ul className="cart">
        { this.props.store.cart.map(
          cartItem => (
            <li>
              <strong>{ cartItem.product.name }</strong>
              <div>
                quantity: { cartItem.quantity },
                price: { cartItem.price }
                <button onClick={() => {
                  this.props.store.increment(cartItem.productId)
                }}>+</button>
                <button onClick={() => {
                  this.props.store.decrement(cartItem.productId)
                }}>-</button>
              </div>
            </li>
          )
        ) }
      </ul>
    )
  }
}

export default Cart
