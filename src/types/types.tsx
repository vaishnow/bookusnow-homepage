export type EventDetails = {
  cityName: string;
  date: string;
  distanceKm: string;
  eventName: string;
  imgUrl: string;
  weather: string;
};

export type EventResp = {
  events: EventDetails[];
  page: number;
  pageSize: number;
  totalEvents: number;
  totalPages: number;
};
