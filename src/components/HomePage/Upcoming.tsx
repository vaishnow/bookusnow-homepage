import useEvents from "@/hooks/useEvents";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";
import EventCard from "@/components/common/EventCard";
import { FaArrowRightLong } from "react-icons/fa6";

const Upcoming = () => {
  const { data } = useEvents({ type: "upcoming" });

  return (
    <div>
      <h3 className="flex items-center text-2xl font-medium mb-5 ">
        Upcoming Events <FaArrowRightLong className="ms-5" />
      </h3>
      <ScrollArea>
        <div className="flex flex-wrap justify-between w-full ">
          {data?.events.map((data) => (
            <EventCard data={data} />
          ))}
        </div>
        <ScrollBar orientation="vertical" className="hidden" />
      </ScrollArea>
    </div>
  );
};
export default Upcoming;
