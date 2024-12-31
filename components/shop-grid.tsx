/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

const GET_CATEGORIES = gql`
  query Query {
    shops {
      id
      name
      description
      businessHour
      location
      estDeliveryTime
    }
  }
`;

export default function ShopGrid() {

  const { loading, error, data } = useQuery(GET_CATEGORIES);
  
  
  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {data?.shops.map((shop: any) => (
        <Link
          key={shop?.name}
          href={`/shops/${shop?.id}`}
          className={`relative block aspect-[4/3] rounded-lg overflow-hidden ${shop?.backgroundColor} bg-gray-100 hover:opacity-90 transition-opacity`}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Image
              src={shop?.logo}
              alt={shop?.name}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50">
            <div className="flex items-center gap-1 text-white text-sm">
              <Clock className="h-3 w-3" />
              <span>{shop?.estDeliveryTime}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

