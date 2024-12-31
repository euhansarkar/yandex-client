import { Skeleton } from "@/components/ui/skeleton"

export default function FooterSkeleton() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Skeleton className="h-6 w-40" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
          
          <div className="space-y-4">
            <Skeleton className="h-6 w-48" />
            <div className="grid gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-24" />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-32" />
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}

