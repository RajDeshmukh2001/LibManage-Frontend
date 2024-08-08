import { useState } from "react";
import Search from "../helpers/Search";
import Sorting from "../helpers/Sorting";
import UsersTable from "../sub-components/UsersTable";
import NumbersOfItems from "../helpers/NumbersOfItems";
import sorting from "../../json-data/usersSorting.json";
import { useFilterContext } from "../context/FilterContext";
import PaginationComp from "../sub-components/PaginationComp";

const Users = () => {
    const [page, setPage] = useState(1);
    const { filters: { search }, filteredUsers } = useFilterContext();
    const numberOfItems = 10;

    return (
        <div className="flex w-full flex-col gap-6 bg-neutral-50 p-6 md:gap-8 md:px-14 md:py-10">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:gap-0">
                <NumbersOfItems totalData={filteredUsers} page={page} numberOfItems={numberOfItems} item="users" />

                <div className="flex w-full flex-col md:items-center justify-end gap-3 md:flex-row">
                    <Search search={search} />
                    <Sorting sorting={sorting} name="userSorting" />
                </div>
            </div>

            <UsersTable page={page} />

            {filteredUsers?.length > 10 && 
                <PaginationComp page={page} setPage={setPage} totalData={filteredUsers} numberOfItems={numberOfItems} />
            }
        </div>
    )
}

export default Users;
