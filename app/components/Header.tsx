'use client'
import { useState } from 'react'
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Categories from './Categories'
import Link from 'next/link'
import Search from './Search'
import HeaderMob from '../mobile/HeaderMob'
import { useUIStore } from '../store/Store'
import { useSession } from 'next-auth/react'

export default function Header () {
  const [open, setOpen] = useState(false)
  const qty = useUIStore(state => state.qty)
  const { data: session } = useSession()

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <HeaderMob setOpen={setOpen} open={open}/>

      <header className="relative z-10 bg-white">

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => { setOpen(true) }}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Flyout menus */}
                <Categories/>

              {/* Login */}

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {
                    (session !== null)
                      ? <Link href="/#login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      {session?.user?.name}
                     </Link>

                      : <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </Link>
                  }
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                </div>

                {/* Search */}
              <Search />

                {/* bag Shop */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{qty}</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </nav>

      </header>
    </div>
  )
}
