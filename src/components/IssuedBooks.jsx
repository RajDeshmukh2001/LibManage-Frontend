import { useState } from "react";
import Search from "../helpers/Search";
import NumbersOfItems from "../helpers/NumbersOfItems";
import { useFilterContext } from "../context/FilterContext";
import PaginationComp from "../sub-components/PaginationComp";
import IssuedBooksTable from "../sub-components/IssuedBooksTable";

const IssuedBooks = () => {
    const [page, setPage] = useState(1);
    const { filters: { search }, filteredIssuedBooks } = useFilterContext();
    const numberOfItems = 10;

    return (
        <div className="flex w-full flex-col gap-6 bg-neutral-50 p-6 md:gap-8 md:px-14 md:py-10">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-0">
                <NumbersOfItems totalData={filteredIssuedBooks} page={page} numberOfItems={numberOfItems} item="books" />

                <div className="flex w-full flex-col md:items-center justify-end gap-3 md:flex-row">
                    <Search search={search} />
                </div>
            </div>

            <IssuedBooksTable page={page} data={filteredIssuedBooks} books={true} />

            {filteredIssuedBooks?.length > 10 &&
                <PaginationComp page={page} setPage={setPage} totalData={filteredIssuedBooks} numberOfItems={numberOfItems} />
            }
        </div>
    )
}

export default IssuedBooks;