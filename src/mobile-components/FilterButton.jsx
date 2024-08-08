import FiltersModal from "./FiltersModal";
import { useDisclosure, Button } from "@nextui-org/react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const FilterButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                onPress={onOpen}
                className="h-max min-w-fit rounded-md bg-white p-2 shadow md:hidden"
            >
                <span>
                    <HiOutlineAdjustmentsHorizontal className="text-base" />
                </span>
            </Button>
            <FiltersModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    )
}

export default FilterButton;
