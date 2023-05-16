import axios from "axios";

const URL_API_RM = "https://rickandmortyapi.com";

const instanceAxiosRM = axios.create({
  baseURL: URL_API_RM,
});

export { instanceAxiosRM };
