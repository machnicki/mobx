import { action, observable, autorun, autorunAsync, computed, reaction, when } from 'mobx'
import AppState from './models/app-state'

const appState = new AppState({
  products: [
    { id: 1, name: 'Milk', price: 2 },
    { id: 2, name: 'Beer', price: 4 },
  ],
  cart: [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 1 },
  ],
})

autorun(() => console.log('change of quantity: ', appState.cart[0].quantity))
autorunAsync(() => console.log('change qty in async: ', appState.cart[0].quantity), 1000)
when(() => (appState.cart[0].quantity > 5), () => console.log('value is higher then 5')) // invoked only once
reaction(() => appState.cart[0].quantity, () => console.log('someone has changed qty!'), true, 1000)

export default appState
