import { renderNavbar } from './renders/navbar.js'

export async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const products = await response.json()
    return products
}

renderNavbar()
fetchProducts()