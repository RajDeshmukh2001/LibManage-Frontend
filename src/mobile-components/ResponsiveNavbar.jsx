import { Link } from "react-router-dom";
import routes from "../../json-data/routes.json";
import { PiAddressBook, PiBooks, PiUsersThree, PiHouse } from "react-icons/pi";

const iconsObj = {
    home: PiHouse,
    manage: PiBooks,
    issue: PiAddressBook,
    users: PiUsersThree,
};

const ResponsiveNavbar = ({ path }) => {
    return (
        <div className="fixed bottom-0 left-0 z-30 flex h-14 w-full items-center justify-between gap-2 border border-neutral-300 bg-white px-6 md:hidden">
            {routes.map((route, index) => {
                const IconTag = iconsObj[route.icon];
                return (
                    <Link
                        key={index}
                        to={route.route}
                        className="flex flex-col items-center justify-center"
                    >
                        <IconTag className={`text-xl ${route.route === path ? "text-lime-600" : "text-neutral-700"}`} />
                        <span className={`text-center text-[13px] leading-3 tracking-wide ${route.route === path ? "text-lime-600" : "text-neutral-700"}`}>
                            {route.title}
                        </span>
                    </Link>
                );
            })}
        </div>
    )
}

export default ResponsiveNavbar;
