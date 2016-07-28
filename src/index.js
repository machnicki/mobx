import React from 'react'
import { render } from 'react-dom'

import Products from './components/products'
import Cart from './components/cart'
import store from './store'

render((
  <div>
    This is my super simple mobx app
    <Products store={ store } />
    My super cart
    <Cart store={ store } />
  </div>
), document.getElementById('app'))
