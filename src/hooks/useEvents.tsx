import { useQuery } from "@tanstack/react-query";
import { EventResp } from "@/components/types/types";
import eventsApi from "@/api/eventsApi";

type Props = {
  type?: string;
  page?: number;
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
