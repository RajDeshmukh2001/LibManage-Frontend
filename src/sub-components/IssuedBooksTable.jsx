import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Dropdown, Button, DropdownMenu, DropdownItem, DropdownTrigger } from "@nextui-org/react";
import useUpdateBookReturned from "../custom-hooks/useUpdateBookReturned";

const IssuedBooksTable = ({ page, data, books }) => {
    const navigate = useNavigate();
    const { handleBookReturned } = useUpdateBookReturned();
    return (
        <>
            <Table
                color="default"
                selectionMode="single"
                defaultSelectedKeys={["2"]}
                aria-label="Issued books table"
            >
                <TableHeader>
                    <TableColumn>BOOK</TableColumn>
                    <TableColumn>USER</TableColumn>
                    <TableColumn>RENT (₹)</TableColumn>
                    <TableColumn>ISSUED DATE</TableColumn>
                    <TableColumn>LAST DATE</TableColumn>
                    <TableColumn align="center">DAYS ISSUED</TableColumn>
                    <TableColumn align="center">DAYS REMAINING</TableColumn>
                    <TableColumn align="center">EXTRA RENT (₹)</TableColumn>
                    <TableColumn align="center">TOTAL RENT (₹)</TableColumn>
                    <TableColumn align="center">PAYMENT</TableColumn>
                    <TableColumn align="end">ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                    {data?.slice(page * 10 - 10, page * 10).map((issuedBook) => (
                        <TableRow key={issuedBook._id}>
                            <TableCell>{issuedBook.book.title}</TableCell>
                            <TableCell>{issuedBook.user.name}</TableCell>
                            <TableCell>{issuedBook.book.rent}</TableCell>
                            <TableCell>{format(new Date(issuedBook.issuedOnDate), 'dd MMM yy')}</TableCell>
                            <TableCell>{format(new Date(issuedBook.issuedTillDate), 'dd MMM yy')}</TableCell>
                            <TableCell>{issuedBook.daysIssued}</TableCell>
                            <TableCell>{issuedBook.daysRemaining}</TableCell>
                            <TableCell>{issuedBook.extraRent}</TableCell>
                            <TableCell>{issuedBook.totalRent}</TableCell>
                            <TableCell className={`${issuedBook.paymentStatus === 'paid' ? 'text-lime-700' : 'text-danger-500'} capitalize`}>{issuedBook.paymentStatus}</TableCell>
                            <TableCell>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button isIconOnly size="sm" variant="light">
                                            <PiDotsThreeVerticalBold />
                                        </Button>
                                    </DropdownTrigger>

                                    <DropdownMenu>
                                        <DropdownItem>
                                            <Link to={`/book/${issuedBook.book.bookId}`} className="flex w-full">View Book</Link>
                                        </DropdownItem>

                                        {books && <DropdownItem>
                                            <Link to={`/user/${issuedBook.user.userId}`} className="flex w-full">View User</Link>
                                        </DropdownItem>}

                                        {issuedBook.returned === false &&
                                            <DropdownItem>
                                                <button
                                                    onClick={() => handleBookReturned(issuedBook._id, navigate)}
                                                    className="flex w-full tracking-wide"
                                                >
                                                    Returned
                                                </button>
                                            </DropdownItem>
                                        }
                                    </DropdownMenu>
                                </Dropdown>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default IssuedBooksTable;