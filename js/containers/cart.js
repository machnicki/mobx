import React, { Component } from 'react'
import CartItem from './cartItem'
import { observer } from 'mobx-react'

@observer
class Cart extends Component {
  render() {
    return (
      <ul className="cart">
        { this.props.store.cart.map(
          cartItem => <CartItem store={ this.props.store } cartItem={cartItem} />
        ) }
      </ul>
    )
  }
}

export default Cart
