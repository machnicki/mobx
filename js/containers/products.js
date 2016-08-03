import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Product from '../components/product'

@observer
class Products extends Component {
  render() {
    const { store } = this.props

    return (
      <div className={`products ${store.isLoading ? 'is-loading' : ''}`}>
        <ul>
          { this.props.store.products.map(product => (
            <Product
              key={ product.id }
              product={ product }
            />
          )) }
        </ul>
        <button onClick={ () => store.loadMoreProducts() } className="load-more">
          Load more
        </button>
      </div>
    )
  }
}

export default Products
