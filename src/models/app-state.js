import { action, observable } from 'mobx'
import Product from './product'
import CartItem from './cart-item'

export default class AppState {
  @observable products = []
  @observable cart = []
  @observable loading = false

  constructor({
    products = [],
    cart = [],
  }) {
    this.products = products.map(pr => new Product(pr))
    this.cart = cart.map(ci => new CartItem(ci))
  }

  @action increment(id) {
    this.cart.find(item => item.productId === id).quantity++
  }

  @action decrement(id) {
    this.cart.find(item => item.productId === id).quantity--
  }
}
