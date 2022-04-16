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
import { exit, homeIcon, profileIcon } from "../../assets/images"
import { useAuth } from "../../context/auth-context"
import DrawerLink from "../../components/DrawerLink"

const HomeHeader = ({ btnMobile, logo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const auth = useAuth()

  const handleClose = () => {
    onClose()
    setIsOpenModal(true)
  }

  const btnRef = useRef()
  return (
    <>
      <Flex
        flexDirection={["column"]}
        boxShadow={["0 2px 4px 0 rgba(33,33,33,0.2)", "none"]}
        w={["100%", "40%", "25%"]}
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
        <Flex w={["100%"]} h={["48px"]}>
          <Image
            alignSelf={["center"]}
            w={["100%"]}
            mt={["0", "24px"]}
            h={["28px", "54px"]}
            src={logo}
            alt="logo"
          />
        </Flex>
        <Flex
          mt={["0", "24px"]}
          w={["100%"]}
          justifyContent={["center"]}
          flexDirection={["column"]}
          display={["none", "flex"]}
        >
          <DrawerLink icon={homeIcon} to={"/"}>
            Home
          </DrawerLink>
          <DrawerLink icon={profileIcon} to={`/profile/${auth.user.username}`}>
            Meu Perfil
          </DrawerLink>
          <Flex w={["100%"]} gap={["11px"]}>
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
              <Flex flexDirection={["column"]}>
                <DrawerLink to={"/"}>Home</DrawerLink>
                <DrawerLink to={`/profile/${auth.user.username}`}>
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
