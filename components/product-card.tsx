import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-2xl font-bold">{price}₸</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="outline">
          Add
        </Button>
      </CardFooter>
    </Card>
  )
}

