'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart } from 'lucide-react'
import CartSkeleton from './cart-skeleton'

export default function Cart() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <aside className="w-80 fixed top-16 right-0 bottom-0 p-4 bg-white border-l hidden xl:block">
        <CartSkeleton />
      </aside>
    )
  }

  return (
    <aside className="w-80 fixed top-16 right-0 bottom-0 p-4 bg-white border-l hidden xl:block">
      <div className="h-full flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground">
          <ShoppingCart className="h-16 w-16 mb-4" />
          <p className="text-lg font-medium">Your cart is currently empty</p>
        </div>
      </div>
    </aside>
  )
}

