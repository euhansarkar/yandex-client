import ProductSkeleton from "@/components/product-skeleton"
import SidebarSkeleton from "@/components/sidebar-skeleton"
import CartSkeleton from "@/components/cart-skeleton"
import { Skeleton } from "./skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen pt-16 sm:pt-24">
      <aside className="w-64 fixed top-16 left-0 bottom-0 p-4 bg-white border-r overflow-y-auto hidden lg:block">
        <SidebarSkeleton />
      </aside>
      <main className="lg:ml-64 xl:mr-80">
        <div className="container p-4">
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <div className="animate-pulse bg-green-100 h-4 w-48" />
          </div>
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        </div>
      </main>
      <aside className="w-80 fixed top-16 right-0 bottom-0 p-4 bg-white border-l hidden xl:block">
        <CartSkeleton />
      </aside>
    </div>
  )
}

