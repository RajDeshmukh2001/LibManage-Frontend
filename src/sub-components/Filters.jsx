import { useState } from "react";
import FilterMenu from "./FilterMenu";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Filters = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(!open)} className="hidden h-max min-w-fit rounded-md bg-white p-2.5 shadow md:flex">
                <HiOutlineAdjustmentsHorizontal />
            </button>

            <div className={`fixed right-0 top-[70px] z-20 hidden h-full flex-col gap-5 border-l-1 overflow-y-scroll border-neutral-300 bg-white p-6 shadow-md transition duration-300 ease-in-out ${open ? "w-80 md:flex" : "w-0 md:hidden"}`}>
                <h4 className="text-lime-600">FILTERS</h4>
                <FilterMenu open={open} setOpen={setOpen} />
            </div>
        </>
    )
}

export default Filters;
