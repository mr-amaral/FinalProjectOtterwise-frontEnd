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
          <Image w="48px" h="48px" src={data[0].image}></Image>
        </Box>
        <Flex w={["272px"]} h={["auto"]} flexDirection={["column"]}>
          <Flex gap="4px">
            <Text as={Link} to={`/profile/${usernameProp}`}>
              {name}
            </Text>
            <Text>{usernameProp}</Text>
            <Text>•</Text>
            <Text>
              <TimeAgo date={new Date(postTime)} formatter={formatter} />
            </Text>
          </Flex>
          <Box>
            <Text
              fontSize={"14px"}
              lineHeight="17.84px"
              letterSpacing={"-0.26"}
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
