import { useCallback, useRef } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";
import useInfiniteEvents from "@/hooks/useInfiniteEvents";
import EventCard from "@/components/common/EventCard";
import { FaArrowRightLong } from "react-icons/fa6";

const Upcoming = () => {
  const observer = useRef<IntersectionObserver | null>(null);

  const { data, fetchNextPage, hasNextPage ,isFetching,isLoading} = useInfiniteEvents({
    type: "upcoming",
  });

  const triggerRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) fetchNextPage();
      });
      if (node) observer.current.observe(node);
    },
    [isFetching]
  );

  return (
    <div>
      <h3 className="flex items-center text-2xl font-medium mb-5 ">
        Upcoming Events <FaArrowRightLong className="ms-5" />
      </h3>
      <ScrollArea>
        <div className="flex flex-wrap justify-between w-full ">
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
        </div>
        <ScrollBar orientation="vertical" className="hidden" />
      </ScrollArea>
    </div>
  );
};
export default Upcoming;
