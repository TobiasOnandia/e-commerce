import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Search () {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleChange = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term !== null) {
      params.set('search', term)
    } else {
      params.delete('search')
    }

    router.replace(`?${params.toString()}`)
  }

  return (
    <div className="flex lg:ml-6">
        <span className="sr-only">Search</span>
        <input onChange={(event) => { handleChange(event.target.value) }} defaultValue={searchParams.get('search')?.toString()} type="text" className='border text-black h-6 ' />
        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer text-center  text-gray-400 hover:text-gray-500" aria-hidden="true" />
    </div>

  )
}
