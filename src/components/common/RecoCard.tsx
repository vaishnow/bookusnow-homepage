import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getGDriveLink } from "@/utils/gDrive.utils";
import { EventDetails } from "@/types/types";
import { getFormattedDate } from "@/utils/date.utils";
import { TiLocation } from "react-icons/ti";
import { getFormattedWeatherandDistance } from "@/utils/events.utils";

type Props = {
  data: EventDetails;
  reference?: (node: HTMLDivElement) => void;
};

const RecoCard = ({
  data: { cityName, date, distanceKm, eventName, imgUrl, weather },
  reference,
}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div
      ref={reference}
      className="relative w-[270px] aspect-[2/3] overflow-hidden rounded-xl bg-black"
    >
      <img
        src={getGDriveLink(imgUrl)}
        alt={eventName}
        className={
          isLoading
            ? `size-0`
            : `size-full scale-125 object-contain object-center`
        }
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
      <Skeleton className="size-full bg-bun-ash" />
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
