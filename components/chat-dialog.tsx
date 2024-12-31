'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

const helpTopics = [
  {
    title: 'Payment and promo codes',
    description: 'Get help with cards, discounts, and order prices',
    href: '#',
  },
  {
    title: 'Partnership',
    description: 'Become a courier or partner',
    href: '#',
  },
  {
    title: 'Another question',
    description: 'We will also deal with it',
    href: '#',
  },
]

interface ChatDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ChatDialog({ open, onOpenChange }: ChatDialogProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle>How can we help you?</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>
        <div className="divide-y">
          {helpTopics.map((topic) => (
            <a
              key={topic.title}
              href={topic.href}
              className="flex items-start p-6 hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-medium mb-1">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </div>
              <svg
                className="h-5 w-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

