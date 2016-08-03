import { observable, computed } from 'mobx'
import appState from '../store'

export default class CartItem {
  @observable quantity

  constructor(data) {
    this.productId = data.productId
    this.quantity = data.quantity
  }

  @computed get price() {
    return this.quantity * appState.products.find(pr => pr.id === this.productId).price
  }

  @computed get product() {
    return appState.products.find(pr => pr.id === this.productId) || {}
  }
}
