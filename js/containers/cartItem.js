import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class CartItem extends Component {
  render() {
    const { cartItem } = this.props
    return (
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
  }
}

export default CartItem
