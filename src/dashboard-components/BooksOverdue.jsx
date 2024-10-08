import React, { useEffect, useState } from 'react'
import DashboardCard from '../helpers/DashboardCard';
import { useFilterContext } from '../context/FilterContext';

const BooksOverdue = () => {
    const [booksOverdue, setBooksOverdue] = useState(0);
    const { filteredIssuedBooks } = useFilterContext();

    useEffect(() => {
        const booksOverdue = filteredIssuedBooks?.filter((book) => {
            return book.paymentStatus === 'pending' && book.extraRent > 0 && book.totalRent > book.book?.rent 
        })

        setBooksOverdue(booksOverdue?.length)
    }, [filteredIssuedBooks]);

    return (
        <DashboardCard value={booksOverdue} title="Books Overdue" color="bg-yellow-300" />
    )
}

export default BooksOverdue;

