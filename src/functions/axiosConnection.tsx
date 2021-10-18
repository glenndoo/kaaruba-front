import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    Authorization: "Bearer 5|Y3toG6PjcxXGqrWd6ldvmnTyZ8BZUk52coprsV0M",
  },
});
