'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ChatDialog from './chat-dialog'

export default function ChatButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        onClick={() => setOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

