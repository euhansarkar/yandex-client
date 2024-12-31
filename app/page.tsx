import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ShopGrid from "@/components/shop-grid";
import CategoryFilter from "@/components/category-filter";
import OffersSection from "@/components/offers-section";

export default function ShopsPage() {
  return (
    <div className="container mx-auto px-4 pt-16 sm:pt-24">
      <div className="space-y-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Shops</h2>
            <button className="text-sm text-muted-foreground hover:text-primary">
              All
            </button>
          </div>
          <Suspense fallback={<Skeleton className="h-[120px] rounded-lg" />}>
            <ShopGrid />
          </Suspense>
        </section>

        <Suspense fallback={<Skeleton className="h-12 rounded-lg" />}>
          <CategoryFilter />
        </Suspense>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Offers</h2>
            <button className="text-sm text-muted-foreground hover:text-primary">
              All
            </button>
          </div>
          <Suspense fallback={<Skeleton className="h-[300px] rounded-lg" />}>
            <OffersSection />
          </Suspense>
        </section>
      </div>
    </div>
  );
}

