import React from "react"
import { btnMobile, logo } from "../../assets/images"
import HomeHeader from "../../components/HomeHeader"
import { getAllPetweets, postPetweet } from "../../services/petweets.js"
import CardTweet from "../../components/CardTweet"
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  FormControl,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react"
import { useChange } from "../../context/petweetChange-context"
import InfiniteScroll from "react-infinite-scroll-component"
import ModalPetweet from "../../components/ModalPetweet"
import { petImg } from "../../assets/images"

const Home = () => {
  const [petweets, setPetweets] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const { petweetsChange, setPetweetsChange } = useChange(false)
  const [textLenght, setTextLenght] = React.useState(0)
  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)

  const handleChange = (event) => {
    let inputValue = event.target.value.trim()
    setTextLenght(inputValue.length)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.target)
    const content = formData.get("content")
    try {
      await postPetweet({ content })
      setPetweetsChange(!petweetsChange)
      setIsLoading(false)
      setPage(1)
      event.target.reset()
      setTextLenght(0)
    } catch (error) {}
  }
  React.useEffect(() => {
    try {
      const request = async () => {
        const response = await getAllPetweets({ page, perPage: 10 })
        if (page === 1) {
          setPetweets(response.data.petweets)
        } else {
          setPetweets(petweets.concat(response.data.petweets))
        }
        setHasMore(page < response.data.pagination.pageCount)
      }
      request()
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petweetsChange, page])

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
      <Flex flexDirection={["column", "row"]} h={["100vh"]}>
        <HomeHeader w={["100%"]} btnMobile={btnMobile} logo={logo} />
        <Flex
          mt={["48px", "0"]}
          ml={["0", "25%"]}
          w={["100%", "60%"]}
          flexDirection={["column"]}
        >
          <Flex
            borderLeft={"1px solid rgba(0, 0, 0, 0.1)"}
            borderRight={"1px solid rgba(0, 0, 0, 0.1)"}
            display={["none", "flex"]}
            p={"34px 0 0 34px"}
          >
            <Image
              width={"48px"}
              height={"48px"}
              borderRadius={"50%"}
              src={petImg}
              alt={"avatar"}
            />
            <FormControl as={"form"} onSubmit={handleSubmit}>
              <Flex>
                <Textarea
                  resize={"none"}
                  focusBorderColor="none"
                  border={"none"}
                  placeholder="O que está acontecendo?"
                  name="content"
                  onChange={handleChange}
                  maxLength={140}
                />

                <Text
                  color={"#828282"}
                  fontWeight="400"
                  m={"110px 10px 25px 0"}
                >
                  {textLenght}/140
                </Text>
                <Button
                  isLoading={isLoading}
                  isDisabled={textLenght !== 0 ? false : true}
                  m={"103px 30px 25px 0"}
                  borderRadius={"10px"}
                  variant="solid"
                  p={["20px"]}
                  bg={["#00ACC1"]}
                  color={["#fff"]}
                  height={["40px"]}
                  _hover={{ bg: "#00ACC1", color: "#fff" }}
                  type="submit"
                >
                  Petwittar
                </Button>
              </Flex>
            </FormControl>
          </Flex>
          {petweets.length > 0 ? (
            <InfiniteScroll
              scrollThreshold={0.5}
              dataLength={petweets.length}
              next={() => setPage(page + 1)}
              hasMore={hasMore}
              loader={
                <CircularProgress
                  mt={["50px"]}
                  isIndeterminate
                  color="cyan.400"
                  p={["16px"]}
                />
              }
            >
              <Box
                display={["none", "block"]}
                bg={"rgba(0, 0, 0, 0.2)"}
                h={"10px"}
              ></Box>
              {petweets?.map((user) => (
                <CardTweet
                  key={user.id}
                  name={user.user.name}
                  usernameProp={user.user.username}
                  content={user.content}
                  postTime={user.createdAt}
                />
              ))}
            </InfiniteScroll>
          ) : (
            <CircularProgress left={"50%"} isIndeterminate color="cyan.400" />
          )}
        </Flex>
        <Box display={["none", "flex"]} w={["24%"]} h={["100vh"]}></Box>
      </Flex>
      <ModalPetweet handleSubmit={handleSubmit} handleChange={handleChange} />
    </>
  )
}

export default Home
