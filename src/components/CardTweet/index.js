import { Box, Flex, Image, Text } from "@chakra-ui/react"
import * as React from "react"
import TimeAgo from "timeago-react"

const Cardtweet = ({ petImg, name, username, postTime, content }) => {
  return (
    <>
      <Flex
        w={["100%"]}
        h={["auto"]}
        border="1px"
        borderColor="gray.200"
        p={"20px 16px 16px 16px"}
        justifyContent={"center"}
        gap="8px"
      >
        <Box w="48px" h="48px">
          <Image w="48px" h="48px" src={petImg}></Image>
        </Box>
        <Flex w={["272px"]} h={["auto"]} flexDirection={["column"]}>
          <Flex gap="4px">
            <Text>{name}</Text>
            <Text>{username}</Text>
            <Text>•</Text>
            <Text>
              <TimeAgo datetime={new Date(postTime)} />
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
