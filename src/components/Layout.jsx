import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout;