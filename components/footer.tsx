/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FooterSkeleton from './footer-skeleton'

interface FooterData {
  companyLinks: Array<{ title: string; href: string }>
  businessLinks: Array<{ title: string; href: string }>
  year: number
}

export default function Footer() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<FooterData>({
    companyLinks: [
      { title: 'User agreement', href: '#' },
      { title: 'Contacts', href: '#' },
      { title: 'Delivery', href: '#' },
      { title: 'FAQ', href: '#' },
      { title: 'Become a partner', href: '#' },
      { title: 'Become a courier', href: '#' },
    ],
    businessLinks: [
      { title: 'Eats for Business', href: '#' },
      { title: 'Plastic recycling', href: '#' },
      { title: 'Order food in the Yandex Go app', href: '#' },
      { title: 'Feedback', href: '#' },
    ],
    year: new Date().getFullYear(),
  })

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <FooterSkeleton />
  }

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Even easier in the app</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Company information</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {data.companyLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-4">
            {data.businessLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              © 2018–{data.year} Yandex Eats LLC
            </p>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="VK"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

