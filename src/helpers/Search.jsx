import { TbSearch } from "react-icons/tb";
import { useFilterContext } from "../context/FilterContext";

const Search = ({ search }) => {
    const { updateFilterValue } = useFilterContext();
    
    return (
        <div className="w-full flex items-center gap-2 py-2 px-3 bg-white shadow rounded-md">
            <TbSearch className="text-neutral-400" />
            <input
                type="text"
                name="search"
                value={search}
                onChange={updateFilterValue}
                autoComplete="off"
                placeholder="Search..."
                className="text-[15px] md:w-72 outline-none border-none placeholder:font-[350] placeholder:tracking-wide placeholder:italic placeholder:text-slate-400" 
            />
        </div>
    )
}

export default Search;