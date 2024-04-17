import React from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react"
import { removeLocalStorage } from "../../../utils/removeLocalStorage.ts"
import { AiFillDelete } from "react-icons/ai"

export default function DeleteAlert() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        startContent={<AiFillDelete />}
        color="danger"
        variant="light"
        onPress={onOpen}
      >
        Borrar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-black">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cuidado</ModalHeader>
              <ModalBody>
                <p>
                  ¿Estás seguro que deseas borrar los datos del currículum? No
                  podrás volver a recuperarlos.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="danger" onPress={removeLocalStorage}>
                  Borrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
