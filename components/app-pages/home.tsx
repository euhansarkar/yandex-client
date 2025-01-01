/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Sidebar from "@/components/sidebar";
import Cart from "@/components/cart";
import ChatButton from "@/components/chat-button";
import ProductCard from "@/components/product-card";
import ProductSkeleton from "@/components/product-skeleton";
import Banner from "@/components/banner";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";


const GET_SINGLE_SHOP = gql`
  query SingleShop($shopId: ID!) {
    shop(id: $shopId) {
      id
      name
      logo
      isClosed
      description
      location
      businessHour
      estDeliveryTime
      categories {
        id
        title
        description
        createdAt
        updatedAt
        products {
          id
          name
          description
          images
          isAvailable
          price
          quantity
          createdAt
          updatedAt
        }
      }
    }
  }
`;

interface HomeProps {
    shopId: string;
}

export default function Home({ shopId}: HomeProps) {

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategoryClick = (id: string) => {
    // Update the URL with the category id
    const newSearchParams = new URLSearchParams(searchParams as any);
    newSearchParams.set("category", id);

    // Push the updated URL
    router.push(`?${newSearchParams.toString()}`, { scroll: false });

    // Scroll to the category
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const categoryId = searchParams.get("category");
    if (categoryId) {
      document
        .getElementById(categoryId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);
  
const { loading, error, data } = useQuery(GET_SINGLE_SHOP, { variables: {shopId} });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

    const shop = data?.shop;
    
  return (
    <div className="min-h-screen pt-16 sm:pt-24">
      <Sidebar categoryClickHandler={handleCategoryClick} loading={loading} data={shop} />
      <main className="lg:ml-64 xl:mr-80">
        <div className="container p-4">
          <Banner
            businessHour={shop?.businessHour}
            description={shop?.description}
            isClosed={shop?.isClosed}
            location={shop?.location}
            name={shop?.name}
            logo={shop?.logo}
            estDeliveryTime={shop?.estDelivery}
            id={shop?.id}
          />
          <div className="m-2 ">
            {shop?.categories?.map((category: any) => (
              <div key={category?.id} id={category.id} className="my-10">
                <h1 className="text-2xl font-bold mb-6">{category?.title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <ProductSkeleton key={i} />
                      ))
                    : category?.products.map((product: any) => (
                        <ProductCard key={product?.id} {...product} />
                      ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Cart />
      <ChatButton />
    </div>
  );
}
