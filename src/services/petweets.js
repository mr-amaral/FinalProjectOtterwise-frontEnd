import client from "../providers/client"

export const getAllPetweets = (params) => client.get("/petweets", { params })
export const deletePetweet = (id) => client.delete(`/petweets/${id}`)
export const postPetweet = (data) => client.post("/petweets", data)

export const getPetweetsByUserId = (userId, params) =>
  client.get(`/petweets/${userId}`, { params })
