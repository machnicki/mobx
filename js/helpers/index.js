const products = [
  { id: 3, name: 'Cola', price: 3 },
  { id: 4, name: 'Water', price: 1 },
  { id: 5, name: 'Sprite', price: 2 },
  { id: 6, name: 'Orange juice', price: 3 },
]

export function fetchProducts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(products.splice(0, 2)), 1000)
  })
}
