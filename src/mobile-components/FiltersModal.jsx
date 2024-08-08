import FilterMenu from "../sub-components/FilterMenu";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const FiltersModal = ({ isOpen, onOpenChange }) => {

    return (
        <Modal
            isOpen={isOpen}
            placement="bottom"
            onOpenChange={onOpenChange}
            scrollBehavior="inside"
            className="md:hidden"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="text-sm text-lime-600">FILTERS</ModalHeader>
                        <ModalBody>
                            <FilterMenu />
                        </ModalBody>
                        <ModalFooter>
                            <Button className="rounded border-1.5 text-sm w-full" size="sm" color="danger" variant="bordered">Clear</Button>
                            <Button className="rounded border-1.5 border-lime-700 bg-lime-200 text-lime-700 text-sm w-full" size="sm" onPress={onClose}>Apply</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default FiltersModal;