import { action, computed, observable } from 'mobx'
import Product from './product'
import CartItem from './cart-item'

export default class AppState {
  @observable products = []
  @observable cart = []
  @observable loading = false
  @observable activePage = 'index'

  constructor({
    products = [],
    cart = [],
  }) {
    this.products = products.map(product => new Product(product))
    this.cart = cart.map(cartItem => new CartItem(cartItem))
  }

  @computed get itemsInCartQuantity() {
    return this.cart.reduce((previous, next) => previous + next.quantity, 0)
  }

  @action addToBasket(id) {
    console.log('id', id)
    if (this.cart.find(item => item.productId === id)) {
      this.increment(id)
    } else {
      this.cart.push(new CartItem({
        productId: id,
        quantity: 1,
      }))
    }
  }

  @action increment(id) {
    this.cart.find(item => item.productId === id).quantity++
  }

  @action decrement(id) {
    this.cart.find(item => item.productId === id).quantity--
  }

  @action goTo(page) {
    this.activePage = page
  }
}
