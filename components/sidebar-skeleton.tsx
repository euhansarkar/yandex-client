import { Skeleton } from "@/components/ui/skeleton"

export default function SidebarSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-8 w-24 mb-6" />
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full" />
      ))}
    </div>
  )
}

