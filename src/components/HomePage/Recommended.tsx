import useEvents from "@/hooks/useEvents";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useEffect, useState } from "react";

const Recommended = () => {
  const { data } = useEvents({ type: "reco" });

  const [recommendedEvents, setRecommendedEvents] = useState(data?.events);

  useEffect(() => {
    setRecommendedEvents(data?.events);
  }, [data]);

  return (
    <div>
      <ScrollArea>
        <div className="flex w-max space-x-4 p-4">
          {recommendedEvents?.map((item) => (
            <div className="size-36 bg-blue-600">
              {item.eventName}
              <img src={item.imgUrl} alt="" className="size-full" />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
};
export default Recommended;
