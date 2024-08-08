import { useFilterContext } from "../context/FilterContext";

const Sorting = ({ sorting, name }) => {
    const { updateFilterValue } = useFilterContext();

    return (
        <select
            name={name}
            onChange={updateFilterValue}
            className="rounded-md border-none bg-white p-2 md:px-3 md:py-2 text-[13px] md:text-[15px] shadow outline-none"
        >
            {sorting.map((sort) => (
                <option key={sort.id} value={sort.value}>
                    {sort.text}
                </option>
            ))}
        </select>
    )
}

export default Sorting;
