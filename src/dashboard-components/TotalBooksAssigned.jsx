import DashboardCard from '../helpers/DashboardCard';
import { useFilterContext } from '../context/FilterContext';

const TotalBooksAssigned = () => {
    const { filteredIssuedBooks } = useFilterContext();

    return (
        <DashboardCard value={filteredIssuedBooks?.length} title="Total Books Assigned (Till date)" color="bg-green-400" />
    )
}

export default TotalBooksAssigned;