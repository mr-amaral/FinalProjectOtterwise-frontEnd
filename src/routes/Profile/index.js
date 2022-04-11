import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { btnMobile, logo, petImg } from "../../assets/images"
import HomeHeader from "../../components/HomeHeader"
import { getUserByParams } from "../../services/users"
import Cardtweet from "../../components/CardTweet"
import { getPetweetsByUserId } from "../../services/petweets"
import { useAuth } from "../../context/auth-context"
import { useParams } from "react-router-dom"

const Profile = () => {
  const [petweets, setPetweets] = React.useState([])
  const [user, setUser] = React.useState([])
  const { username } = useParams()
  const [hasMore, setHasMore] = React.useState(true)
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    try {
      const request = async () => {
        const response = await getUserByParams(username)
        setUser(response.data.data.user)
      }
      request()
    } catch (error) {
      console.log(error)
    }
  }, [username])

  React.useEffect(() => {
    try {
      const request = async () => {
        const responsePetweets = await getPetweetsByUserId(user.id, {
          page,
          perPage: 10,
        })
        console.log(page)
        if (page === 1) {
          setPetweets(responsePetweets.data.petweets)
        } else {
          setPetweets(petweets.concat(responsePetweets.data.petweets))
        }
        setHasMore(page < responsePetweets.data.pagination.pageCount)
      }
      if (user) {
        request()
      }
    } catch (error) {
      console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, user])

  return (
    <>
      <Flex flexDirection={["column", "row"]} h={["100vh"]}>
        <HomeHeader btnMobile={btnMobile} logo={logo} />
        <Flex
          w={["100%", "50%"]}
          // gap={["12px"]}
          p={["16px 0 0 0", "0"]}
          flexDirection={"column"}
        >
          <Flex p={["16px"]} gap={["16px"]}>
            <Box w={["73px"]}>
              <Image w={["100%"]} src={petImg} />
            </Box>
            <Flex p={["16px"]} gap={["4px"]} flexDirection={"column"}>
              <Text
                fontWeight={["700"]}
                fontSize={["22px"]}
                lineHeight={["29.96px"]}
                letterSpacing={["-0.3px"]}
              >
                {user?.name}
              </Text>
              <Text
                fontWeight={["400"]}
                fontSize={["16px"]}
                lineHeight={["21.79px"]}
                letterSpacing={["-0.3px"]}
              >
                {user?.username}
              </Text>
            </Flex>
          </Flex>
          <Flex p={["16px 0 0 16px"]} justifyContent={["flex-start"]}>
            <Text
              p={["0 0 4.5px 0"]}
              fontWeight={["600"]}
              fontSize={["16px"]}
              lineHeight={["21.79px"]}
              borderRadius={["3px"]}
              borderBottom={"3px solid #00ACC1"}
            >
              Petposts
            </Text>
          </Flex>
          {petweets?.map((petweet) => (
            <Cardtweet
              key={petweet?.id}
              name={petweet?.user.name}
              usernameProp={petweet?.user.username}
              postTime={petweet?.createdAt}
              content={petweet?.content}
            />
          ))}
        </Flex>
        <Box
          display={["none", "flex"]}
          w={["30%"]}
          borderLeft={["none", "1px solid rgba(33,33,33,0.2)"]}
          h={["100vh"]}
        ></Box>
      </Flex>
    </>
  )
}

export default Profile
