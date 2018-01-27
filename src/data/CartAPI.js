import FluxCartActions from '../actions/FluxCartActions'



// Load mock product data from localStorage into ProductStore via Action
export default function getProductData() {
	const data = JSON.parse(localStorage.getItem('product'))
	FluxCartActions.receiveProduct(data)
}
