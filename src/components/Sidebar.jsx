import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../../json-data/routes.json";
import ResponsiveNavbar from "../mobile-components/ResponsiveNavbar";

const Sidebar = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div className="sidebar hidden w-1/5 md:block">
                <div className="fixed left-0 top-[70px] h-full w-[16.5%] shadow-md">
                    <div className="flex flex-col">
                        {routes.map((route, index) => (
                            <Link
                                to={`${route.route}`}
                                key={index}
                                className={`border-b-[1px] border-gray-100 px-10 py-6 transition delay-200 ease-in-out ${route.route === path ? "bg-lime-600 text-white hover:bg-lime-600" : "bg-white hover:bg-lime-100"}`}
                            >
                                {route.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <ResponsiveNavbar path={path} />
        </>
    )
}

export default Sidebar;
