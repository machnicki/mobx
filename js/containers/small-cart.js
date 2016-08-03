import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'

@observer
class SmallCart extends Component {
  render() {
    return (
      <div className="small-cart">
        Items in basket: <strong>{ store.itemsInCartQuantity }</strong>
      </div>
    )
  }
}

export default SmallCart
