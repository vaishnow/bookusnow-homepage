import { getGDriveLink } from "@/utils/gDrive.utils";
import { EventDetails } from "@/types/types";
import { getFormattedDate } from "@/utils/date.utils";
import { TiLocation } from "react-icons/ti";
import { getFormattedWeatherandDistance } from "@/utils/events.utils";

type Props = {
  data: EventDetails;
};

const RecoCard = ({
  data: { cityName, date, distanceKm, eventName, imgUrl, weather },
}: Props) => {
  return (
    <div className="relative w-[280px] h-[420px] overflow-hidden rounded-xl bg-black">
      <img
        src={getGDriveLink(imgUrl)}
        alt={eventName}
        className="size-full scale-125 object-contain object-center"
        loading="lazy"
      />
      <div className="absolute bottom-0 text-white whitespace-nowrap inset-x-0 p-4">
        <div className="flex justify-between items-center my-2">
          {/* <span>{eventName}</span> */}
          <span className="text-xl font-medium">Make Agree</span>
          <span className="text-xs text-bun-stroke font-medium">
            {getFormattedDate(date)}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs text-bun-stroke">
          <span className="flex">
            <TiLocation className="size-4 me-2" />
            {cityName}
          </span>
          <span>{getFormattedWeatherandDistance(weather, distanceKm)}</span>
        </div>
      </div>
    </div>
  );
};

export default RecoCard;
