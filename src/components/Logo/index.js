import { Flex, Image } from "@chakra-ui/react"
import React from "react"

const Logo = ({ logo }) => {
  return (
    <>
      <Flex mt="15px" mb="15px" justifyContent="center">
        <Image src={logo} />
      </Flex>
    </>
  )
}
export default Logo
