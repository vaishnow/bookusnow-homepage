import eventsApi from "@/api/eventsApi";
import { useQuery } from "@tanstack/react-query";

type Props = {
  type?: string;
  page?: number;
};

type Events = {
  events: {
    cityName: string;
    date: string;
    distanceKm: string;
    eventName: string;
    imgUrl: string;
    weather: string;
  }[];
  page: number;
  pageSize: number;
  totalEvents: number;
  totalPages: number;
};

const useEvents = ({ page = 1, type }: Props) => {
  const fetchEvent = () =>
    eventsApi.get("", { params: { page, type } }).then((resp) => resp.data);

  const { data, error } = useQuery<Events, Error>({
    queryKey: [type, page],
    queryFn: fetchEvent,
  });

  return { data, error };
};

export default useEvents;
