import { useRefetchData } from "./RefetchDataContext";
import useFetchData from "../custom-hooks/useFetchData";
import { createContext, useContext, useEffect } from "react";

export const IssuedBooksContext = createContext();

export const IssuedBooksProvider = ({ children }) => {
    const { data, isLoading, isError, fetchData } = useFetchData();
    const { refetch } = useRefetchData();

    useEffect(() => {
        fetchData("https://libmanage-backend.onrender.com/api/issuedBooks/");
    }, [refetch])

    return (
        <IssuedBooksContext.Provider value={{ data, isLoading, isError, fetchData }}>
            {children}
        </IssuedBooksContext.Provider>
    )
}

export const useIssuedBooksContext = () => {
    return useContext(IssuedBooksContext)
}