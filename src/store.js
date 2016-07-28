import { observable } from 'mobx'

let store = observable({
  products: [
    { id: 1, name: 'Milk', price: 2 }
  ],
  cart: [ {
    productId: 1,
    quantity: 2,
  } ]
})

store.cartMethods = {
  increment: (productId) => store.cart.find(item => item.productId === productId).quantity++
}

export default store
