'use client'

import { useState } from 'react'
import { ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function MobileCart() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 p-0">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Cart</h2>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-4 text-center text-muted-foreground">
            <ShoppingCart className="h-16 w-16 mb-4" />
            <p className="text-lg font-medium">Your cart is currently empty</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

