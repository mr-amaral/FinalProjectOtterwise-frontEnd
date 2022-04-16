import { Box, Flex, Image, Text } from "@chakra-ui/react"
import * as React from "react"
import { Link } from "react-router-dom"
import TimeAgo from "react-timeago"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import ptBrStrings from "react-timeago/lib/language-strings/pt-br"
import { data } from "../../utils/data"
const Cardtweet = ({ petImg, name, usernameProp, postTime, content }) => {
  const formatter = buildFormatter(ptBrStrings)
  return (
    <>
      <Flex
        w={["100%"]}
        h={["auto"]}
        border="1px"
        borderColor="gray.200"
        p={"20px 16px 16px 16px"}
        gap="8px"
      >
        <Box w="48px" h="48px">
          <Image
            w={["48px", "40px"]}
            h={["48px", "40px"]}
            src={data[0].image}
          ></Image>
        </Box>
        <Flex w={["272px", "100%"]} h={["auto"]} flexDirection={["column"]}>
          <Flex gap="4px">
            <Text
              fontWeight={["700"]}
              fontSize={["0.875rem", "1rem"]}
              lineHeight={["1.18rem", "1.27rem"]}
              letterSpacing={["-0.26px", "0"]}
              color={["gray.600", "#000000"]}
              as={Link}
              to={`/profile/${usernameProp}`}
            >
              {name}
            </Text>
            <Text
              fontWeight={["300", "400"]}
              fontSize={["0.75rem", "1rem"]}
              lineHeight={["1.05rem", "1.27rem"]}
              letterSpacing={["-0.26px", "0"]}
              color={["gray.600", "#828282"]}
            >
              @{usernameProp}
            </Text>
            <Text
              fontWeight={["300", "400"]}
              fontSize={["0.75rem", "1rem"]}
              lineHeight={["1rem", "1.27rem"]}
              letterSpacing={["-0.26px", "0"]}
              color={["gray.600", "#828282"]}
            >
              •
            </Text>
            <Text
              fontWeight={["300"]}
              fontSize={["0.75rem", "1rem"]}
              lineHeight={["1.05rem", "1.27rem"]}
              letterSpacing={["-0.26px", "0"]}
              color={["gray.600"]}
            >
              <TimeAgo date={new Date(postTime)} formatter={formatter} />
            </Text>
          </Flex>
          <Box>
            <Text
              w={["100%"]}
              fontWeight={["400"]}
              fontSize={["0.87rem", "1rem"]}
              lineHeight={["1rem", "1.37rem"]}
              letterSpacing={["-0.26px", "0"]}
              color={["#141619", "#333333"]}
            >
              {content}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Cardtweet
