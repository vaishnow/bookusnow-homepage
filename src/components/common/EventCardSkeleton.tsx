import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  amount?: number;
};

const EventCardSkeleton = ({ amount = 1 }: Props) => {
  return Array.from({ length: amount }, (_, i) => (
    <Card key={i} className="mb-14 p-3 mx-[1px] border-bun-stroke max-w-full">
      <Skeleton className="mb-8 w-full sm:min-w-80 max-w-full aspect-[3/2] rounded-xl" />
      <Skeleton className="p-4 mb-1" />
      <Skeleton className="p-2" />
    </Card>
  ));
};

export default EventCardSkeleton;
