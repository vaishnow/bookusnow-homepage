import useEvents from "@/hooks/useEvents";
import { getGDriveLink } from "@/utils/gDrive.utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";

const Upcoming = () => {
  const { data } = useEvents({ type: "upcoming" });

  return (
    <div>
      <ScrollArea>
        <div className="flex w-full space-x-4 p-4">
          {data?.events.map((item) => (
            <div className="size-36 bg-blue-600" key={item.eventName}>
              {item.eventName}
              <img
                src={getGDriveLink(item.imgUrl)}
                alt={item.eventName}
                className="size-full"
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="vertical" className="hidden" />
      </ScrollArea>
    </div>
  );
};
export default Upcoming;
