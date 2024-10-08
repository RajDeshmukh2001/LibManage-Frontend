import { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import { PiStarBold, PiStarFill, PiStarHalfFill } from "react-icons/pi";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const HighestRatedBooks = () => {
    const [highestRatedBooks, setHighestRatedBooks] = useState();
    const { filteredBooks } = useFilterContext();

    useEffect(() => {
        if (filteredBooks) {
            const sortedBooks = [...filteredBooks].sort((a, b) => b.reviews - a.reviews).slice(0, 3);
            setHighestRatedBooks(sortedBooks);
        }
    }, [filteredBooks]);

    return (
        <div className="w-full flex flex-col gap-3 bg-white shadow p-4 rounded-lg">
            <h2 className="text-[15px] font-medium tracking-wide md:text-base">Highest Rated</h2>

            <Table removeWrapper aria-label="Highest Rated Books" className="overflow-x-scroll">
                <TableHeader>
                    <TableColumn>BOOK NAME</TableColumn>
                    <TableColumn>RENT</TableColumn>
                    <TableColumn>RATINGS</TableColumn>
                </TableHeader>
                <TableBody>
                    {highestRatedBooks?.map((book) => (
                        <TableRow key={book._id}>
                            <TableCell className="md:truncate md:max-w-[200px] md:whitespace-nowrap">{book.title}</TableCell>
                            <TableCell>{book.category}</TableCell>
                            <TableCell className="flex items-center gap-1">
                                {[...Array(5)].map((_, index) => {
                                    return (
                                        <span key={index}>
                                            {
                                                book.reviews >= index + 1 ?
                                                    <PiStarFill className="text-xs text-orange-400 md:text-base" />
                                                    :
                                                    book.reviews >= index + 0.5 ?
                                                        <PiStarHalfFill className="text-xs text-orange-400 md:text-base" />
                                                        :
                                                        <PiStarBold className="text-xs text-orange-400 md:text-base" />

                                            }
                                        </span>
                                    )
                                })}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default HighestRatedBooks;