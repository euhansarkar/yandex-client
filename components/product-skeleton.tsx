import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ProductSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <Skeleton className="aspect-square w-full rounded-lg mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-6 w-1/3" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  )
}

