import { action, observable, autorun, autorunAsync, computed, reaction, when } from 'mobx'

// class CartItem {
//   constructor({ productId, quantity }) {
//     this.productId = productId
//     this.quantity = quantity
//   }
//
//   @computed get price() {
//     return 2
//   }
// }

let store = observable({
  products: [
    { id: 1, name: 'Milk', price: 2 },
    { id: 2, name: 'Beer', price: 4 },
  ],
  cart: [ {
    productId: 1,
    quantity: 2,
    @computed get price() {
      return this.quantity * store.products.find(pr => pr.id === this.productId).price
    }
  },{
    productId: 2,
    quantity: 1,
    @computed get price() {
      return this.quantity * store.products.find(pr => pr.id === this.productId).price
    }
  } ]
})

autorun(() => console.log('change of quantity: ', store.cart[0].quantity))
autorunAsync(() => console.log('change qty in async: ', store.cart[0].quantity), 1000)
when(() => (store.cart[0].quantity > 5), () => console.log('value is higher then 5')) // invoked only once
reaction(() => store.cart[0].quantity, () => console.log('someone has changed qty!'), true, 1000)

store.cartMethods = {
  increment: (productId) => store.cart.find(item => item.productId === productId).quantity++,
  decrement: (productId) => store.cart.find(item => item.productId === productId).quantity--,
}

export default store
