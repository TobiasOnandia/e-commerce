import { create } from 'zustand'
import { type Product, type Products } from '../types/types'

// open and close size
interface State {
  open: boolean
  setOpen: (state: boolean) => void
}

// store for shoppingCar
interface Store {
  productsShop: [] | Products
  subTotal: number
  qty: number
  addToProduct: (state: Product) => void
  removeToProduct: (state: Product) => void
  addQty: () => void
  recountTotal: () => void
  removeQty: () => void
}
// filter functions

export const useUISize = create<State>()((set) => ({
  open: false,
  setOpen: () => { set((state) => ({ open: !state.open })) }
}))

// add to product a ShoppingCar
export const useUIStore = create<Store>()((set) => ({
  productsShop: [],
  subTotal: 0,
  qty: 0,
  addToProduct: (stateProd) => { set(state => ({ productsShop: [...state.productsShop, stateProd] })) },
  removeToProduct: (stateProd) => { set(state => ({ productsShop: state.productsShop.filter(item => item.id !== stateProd.id) })) },
  recountTotal: () => { set(state => ({ subTotal: state.productsShop.map(item => item.price).reduce((ant, act) => ant + act) })) },
  addQty: () => { set(state => ({ qty: state.qty + 1 })) },
  removeQty: () => { set(state => ({ qty: state.qty - 1 })) }
}))
