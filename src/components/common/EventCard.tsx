import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TiLocation } from "react-icons/ti";
import { EventDetails } from "@/types/types";
import { getGDriveLink } from "@/utils/gDrive.utils";
import { getFormattedDate } from "@/utils/date.utils";
import { getFormattedWeatherandDistance } from "@/utils/events.utils";

type Props = {
  data: EventDetails;
  reference?: (node: HTMLDivElement) => void;
};

const EventCard = ({
  data: { cityName, date, distanceKm, eventName, imgUrl, weather },
  reference,
}: Props) => {
  return (
    <Card ref={reference} className="mb-14 p-3 mx-[1px] border-bun-stroke">
      <CardContent className="mb-8 overflow-hidden w-96 h-64 rounded-xl relative">
        <img
          src={getGDriveLink(imgUrl)}
          alt={eventName}
          className="w-50 scale-[1.30] origin-center object-cover"
        />
        <div className="absolute bottom-0 bg-[#0008] h-10  text-white p-2 ps-5 inset-x-0">
          {getFormattedDate(date)}
        </div>
      </CardContent>
      {/* <CardTitle>{eventName}</CardTitle> */}
      <CardTitle className="text-xl font-semibold mb-1">
        After note nearly
      </CardTitle>
      <CardDescription className="flex justify-between from-bun-ash">
        <span className="flex">
          <TiLocation className="me-1 size-5" /> {cityName}
        </span>
        <span>{getFormattedWeatherandDistance(weather, distanceKm)}</span>
      </CardDescription>
    </Card>
  );
};

export default EventCard;
