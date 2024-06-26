'use client'

import { Toaster, toast } from 'sonner'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Shop from '../components/Shop'
import { type Products } from '../types/types'
import { useSearchParams } from 'next/navigation'
import { SizesAndColors } from '../mocks/SizesAndColor'
import { useUISize, useUIStore } from '../store/Store'
import { BreadCrumbs } from './BreadCrumbs'
import { Sizes } from './Sizes'
import { Colors } from './Colors'
function classNames (...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DetailsProd ({ products }: { products: Products }) {
  const params = useSearchParams()
  const [selectedColor, setSelectedColor] = useState(SizesAndColors.colors[0])
  const [selectedSize, setSelectedSize] = useState(SizesAndColors.sizes[2])

  // open and close  shopcar
  const setOpen = useUISize(state => state.setOpen)
  const open = useUISize(state => state.open)

  const filterProductsForId = products.filter(item => params.has(`${item.id}`))

  // add to CarShopping
  const addToProduct = useUIStore(state => state.addToProduct)
  const productsShop = useUIStore(state => state.productsShop)
  const recountTotal = useUIStore(state => state.recountTotal)
  const addQty = useUIStore(state => state.addQty)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setOpen(true)

    const filterProdId = productsShop.findIndex(product => product.id === filterProductsForId[0].id)

    if (filterProdId === -1) {
      addToProduct(filterProductsForId[0])
    } else {
      toast.success('el producto ya fue agregado ')
    }

    recountTotal()
    addQty()
  }

  return (
    <div className="bg-white p-6">
      <Shop open={open} setOpen={setOpen} />

        <header aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {SizesAndColors.breadcrumbs.map((breadcrumb) => (
             <BreadCrumbs key={breadcrumb.id} breadcrumb={breadcrumb} />
            ))}
            <li className="text-sm">
              <h5 className="font-medium text-gray-500 hover:text-gray-600">
                {filterProductsForId[0].title}
              </h5>
            </li>
          </ol>
        </header>

        {/* Image gallery */}
        <div className="mx-auto mt-6 sm:block  lg:max-w-sm ">
          <picture className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={filterProductsForId[0].image}
              alt={filterProductsForId[0].title}
              className="h-full w-full object-contain object-center"
            />
          </picture>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{filterProductsForId[0].title}</h1>
          </div>

          {/* Options */}
          <aside className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">$ {filterProductsForId[0].price}</p>

            {/* Reviews */}
              <h3 className="sr-only ">Reviews</h3>
              <div className="flex items-center mt-6">
                <div className="flex items-center">
                    <StarIcon
                      key={filterProductsForId[0].rating.rate}
                      className={classNames(
                        filterProductsForId[0].rating.rate < 5 ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />

                </div>
                <p className="sr-only">{filterProductsForId[0].rating.rate} out of 5 stars</p>
                <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {filterProductsForId[0].rating.count} reviews
                </span>
              </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {SizesAndColors.colors.map((color) => (
                      <Colors key={color.name} color={color} />
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {SizesAndColors.sizes.map((size) => (
                      <Sizes key={size.name} size={size} />
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <Toaster position='top-center' richColors />
              <button
                onClick={handleClick}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </aside>

          <footer className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{filterProductsForId[0].description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {SizesAndColors.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{filterProductsForId[0].description}</p>
              </div>
            </div>
            </footer>
        </div>
    </div>
  )
}
