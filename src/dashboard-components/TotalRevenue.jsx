import { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import DashboardCard from "../helpers/DashboardCard";

const TotalRevenue = () => {
    const { filteredIssuedBooks } = useFilterContext();
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        const returnedBooks = filteredIssuedBooks.filter((book) => book.paymentStatus === 'paid');
        const revenue = returnedBooks.reduce((acc, book) => {
            return acc + (book.totalRent || 0);
        }, 0);

        setTotalRevenue(revenue);
    }, [filteredIssuedBooks]);

    return (
        <DashboardCard value={`₹ ${totalRevenue}`} title="Total Revenue" color="bg-red-400" />
    )
}

export default TotalRevenue;