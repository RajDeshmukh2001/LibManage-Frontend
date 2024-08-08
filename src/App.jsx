import "./App.css";
import { Toaster } from 'sonner';
import Home from "./components/Home";
import Users from "./components/Users";
import Error from "./components/Error";
import Layout from "./components/Layout";
import SingleBook from "./components/SingleBook";
import SingleUser from "./components/SingleUser";
import AssignBook from "./components/AssignBook";
import IssuedBooks from "./components/IssuedBooks";
import ManageBooks from "./components/ManageBooks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/books",
                element: <ManageBooks />,
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
            },
            {
                path: "/issued_books",
                element: <IssuedBooks />,
            },
            {
                path: "/issue_book",
                element: <AssignBook />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/user/:id",
                element: <SingleUser />,
            },
        ],
    },
    {
        path: "*",
        element: <Error />,
    },
]);

const App = () => {
    return (
        <div className="max-h-screen w-full">
            <Toaster position="top-right" expand={false} richColors closeButton />
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
