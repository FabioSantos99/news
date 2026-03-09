'use client';

import clsx from "clsx";

export function Header() {
  console.log('HEADER')
  return (
    <h1
    className=
      {clsx('text-xl',
        'font-bold',
        'text-blue-500',
        'hover:text-blue-300',
        'hover:bg-blue-500',
        'transition',
        'duration-300'
      )}
      onClick= {() => alert(123)}
    >
      Texto para teste
      </h1>
  )
}
