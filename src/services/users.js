import client from "../providers/client"

export const getUserByParams = (username) =>
  client.get(`/users?username=${username}`)
