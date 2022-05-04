import { Box, CircularProgress, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { btnMobile, logo, petImg } from "../../assets/images"
import HomeHeader from "../../components/HomeHeader"
import { getUserByParams } from "../../services/users"
import Cardtweet from "../../components/CardTweet"
import { getPetweetsByUserId } from "../../services/petweets"
import { useParams } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component"

const Profile = () => {
  const [petweets, setPetweets] = React.useState([])
  const [user, setUser] = React.useState(false)
  const { username } = useParams()
  const [hasMore, setHasMore] = React.useState(true)
  const [page, setPage] = React.useState(1)

  const capitalize = (s) => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

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

  React.useLayoutEffect(() => {
    setPage(1)
  }, [username])

  React.useEffect(() => {
    try {
      const request = async () => {
        const responsePetweets = await getPetweetsByUserId(user.id, {
          page,
          perPage: 10,
        })

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
          ml={["0", "25%"]}
          mt={["48px", "0"]}
          w={["100%", "60%"]}
          p={["16px 0 0 0", "0"]}
          flexDirection={"column"}
        >
          <Flex
            flexDirection={"column"}
            borderLeft={"1px solid rgba(0, 0, 0, 0.1)"}
            borderRight={"1px solid rgba(0, 0, 0, 0.1)"}
          >
            <Flex mt={["0", "20px"]} p={["16px"]} gap={["16px"]}>
              <Box minW={["73px", "90px", "120px"]}>
                <Image w={["100%"]} src={petImg} />
              </Box>
              <Flex p={["16px"]} gap={["4px"]} flexDirection={"column"}>
                <Text
                  fontWeight={["700"]}
                  fontSize={["22px"]}
                  lineHeight={["29.96px"]}
                  letterSpacing={["-0.3px"]}
                >
                  {user ? capitalize(user.name) : ""}
                </Text>
                <Text
                  fontWeight={["400"]}
                  fontSize={["16px"]}
                  lineHeight={["21.79px"]}
                  letterSpacing={["-0.3px"]}
                >
                  @{user?.username}
                </Text>
              </Flex>
            </Flex>
            <Flex p={["16px 0 0 16px"]} justifyContent={["flex-start"]}>
              <Text
                align={"center"}
                w={["86px", "92px"]}
                p={["0 0 4.5px 0"]}
                fontWeight={["600", "700"]}
                fontSize={["16px", "18px"]}
                lineHeight={["21.79px", "24.51px"]}
                borderBottom={["3px solid #00ACC1", "6px solid #00ACC1"]}
              >
                Petposts
              </Text>
            </Flex>
          </Flex>
          {petweets.length > 0 ? (
            <InfiniteScroll
              scrollThreshold={0.5}
              border={["1px solid rgba(33,33,33,0.2)"]}
              dataLength={petweets.length}
              next={() => setPage(page + 1)}
              hasMore={hasMore}
              loader={
                <CircularProgress
                  mt={["16px"]}
                  left={"50%"}
                  isIndeterminate
                  color="cyan.400"
                  p={["16px"]}
                />
              }
            >
              {petweets?.map((petweet) => (
                <Cardtweet
                  key={petweet?.id}
                  name={petweet?.user.name}
                  usernameProp={petweet?.user.username}
                  postTime={petweet?.createdAt}
                  content={petweet?.content}
                />
              ))}
            </InfiniteScroll>
          ) : (
            <Flex>
              <Text margin={"16px"} color={"red"} fontSize={["20px", "25px"]}>
                Você não possui petweets!
              </Text>
            </Flex>
          )}
        </Flex>
        <Box display={["none", "flex"]} w={["30%"]} h={["100vh"]}></Box>
      </Flex>
    </>
  )
}

export default Profile
