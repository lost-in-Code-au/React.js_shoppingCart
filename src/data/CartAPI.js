import FluxCartActions from '../actions/FluxCartActions'

export default function getProductData() {
  // Load mock product data from localStorage into ProductStore via Action
  const data = JSON.parse(localStorage.getItem('product'))
  FluxCartActions.receiveProduct(data)
}