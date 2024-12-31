'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const menuItems = [
  { name: "What's new", href: '#' },
  { name: 'Solo buckets', href: '#' },
  { name: 'Combo', href: '#' },
  { name: 'Boxes', href: '#' },
  { name: 'Burgers & Sandwiches', href: '#' },
  { name: 'Combo buckets', href: '#' },
  { name: 'Juicy chicken', href: '#' },
  { name: 'Snacks', href: '#' },
  { name: 'Drinks', href: '#' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

