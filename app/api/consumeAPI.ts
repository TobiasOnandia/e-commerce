import { Products } from "../types/types"

export async function consumeAPI () {
    const response = await fetch('https://fakestoreapi.com/products')
    const data: Products = await response.json()
    return data
}