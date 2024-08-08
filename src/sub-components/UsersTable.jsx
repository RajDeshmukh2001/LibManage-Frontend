import { Link } from "react-router-dom";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useFilterContext } from "../context/FilterContext";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, } from "@nextui-org/react";

const UsersTable = ({ page }) => {
    const { filteredUsers } = useFilterContext();

    return (
        <>
            <Table
                color="default"
                selectionMode="single"
                defaultSelectedKeys={["1"]}
                aria-label="Users Table"
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>USERNAME</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                    <TableColumn>PHONE</TableColumn>
                    <TableColumn align="center">BOOKS ISSUED</TableColumn>
                    <TableColumn align="end">ACTIONS</TableColumn>
                </TableHeader>

                <TableBody>
                    {filteredUsers?.slice(page * 10 - 10, page * 10).map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id.slice(0, 4)}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.books_assigned}</TableCell>

                            <TableCell>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button isIconOnly size="sm" variant="light">
                                            <PiDotsThreeVerticalBold />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <Link to={`/user/${user._id}`} className="flex w-full">
                                                View
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>Delete</DropdownItem>
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

export default UsersTable;
