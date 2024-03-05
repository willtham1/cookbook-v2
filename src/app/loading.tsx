import SkeletonCard from "@/components/SkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="grid grid-cols-3 gap-8">
        {"123456789".split('').map(i => (
            <SkeletonCard key={i} />
        ))}
    </div>
  )
}
