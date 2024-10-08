import { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const BestSellers = () => {
    const [bestSellerBooks, setBestSellerBooks] = useState();
    const { filteredBooks } = useFilterContext();

    useEffect(() => {
        if (filteredBooks) {
            const sortedBooks = [...filteredBooks].sort((a, b) => b.noOfTimesRented - a.noOfTimesRented).slice(0, 3);
            setBestSellerBooks(sortedBooks);
        }
    }, [filteredBooks]);

    return (
        <div className="w-full flex flex-col gap-3 bg-white shadow p-4 rounded-lg">
            <h2 className="text-[15px] font-medium tracking-wide md:text-base">Best Sellers</h2>

            <Table removeWrapper aria-label="Best sellers" className="overflow-x-scroll">
                <TableHeader>
                    <TableColumn>BOOK NAME</TableColumn>
                    <TableColumn>RENT</TableColumn>
                    <TableColumn align="center">NO OF TIMES RENTED</TableColumn>
                </TableHeader>
                <TableBody>
                    {bestSellerBooks?.map((book) => (
                        <TableRow key={book._id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.rent}</TableCell>
                            <TableCell>{book.noOfTimesRented}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
};

export default BestSellers;
