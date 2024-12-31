import Image from 'next/image'
import { Clock, Star } from 'lucide-react'

const offers = [
  {
    id: 1,
    name: 'KFC Ainabulak',
    image: '/placeholder.svg?height=300&width=600',
    rating: 4.5,
    deliveryTime: '35-45 min',
    freeDelivery: true,
  },
  {
    id: 2,
    name: 'Salam Bro',
    image: '/placeholder.svg?height=300&width=600',
    rating: 4.7,
    deliveryTime: '30-40 min',
    freeDelivery: true,
  },
  {
    id: 3,
    name: 'Mangal Doner',
    image: '/placeholder.svg?height=300&width=600',
    rating: 4.7,
    deliveryTime: '35-45 min',
    freeDelivery: true,
  },
]

export default function OffersSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {offers.map((offer) => (
        <a
          key={offer.id}
          href={`/restaurants/${offer.id}`}
          className="block group"
        >
          <div className="relative aspect-[2/1] rounded-lg overflow-hidden mb-3">
            <Image
              src={offer.image}
              alt={offer.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">{offer.name}</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{offer.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{offer.deliveryTime}</span>
              </div>
            </div>
            {offer.freeDelivery && (
              <div className="text-sm text-green-600">Free delivery</div>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}

