import { useEffect, useState } from 'react';
import DashboardCard from '../helpers/DashboardCard';
import { useFilterContext } from '../context/FilterContext';

const AssignedToday = () => {
    const [assignedToday, setAssignedToday] = useState(0);

    const { filteredIssuedBooks } = useFilterContext();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];

        const booksAssignedToday = filteredIssuedBooks.filter(book => {
            const bookDate = new Date(book.createdAt).toISOString().split('T')[0];
            return bookDate === today;
        });

        setAssignedToday(booksAssignedToday.length);
    }, [filteredIssuedBooks]);

    return (
        <DashboardCard value={assignedToday} title="Assigned Today" color="bg-blue-400" />
    )
}

export default AssignedToday;