import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Product from '../components/product'

@observer
class Products extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: false }
  }

  handleLoadMoreClick = () => {
    this.setState({ isLoading: true })
    this.props.store.loadMoreProducts().then(() => this.setState({ isLoading: false }))
  }

  render() {
    const { store } = this.props

    return (
      <div className={`products ${this.state.isLoading ? 'is-loading' : ''}`}>
        <ul>
          { this.props.store.products.map(product => (
            <Product
              key={ product.id }
              product={ product }
            />
          )) }
        </ul>
        <button onClick={ this.handleLoadMoreClick } className="load-more">
          Load more
        </button>
      </div>
    )
  }
}

export default Products
