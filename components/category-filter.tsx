/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  'All',
  'Burgers',
  'Sushi',
  'Pizza',
  'Wok',
  'Pasta',
  'Breakfasts',
  'Lunch',
  'Georgia',
  'Italy',
  'Uzbek',
  'Asia',
  'Japan',
  'China',
]

export default function CategoryFilter() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    const container = document.getElementById('category-container')
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' })
      setScrollPosition(container.scrollLeft - 200)
    }
  }

  const scrollRight = () => {
    const container = document.getElementById('category-container')
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' })
      setScrollPosition(container.scrollLeft + 200)
    }
  }

  return (
    <div className="relative">
      <div
        id="category-container"
        className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === 'All' ? 'default' : 'outline'}
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-background to-transparent w-12 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-background to-transparent w-12 pointer-events-none" />
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
        onClick={scrollLeft}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
        onClick={scrollRight}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

