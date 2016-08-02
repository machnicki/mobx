import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Products extends Component {
  render() {
    return (
      <ul>
        { this.props.store.products.map(product => <li>{ product.name }</li>) }
      </ul>
    )
  }
}

export default Products
