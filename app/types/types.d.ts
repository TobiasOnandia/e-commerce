export type Products = Product[]

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

export interface Cate {
  categories: Category[]
  pages: Page[]
}

export interface Category {
  id: string
  name: string
  featured: Featured[]
  sections: Section[]
}

export interface Featured {
  name: string
  href: string
  imageSrc: string
  imageAlt: string
}

export interface Section {
  id: string
  name: string
  items: Item[]
}

export interface Item {
  name: string
  href: string
}

export interface Page {
  name: string
  href: string
}

export interface Root {
  breadcrumbs: Breadcrumb[]
  colors: Color[]
  sizes: Size[]
  highlights: string[]
}

export interface Breadcrumb {
  id: number
  name: string
  href: string
}

export interface Color {
  name: string
  class: string
  selectedClass: string
}

export interface Size {
  name: string
  inStock: boolean
}
