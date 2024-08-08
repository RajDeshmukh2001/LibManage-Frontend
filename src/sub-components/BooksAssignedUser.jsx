import IssuedBooksTable from './IssuedBooksTable';
import { useFilterContext } from '../context/FilterContext';

const BooksAssignedUser = ({ id }) => {
    const { filteredIssuedBooks } = useFilterContext();
    const issuedBooksOfUser = filteredIssuedBooks.filter((issuedBook) => issuedBook.user.userId === id);

    return (
        <div className="flex w-full flex-col gap-6 bg-neutral-50 md:gap-8 ">
            <p className="ml-1.5 text-left text-xs md:font-medium italic tracking-wide text-neutral-600/70 md:text-sm">
                Found{" "}
                {issuedBooksOfUser?.length} 
                {issuedBooksOfUser?.length === 1 ? ' book' : ' books'}
            </p>

            <IssuedBooksTable page={1} data={issuedBooksOfUser} />
        </div>
    )
}

export default BooksAssignedUser;