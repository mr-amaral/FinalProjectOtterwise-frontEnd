import { postPetweet } from "../../services/petweets"
import { useState } from "react"
import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  FormControl,
  Text,
} from "@chakra-ui/react"
import { useChange } from "../../context/petweetChange-context"
import { postMobile } from "../../assets/images"
const ModalPetweet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { petweetsChange, setPetweetsChange } = useChange(false)
  const [textLenght, setTextLenght] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    let inputValue = event.target.value.trim()
    setTextLenght(inputValue.length)
  }
  const handleClose = () => {
    onClose()
    setTextLenght(0)
  }
  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    const formData = new FormData(event.target)
    const content = formData.get("content")

    try {
      await postPetweet({ content })
    } catch (error) {}
    setPetweetsChange(!petweetsChange)
    onClose()
    setIsLoading(false)
    event.target.reset()
  }

  return (
    <>
      <Image
        display={["flex", "none"]}
        position="fixed"
        bottom={"24px"}
        right={"16px"}
        onClick={onOpen}
        borderRadius={"50%"}
        src={postMobile}
      />

      <Modal onClose={handleClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent mt="33px">
          <Flex
            p="5px"
            borderBottom={"1px solid #EEEEEE"}
            justify={"space-between"}
          >
            <ModalCloseButton
              _focus={"transparent"}
              m={"14px 0 14px 30px"}
              position={"revert"}
            >
              <Text
                fontWeight="300"
                fontSize="12px"
                letterSpacing="-0.3px"
                lineHeight="21px"
              >
                {" "}
                Cancelar
              </Text>
            </ModalCloseButton>
            <ModalHeader p={"8px 8px 8px 0"}></ModalHeader>
          </Flex>

          <ModalBody>
            <FormControl as={"form"} onSubmit={handleSubmit}>
              <Flex>
                <Image
                  width={"37px"}
                  height={"37px"}
                  borderRadius={"50%"}
                  src={
                    "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
                  }
                  alt={""}
                />
                <Textarea
                  maxLength={"140"}
                  resize={"none"}
                  focusBorderColor="none"
                  border={"none"}
                  placeholder="O que está acontecendo?"
                  name="content"
                  onChange={handleChange}
                />
                <Text
                  color={"#828282"}
                  fontWeight="400"
                  position={"fixed"}
                  top="56px"
                  right="95px"
                >
                  {textLenght}/140
                </Text>
                <Button
                  isLoading={isLoading}
                  isDisabled={textLenght !== 0 ? false : true}
                  bg="#00B0FF"
                  position={"fixed"}
                  top="49px"
                  right={"8px"}
                  p={"5px"}
                  borderRadius={"10px"}
                  variant="solid"
                  type="submit"
                  color="white"
                  _hover={{ bg: "#00B0FF" }}
                >
                  Petwittar
                </Button>
              </Flex>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalPetweet
