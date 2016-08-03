import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'

import Header from './components/header'
import Products from './containers/products'
import Cart from './containers/cart'
import store from './store'

@observer
class AppDesktop extends Component {
  render() {
    return (
      <div>
        <Header
          onPageChange={ page => store.goTo(page) }
        />
        { store.activePage === 'index' && <Products store={ store } /> }
        { store.activePage === 'basket' && <Cart store={ store } /> }
        <DevTools />
      </div>
    )
  }
}

export default AppDesktop
