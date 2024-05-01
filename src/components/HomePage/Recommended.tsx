import useEvents from "@/hooks/useEvents";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useEffect, useState } from "react";
import RecoCard from "@/components/common/RecoCard";
import { FaArrowRightLong } from "react-icons/fa6";

const Recommended = () => {
  const { data } = useEvents({ type: "reco" });

  const [recommendedEvents, setRecommendedEvents] = useState(data?.events);

  useEffect(() => {
    setRecommendedEvents(data?.events);
  }, [data]);

  return (
    <div className="relative h-96">
      <div className="absolute top-0 z-10 -translate-y-36 w-full">
        <div className="text-white flex justify-between items-center pe-[5%]">
          <h3 className="flex items-center text-2xl font-medium">
            Recommended Shows <FaArrowRightLong className="ms-5" />
          </h3>
          <a href="#" className="p-3 underline underline-offset-4">See all</a>
        </div>
        <ScrollArea className="overflow-visible">
          <div className="flex w-max space-x-4 py-4">
            {recommendedEvents?.map((item) => (
              <RecoCard data={item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>
    </div>
  );
};
export default Recommended;
