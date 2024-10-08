import React, { useEffect, useState } from 'react'
import BestSellers from '../dashboard-components/BestSellers';
import TotalRevenue from '../dashboard-components/TotalRevenue';
import BooksOverdue from '../dashboard-components/BooksOverdue';
import AssignedToday from '../dashboard-components/AssignedToday';
import ReturnedToday from '../dashboard-components/ReturnedToday';
import HighestRatedBooks from '../dashboard-components/HighestRatedBooks';
import TotalBooksAssigned from '../dashboard-components/TotalBooksAssigned';
import BooksAssignedCurrent from '../dashboard-components/BooksAssignedCurrent';

const Home = () => {

    return (
        <div className="flex w-full flex-col gap-6 bg-neutral-50 p-6 md:gap-8 md:px-14 md:py-10 mb-16 md:mb-0">
            <div className="w-full grid gap-y-6 md:grid-cols-3 md:gap-x-12 md:gap-y-8">
                <TotalRevenue />
                <BooksAssignedCurrent />
                <BooksOverdue />
                <AssignedToday />
                <ReturnedToday />
                <TotalBooksAssigned />
            </div>

            <div className="w-full flex justify-between flex-col gap-8 md:gap-10 md:flex-row">
                <BestSellers />
                <HighestRatedBooks />
            </div>
        </div>
    )
}

export default Home;