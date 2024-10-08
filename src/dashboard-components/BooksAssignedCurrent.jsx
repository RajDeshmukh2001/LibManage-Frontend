import { useEffect, useState } from 'react';
import DashboardCard from '../helpers/DashboardCard';
import { useFilterContext } from '../context/FilterContext';

const BooksAssignedCurrent = () => {
    const { filteredIssuedBooks } = useFilterContext();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const booksAssignedCurrent = filteredIssuedBooks?.filter((book) => book.paymentStatus === 'pending')
        setCurrent(booksAssignedCurrent?.length);
    }, [filteredIssuedBooks])

    return (
        <DashboardCard value={current} title="Books Assigned (Current)" color="bg-purple-400" />
    )
}

export default BooksAssignedCurrent;