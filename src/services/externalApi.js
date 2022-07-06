import axios from "axios"

// rest para listagem dos jogos na Home
export const Api = axios.create({
  baseURL: `https://api.rawg.io/api/`,
})
