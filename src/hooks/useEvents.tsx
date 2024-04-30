import { useQuery } from "@tanstack/react-query";
import eventsApi from "@/api/eventsApi";

type Props = {
  type?: string;
  page?: number;
};

type EventDetails = {
  cityName: string;
  date: string;
  distanceKm: string;
  eventName: string;
  imgUrl: string;
  weather: string;
};

type EventResp = {
  events: EventDetails[];
  page: number;
  pageSize: number;
  totalEvents: number;
  totalPages: number;
};

const useEvents = ({ page = 1, type }: Props) => {
  const fetchEvent = () =>
    eventsApi.get("", { params: { page, type } }).then((resp) => resp.data);

  const { data, error } = useQuery<EventResp, Error>({
    queryKey: [type, page],
    queryFn: fetchEvent,
  });

  return { data, error };
};

export default useEvents;
