import axios from "axios";

const eventsApi = axios.create({
  baseURL: "https://gg-backend-assignment.azurewebsites.net/api/Events",
  params: { code: "FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==" },
});

export default eventsApi;
