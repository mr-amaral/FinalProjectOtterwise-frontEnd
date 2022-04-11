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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import React, { useRef } from "react"
import { exit } from "../../assets/images"
import { Link as RRLink } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import { useNavigate } from "react-router-dom"

const HomeHeader = ({ btnMobile, logo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const auth = useAuth()
  const navigate = useNavigate()
  const handleClose1 = () => {
    onClose()
    setIsOpenModal(true)
  }

  const btnRef = useRef()
  return (
    <>
      <Flex
        flexDirection={["column"]}
        boxShadow={["0 2px 4px 0 rgba(33,33,33,0.2)", "none"]}
        w={["100%", "30%"]}
        h={["48px", "100vh"]}
        borderRight={["none", "1px solid rgba(33,33,33,0.2)"]}
        alignItems={["center", "center"]}
        justifyContent={["center", "flex-start"]}
      >
        <Flex
          flexDirection={["column"]}
          display={["flex", "none"]}
          position={["absolute"]}
          top="16px"
          bottom="16px"
          left="16px"
        >
          <Image
            w="24px"
            h="16px"
            src={btnMobile}
            alt="logo"
            onClick={() => onOpen()}
          />
        </Flex>
        <Box>
          <Image
            mt={["0", "24px"]}
            w={["116px", "225px"]}
            h={["28px", "54px"]}
            src={logo}
            alt="logo"
          />
        </Box>
        <Flex
          mt={["0", "24px"]}
          w={["100%"]}
          justifyContent={["center"]}
          flexDirection={["column"]}
          display={["none", "flex"]}
        >
          <Flex
            w={["100%"]}
            gap={["4px"]}
            align={["center"]}
            direction={"column"}
          >
            <Link as={RRLink} p={["4px"]} to={"/home"}>
              Home
            </Link>
            <Link as={RRLink} p={["4px"]} to={`/profile`}>
              Meu Perfil
            </Link>
            <Flex w={["100%"]} gap={["11px"]}>
              <Button
                onClick={handleClose1}
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

              {/* <ModalOverlay /> */}

              <Modal
                isCentered
                isOpen={isOpenModal}
                onClose={() => setIsOpenModal(false)}
              >
                <ModalOverlay
                  bg="rgba(0, 0, 0, 0.5)"
                  backdropFilter="auto"
                  // backdropInvert="80%"
                  backdropBlur="2px"
                />
                <ModalContent>
                  <ModalHeader>Sair desta conta?</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Deseja realmente sair desta conta?</Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      mr={["0.5rem"]}
                      onClick={() => auth.signout()}
                      onClose={() => setIsOpenModal(false)}
                    >
                      Sair
                    </Button>
                    <Button
                      colorScheme={"cyan"}
                      onClick={() => setIsOpenModal(false)}
                    >
                      Cancelar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>
        </Flex>
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
                src="https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?w=626&ssl=1"
                alt="user"
              />
            </DrawerHeader>

            <DrawerBody p={"0"} mt={"36px"}>
              <Flex gap={["4px"]} align={["center"]} direction={"column"}>
                <Link as={RRLink} p={["2px"]} to={"/home"}>
                  Home
                </Link>
                <Link as={RRLink} p={["2px"]} to={`/profile`}>
                  Meu Perfil
                </Link>
                <Flex w={["100%"]} gap={["11px"]}>
                  <Button
                    onClick={() => auth.signout(() => navigate("/login"))}
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
