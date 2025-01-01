/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from 'next/image'
import { Clock, Star } from 'lucide-react'
import { gql, useQuery } from '@apollo/client';

const GET_SINGLE_SHOP = gql`
  query Products {
    products {
      id
      name
      isAvailable
      price
      quantity
      description
      createdAt
      updatedAt
      images
    }
  }
`;


export default function OffersSection() {
  const { loading, error, data } = useQuery(GET_SINGLE_SHOP);


  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

    const products = data?.products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product: any) => (
        <a
          key={product.id}
          href={`/restaurants/${product?.id}`}
          className="block group"
        >
          <div className="relative aspect-[2/1] rounded-lg overflow-hidden mb-3">
            <Image
              src={product?.images[0]}
              alt={product?.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">{product?.name}</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{4.5}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>30 - 40 minutes</span>
              </div>
            </div>
            {/* {product.freeDelivery && ( */}
              <div className="text-sm text-green-600">Free delivery</div>
            {/* )} */}
          </div>
        </a>
      ))}
    </div>
  );
}

