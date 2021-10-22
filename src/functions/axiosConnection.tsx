import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    Authorization: "Bearer 2|Q3oDckajmpNSCANsCfHudf4L2lMxFZGxyKqulFgN",
  },
});
