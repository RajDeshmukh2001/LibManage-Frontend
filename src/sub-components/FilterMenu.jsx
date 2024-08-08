import RangeFilter from "../helpers/RangeFilter";
import CategoryCheckbox from "../helpers/CategoryCheckbox";
import { useFilterContext } from "../context/FilterContext";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

const FilterMenu = ({ open, setOpen }) => {
    const { filters: { category }, updateFilterValue, clearFilters } = useFilterContext();

    return (
        <div className="flex flex-col gap-3 md:gap-6">
            <RangeFilter />

            <div>
                <Accordion isCompact>
                    <AccordionItem key="1" aria-label="Category" title="Category">
                        <CategoryCheckbox category={category} updateFilterValue={updateFilterValue} />
                    </AccordionItem>
                </Accordion>
            </div>
            <hr />

            <div className="mt-2 hidden flex-col gap-2 md:flex">
                <div className="flex items-center justify-between gap-2">
                    <Button className="w-full rounded border-1.5 border-lime-700 bg-white text-base text-lime-700" onClick={() => setOpen(!open)}>Close</Button>
                    
                    <Button className="w-full rounded border-1.5 text-base" color="danger" variant="bordered" onClick={clearFilters}>Clear</Button>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu;
