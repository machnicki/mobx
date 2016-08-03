import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import { autorun } from 'mobx'

@observer
class SmallCart extends Component {
  previousQuantity = store.itemsInCartQuantity
  timeout

  constructor(props) {
    super(props)
    this.state = { isAnimated: false }

    autorun(() => {
      if (store.itemsInCartQuantity > this.previousQuantity) {
        clearTimeout(this.timeout)
        this.setState({ isAnimated: true })
        this.timeout = setTimeout(() => this.setState({ isAnimated: false }), 500)
      }
      this.previousQuantity = store.itemsInCartQuantity
    })
  }

  render() {
    return (
      <div className={`small-cart ${this.state.isAnimated ? 'is-animated' : ''}`}>
        Items in basket: <strong>{ store.itemsInCartQuantity }</strong>
      </div>
    )
  }
}

export default SmallCart
