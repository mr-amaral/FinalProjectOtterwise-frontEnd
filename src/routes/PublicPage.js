import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { logo, btnMobile, dogimg, petImg } from "../assets/images"
import Cardtweet from "../components/CardTweet"
import { useRef } from "react"

function PublicPage() {
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
        w={"258px"}
      >
        <DrawerOverlay />
        <DrawerContent w={"100px"}>
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
              <Flex direction={"column"} align="center">
                <Link to={"/home"}>Home</Link>
                <Link to={`/profile`}>Meu Petfil</Link>
              </Flex>
            </DrawerBody>
          </Flex>
        </DrawerContent>
      </Drawer>

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
            <Text
              color={"gray.600"}
              fontWeight={"300"}
              fontSize={"12px"}
              lineHeight="17px"
              letterSpacing={"-0.26"}
            >
              Niko Vira-lata
            </Text>
            <Text
              color={"gray.600"}
              fontWeight={"300"}
              fontSize={"12px"}
              lineHeight="17px"
              letterSpacing={"-0.26"}
            >
              @doguinhoniko_20
            </Text>
            <Text
              color={"gray.600"}
              fontWeight={"300"}
              fontSize={"12px"}
              lineHeight="17px"
              letterSpacing={"-0.26"}
            >
              •
            </Text>
            <Text
              color={"gray.600"}
              fontWeight={"300"}
              fontSize={"12px"}
              lineHeight="17px"
              letterSpacing={"-0.26"}
            >
              2h
            </Text>
          </Flex>
          <Box>
            <Text
              fontSize={"14px"}
              lineHeight="17.84px"
              letterSpacing={"-0.26"}
            >
              Name a show where the lead character is the worst character on the
              show I’ll get Sabrina Spellman. Name a show where the lead
              character is the worst character on the show I’ll get Sabrina
              Spellman.{" "}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default PublicPage
