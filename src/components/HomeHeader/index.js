import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import React, { useRef } from "react"
import { exit } from "../../assets/images"
import { useAuth } from "../../context/auth-context"
import DrawerLink from "../../components/DrawerLink"
import { useLocation } from "react-router-dom"
import { petImg } from "../../assets/images"

const HomeHeader = ({ btnMobile, logo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const auth = useAuth()
  const { pathname } = useLocation()

  const handleClose = () => {
    onClose()
    setIsOpenModal(true)
  }

  const btnRef = useRef()
  return (
    <>
      <Flex
        flexDirection={["column"]}
        position="fixed"
        bg={["#fff", "transparent"]}
        boxShadow={["0 2px 4px 0 rgba(33,33,33,0.2)", "none"]}
        w={["100%", "25%"]}
        h={["48px", "100vh"]}
        borderRight={["none", "1px solid rgba(33,33,33,0.2)"]}
        alignItems={["center", "center"]}
        justifyContent={["center", "flex-start"]}
      >
        <Image
          display={["flex", "none"]}
          position={["absolute"]}
          top="16px"
          bottom="16px"
          left="16px"
          w="24px"
          h="16px"
          src={btnMobile}
          alt="logo"
          onClick={() => onOpen()}
        />
        <Flex w={["100%"]} h={["70px"]}>
          <Image
            alignSelf={["center"]}
            w={["100%"]}
            // mt={["0", "24px"]}
            h={["28px", "54px"]}
            src={logo}
            alt="logo"
          />
        </Flex>
        <Flex
          mt={["0", "24px"]}
          w={["100%"]}
          flexDirection={["column"]}
          display={["none", "flex"]}
        >
          <DrawerLink
            icon={
              <svg
                width="30"
                height="30"
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.57501 17V11H12.575V17H17.575V9H20.575L10.575 0L0.575012 9H3.57501V17H8.57501Z"
                  fill={pathname === "/" ? "#00ACC1" : "#424242"}
                />
              </svg>
            }
            to={"/"}
          >
            Home
          </DrawerLink>
          <DrawerLink
            icon={
              <svg
                width="30"
                height="25"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.575 0C5.05501 0 0.575012 4.48 0.575012 10C0.575012 15.52 5.05501 20 10.575 20C16.095 20 20.575 15.52 20.575 10C20.575 4.48 16.095 0 10.575 0ZM10.575 3C12.235 3 13.575 4.34 13.575 6C13.575 7.66 12.235 9 10.575 9C8.91501 9 7.57501 7.66 7.57501 6C7.57501 4.34 8.91501 3 10.575 3ZM10.575 17.2C8.07501 17.2 5.86501 15.92 4.57501 13.98C4.60501 11.99 8.57501 10.9 10.575 10.9C12.565 10.9 16.545 11.99 16.575 13.98C15.285 15.92 13.075 17.2 10.575 17.2Z"
                  fill={
                    pathname === `/profile/${auth.user.username}`
                      ? "#00ACC1"
                      : "#424242"
                  }
                />
              </svg>
            }
            to={`/profile/${auth.user.username}`}
          >
            Meu Petfil
          </DrawerLink>

          <Button
            onClick={handleClose}
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
            gap={["11px"]}
            mt={["30px"]}
            to={`/login`}
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
              backdropBlur="2px"
            />
            <ModalContent w={["300px", "385px"]} h={["175px", "178px"]}>
              <ModalHeader>Sair desta conta?</ModalHeader>
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
                src={petImg}
                alt="user"
              />
            </DrawerHeader>

            <DrawerBody p={"0"} mt={"36px"}>
              <Flex flexDirection={["column"]}>
                <DrawerLink
                  icon={
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 21 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.57501 17V11H12.575V17H17.575V9H20.575L10.575 0L0.575012 9H3.57501V17H8.57501Z"
                        fill={pathname === "/" ? "#00ACC1" : "#424242"}
                      />
                    </svg>
                  }
                  to={"/"}
                >
                  Home
                </DrawerLink>
                <DrawerLink
                  icon={
                    <svg
                      width="30"
                      height="25"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.575 0C5.05501 0 0.575012 4.48 0.575012 10C0.575012 15.52 5.05501 20 10.575 20C16.095 20 20.575 15.52 20.575 10C20.575 4.48 16.095 0 10.575 0ZM10.575 3C12.235 3 13.575 4.34 13.575 6C13.575 7.66 12.235 9 10.575 9C8.91501 9 7.57501 7.66 7.57501 6C7.57501 4.34 8.91501 3 10.575 3ZM10.575 17.2C8.07501 17.2 5.86501 15.92 4.57501 13.98C4.60501 11.99 8.57501 10.9 10.575 10.9C12.565 10.9 16.545 11.99 16.575 13.98C15.285 15.92 13.075 17.2 10.575 17.2Z"
                        fill={
                          pathname === `/profile/${auth.user.username}`
                            ? "#00ACC1"
                            : "#424242"
                        }
                      />
                    </svg>
                  }
                  to={`/profile/${auth.user.username}`}
                >
                  Meu Perfil
                </DrawerLink>
              </Flex>

              <Button
                onClick={handleClose}
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
                mt={["15px"]}
                to={`/`}
              >
                <Image src={exit} />
                Sair
              </Button>
            </DrawerBody>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HomeHeader
