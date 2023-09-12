'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientComponent({ children }: any) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()

  return (
    <div>
      {/** esto me rompe todo cuando hago click: Error: async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.*/}
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <br />
      <hr />
      <br />
      que tiene server: {children}
    </div>
  )
}
