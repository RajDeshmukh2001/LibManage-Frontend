import { Link } from "react-router-dom";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";

const AdminMenu = () => {
    return (
        <Dropdown className="md:hidden" shouldBlockScroll="false">
            <DropdownTrigger>
                <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm" className="md:hidden" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Admin Actions">
                <DropdownItem key="admin">Admin</DropdownItem>
                <DropdownItem key="add_admin"><Link to="#">Add Admin</Link></DropdownItem>
                <DropdownItem key="logout" color="danger" className="text-danger">Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default AdminMenu;