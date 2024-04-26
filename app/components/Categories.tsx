import { navigation } from '../mocks/navigation'
import { Popover } from '@headlessui/react'
import { SubCategories } from './subCategories'

export default function Categories () {
  return (
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
        <div className="flex h-full space-x-8">
          {navigation.categories.map((category) => <SubCategories key={category.id} category={category} />)}

          {navigation.pages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
            >
              {page.name}
            </a>
          ))}
        </div>
      </Popover.Group>
  )
}
