import { Avatar } from "@nextui-org/react";
import AdminMenu from "../mobile-components/AdminMenu";

const Navbar = () => {
    return (
        <div className="relative z-30 h-14 w-full md:h-[70px]">
            <div className="fixed left-0 top-0 flex w-full items-center justify-between bg-white px-6 py-3 shadow-sm md:px-10 md:py-5">
                <div>
                    <h2 className="text-xl font-bold tracking-wider md:text-2xl">
                        <span className="text-lime-600">Lib</span>Manage
                    </h2>
                </div>

                <div className="mr-8 hidden items-center gap-10 md:flex">
                    <div className="flex items-center justify-center gap-2">
                        <Avatar
                            isBordered
                            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                            size="sm"
                        />
                        <h3 className="text-lg font-medium tracking-wide text-lime-600">
                            Admin
                        </h3>
                    </div>

                    <div className="flex items-center gap-1">
                        <button className="text-lg font-medium tracking-wide">
                            Logout
                        </button>
                    </div>
                </div>

                <AdminMenu />
            </div>
        </div>
    )
}

export default Navbar;
