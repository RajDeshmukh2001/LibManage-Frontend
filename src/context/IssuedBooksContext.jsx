import useFetchData from "../custom-hooks/useFetchData";
import useHandleForm from "../custom-hooks/useHandleForm";
import { createContext, useContext, useEffect } from "react";

export const IssuedBooksContext = createContext();

export const IssuedBooksProvider = ({ children }) => {
    const { data, isLoading, isError, fetchData } = useFetchData();

    useEffect(() => {
        fetchData("http://localhost:3000/api/issuedBooks/");
    }, [])

    return (
        <IssuedBooksContext.Provider value={{ data, isLoading, isError, fetchData }}>
            {children}
        </IssuedBooksContext.Provider>
    )
}

export const useIssuedBooksContext = () => {
    return useContext(IssuedBooksContext)
}