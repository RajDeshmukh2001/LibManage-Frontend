import React, { useEffect, useState } from 'react'
import DashboardCard from '../helpers/DashboardCard';
import { useFilterContext } from '../context/FilterContext';

const ReturnedToday = () => {
    const [returnedToday, setReturnedToday] = useState(0);

    const { filteredIssuedBooks } = useFilterContext();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];

        const booksReturnedToday = filteredIssuedBooks.filter(book => {
            const bookDate = new Date(book.updatedAt).toISOString().split('T')[0];
            return bookDate === today && book.paymentStatus === 'paid';
        });

        setReturnedToday(booksReturnedToday.length);
    }, [filteredIssuedBooks]);

    return (
        <DashboardCard value={returnedToday} title="Returned Today" color="bg-orange-400" />
    )
}

export default ReturnedToday;

