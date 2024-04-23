'use client'
import { useSearchParams } from 'next/navigation'
import { type Products } from '../types/types'

export default function Article ({ products }: { products: Products }) {
  const params = useSearchParams()
  const value = params.get('search')

  const filteredProducts = value !== null ? products.filter(p => p.title.toLowerCase().includes(value.toLowerCase())) : products

  return (
        <article className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {filteredProducts.map((product) => (
          <a key={product.id} href={`/details?${product.id}`} className="group flex flex-col justify-between">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
          </a>

        ))}
      </article>
  )
}
