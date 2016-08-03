import { action } from 'mobx'
import appState from '../store'

export default class Product {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.price = data.price
  }

  @action addToBasket() {
    appState.addToBasket(this.id)
  }
}
