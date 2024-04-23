import { create } from 'zustand'
import { type Product, type Products } from '../types/types'

interface State {
  open: boolean
  setOpen: (state: boolean) => void
}

interface Store {
  produ: [] | Products
  addToProduct: (state: Product) => void
}

// abrir y cerrar el carrito
export const useUISize = create<State>()((set) => ({
  open: false,
  setOpen: () => { set((state) => ({ open: !state.open })) }
}))

// actualizar el carrito
export const useUIStore = create<Store>()((set) => ({
  produ: [],
  addToProduct: (stateProd) => { set(state => ({ produ: [...state.produ, stateProd] })) }
}))
