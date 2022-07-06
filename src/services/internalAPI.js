import axios from "axios";

export const internalApi = axios.create({
  baseURL: "https://json-sever-let-me-game.herokuapp.com/",
  timeout: 15000,
});
