import { useState } from "react";
import Search from "../helpers/Search";
import Sorting from "../helpers/Sorting";
import Books from "../sub-components/Books";
import Filters from "../sub-components/Filters";
import NumbersOfItems from "../helpers/NumbersOfItems";
import sorting from "../../json-data/booksSorting.json";
import { useFilterContext } from "../context/FilterContext";
import FilterButton from "../mobile-components/FilterButton";
import PaginationComp from "../sub-components/PaginationComp";

const ManageBooks = () => {
    const [page, setPage] = useState(1);
    const { filters: { search }, filteredBooks } = useFilterContext();
    const numberOfItems = 20;

    return (
        <div className="flex w-full flex-col gap-6 bg-neutral-50 p-6 md:gap-8 md:px-14 md:py-10">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-0">
                <NumbersOfItems totalData={filteredBooks} page={page} numberOfItems={numberOfItems} item="books" />

                <div className="flex w-full flex-col items-center justify-end gap-3 md:flex-row">
                    <Search search={search} />
                    <div className="flex w-full items-center justify-end gap-3 md:w-auto">
                        <Sorting sorting={sorting} name="bookSorting" />

                        {/* Filters Button */}
                        <Filters />

                        {/* Filters Button (Mobile Component) */}
                        <FilterButton />
                    </div>
                </div>
            </div>

            <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
                <Books page={page} />
            </div>

            {filteredBooks?.length > 20 && 
                <PaginationComp page={page} setPage={setPage} totalData={filteredBooks} numberOfItems={numberOfItems} />
            }
        </div>
    )
}

export default ManageBooks;
