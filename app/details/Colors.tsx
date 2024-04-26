import { RadioGroup } from '@headlessui/react'
import { type Color } from '../types/types'

function classNames (...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export function Colors ({ color }: { color: Color }) {
  return (
        <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            (active) && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
  )
}
