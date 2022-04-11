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

const Home = () => {
  const [petweets, setPetweets] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const { petweetsChange, setPetweetsChange } = useChange(false)
  const [textLenght, setTextLenght] = React.useState(0)
  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)

  const handleChange = (event) => {
    let inputValue = event.target.value
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
        <Flex w={["100%", "100%"]} flexDirection={["column"]}>
          <Flex display={["none", "flex"]} p={"34px"}>
            <Image
              width={"48px"}
              height={"48px"}
              borderRadius={"50%"}
              src={
                "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?w=626&ssl=1"
              }
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
                  width={"92px"}
                  height={["40px"]}
                  type="submit"
                >
                  Petwittar
                </Button>
              </Flex>
            </FormControl>
          </Flex>
          <InfiniteScroll
            dataLength={petweets.length}
            next={() => setPage(page + 1)}
            hasMore={hasMore}
            loader={
              <CircularProgress left={"50%"} isIndeterminate color="cyan.400" />
            }
          >
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
        </Flex>
        <Box
          display={["none", "flex"]}
          w={["24%"]}
          borderLeft={["none", "1px solid rgba(33,33,33,0.2)"]}
          h={["100vh"]}
        ></Box>
      </Flex>
    </>
  )
}

export default Home
