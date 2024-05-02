import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";
import useInfiniteEvents from "@/hooks/useInfiniteEvents";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import EventCard from "@/components/common/EventCard";
import EventCardSkeleton from "@/components/common/EventCardSkeleton";
import { FaArrowRightLong } from "react-icons/fa6";

const Upcoming = () => {
  const { data, fetchNextPage, isFetching } = useInfiniteEvents({
    type: "upcoming",
  });

  const triggerRef = useIntersectionObserver<HTMLDivElement>(
    () => fetchNextPage(),
    [isFetching]
  );

  return (
    <div>
      <h2 className="flex items-center text-xl font-medium mb-5 ">
        Upcoming Events <FaArrowRightLong className="ms-5" />
      </h2>
      <ScrollArea>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-between w-full ">
          {data?.pages.map((resp, pageIndex, pageArr) =>
            resp.events.map((event, eventIndex, eventArr) => (
              <EventCard
                key={event.eventName}
                reference={
                  pageIndex === pageArr.length - 1 &&
                  eventIndex === eventArr.length - 1
                    ? triggerRef
                    : undefined
                }
                data={event}
              />
            ))
          )}
          {isFetching && <EventCardSkeleton amount={8} />}
        </div>
        <ScrollBar orientation="vertical" className="hidden" />
      </ScrollArea>
    </div>
  );
};
export default Upcoming;
