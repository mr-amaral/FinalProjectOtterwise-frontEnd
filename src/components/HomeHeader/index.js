import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react"
import React, { useRef } from "react"
import { exit } from "../../assets/images"

const HomeHeader = ({ btnMobile, logo, onClickModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = useRef()
  return (
    <>
      <Flex
        boxShadow={["0 2px 4px 0 rgba(33,33,33,0.2)"]}
        h="48px"
        alignItems={["center"]}
        justifyContent={["center"]}
      >
        <Flex position={["absolute"]} top="16px" bottom="16px" left="16px">
          <Image
            w="24px"
            h="16px"
            src={btnMobile}
            alt="logo"
            onClick={() => onOpen()}
          />
        </Flex>
        <Box>
          <Image w="116px" h="28px" src={logo} alt="logo" />
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex pt={"40px"} direction={"column"}>
            <DrawerHeader alignSelf={"center"}>
              <Image
                width={"56px"}
                height={"56px"}
                borderRadius={"50%"}
                src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                alt="user"
              />
            </DrawerHeader>

            <DrawerBody p={"0"} mt={"36px"}>
              <Flex gap={["4px"]} align={["center"]} direction={"column"}>
                <Link p={["2px"]} to={"/home"}>
                  Home
                </Link>
                <Link p={["2px"]} to={`/profile`}>
                  Meu Perfil
                </Link>
                <Flex w={["100%"]} gap={["11px"]}>
                  <Button
                    onClick={onClickModal}
                    w={["100%"]}
                    p={["10px"]}
                    border={["none"]}
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                    }}
                    _hover={{
                      boxShadow: "none",
                      outline: "none",
                    }}
                    background={["white"]}
                    boxShadow={["none"]}
                    display={["flex"]}
                    gap={["11px"]}
                    mt={["30px"]}
                    to={`/`}
                  >
                    <Image src={exit} />
                    Sair
                  </Button>
                </Flex>
              </Flex>
            </DrawerBody>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HomeHeader
