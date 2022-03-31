import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

const Header = ({ bgLogin, paw, Children }) => {
  return (
    <>
      <Flex
        flexDirection={["column", "row"]}
        backgroundImage={bgLogin}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        gap="10px"
      >
        <Box p="32px" mt="13.95px">
          <Image w="52.78" h="53.55px" src={paw} />
        </Box>
        <Box padding="0px 32px 24.88px 26px">
          <Text
            fontSize="36px"
            fontWeight="bold"
            lineHeight="49.03px"
            color="#fff"
          >
            {Children}
          </Text>
        </Box>
      </Flex>
    </>
  )
}

export default Header
