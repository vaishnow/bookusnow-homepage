import { useInfiniteQuery } from "@tanstack/react-query";
import { EventResp } from "@/types/types";
import eventsApi from "@/api/eventsApi";

type Props = {
  type?: string;
};

const useInfiniteEvents = ({ type }: Props) => {
  const fetchEvent = async ({ pageParam }: { pageParam?: unknown; } ) => {
    return await eventsApi
      .get<EventResp>("", { params: { type, page: pageParam } })
      .then((resp) => resp.data);
  };

  const { data, error, fetchNextPage,isLoading,hasNextPage,isFetching } = useInfiniteQuery<EventResp, Error>({
    queryKey: ["event", type],
    queryFn: fetchEvent,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined
  });

  return { data, error, fetchNextPage,isLoading,hasNextPage,isFetching  };
};

export default useInfiniteEvents;
