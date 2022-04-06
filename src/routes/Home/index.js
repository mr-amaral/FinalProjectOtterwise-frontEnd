import React from "react"
import { btnMobile, logo } from "../../assets/images"
import HomeHeader from "../../components/HomeHeader"
import { getAllPetweets, postPetweet } from "../../services/petweets.js"
import CardTweet from "../../components/CardTweet"

const Home = () => {
  const [petweets, setPetweets] = React.useState([])
  console.log(petweets)

  React.useEffect(() => {
    try {
      const request = async () => {
        const response = await getAllPetweets()

        setPetweets(response.data.petweets)
      }
      request()
    } catch (error) {}
  }, [])

  return (
    <>
      <HomeHeader btnMobile={btnMobile} logo={logo} />
      {petweets?.map((user) => (
        <CardTweet
          key={user.id}
          name={user.user.name}
          username={user.user.username}
          content={user.content}
          postTime={user.createdAt}
        />
      ))}
    </>
  )
}

export default Home
