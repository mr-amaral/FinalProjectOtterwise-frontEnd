import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { btnMobile, logo, petImg } from "../../assets/images"
import HomeHeader from "../../components/HomeHeader"

const Profile = () => {
  return (
    <>
      <HomeHeader btnMobile={btnMobile} logo={logo} />
      <Flex gap={["12px"]} p={"16px 16px 0 16px"} flexDirection={"column"}>
        <Flex gap={["16px"]}>
          <Box w={["73px"]}>
            <Image w={["100%"]} src={petImg} />
          </Box>
          <Flex gap={["4px"]} flexDirection={"column"}>
            <Text
              fontWeight={["700"]}
              fontSize={["22px"]}
              lineHeight={["29.96px"]}
              letterSpacing={["-0.3px"]}
            >
              Niko Vira-lata
            </Text>
            <Text
              fontWeight={["400"]}
              fontSize={["16px"]}
              lineHeight={["21.79px"]}
              letterSpacing={["-0.3px"]}
            >
              @doguinhoniko_20
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent={["flex-start"]}>
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
      </Flex>
    </>
  )
}

export default Profile
