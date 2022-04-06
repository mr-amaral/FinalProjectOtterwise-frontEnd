import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react"
import React from "react"

const ExitModal = (isOpenModal, onCloseModal, onOpenModal) => {
  return (
    <>
      <Modal isCentered isOpen={isOpenModal} onClose={onCloseModal}>
        <ModalContent>
          <ModalHeader>Sair desta conta?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Deseja realmente sair desta conta?</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Sair</Button>
            <Button colorScheme={"cyan"} onClick={onCloseModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ExitModal
