import useFetchData from "../custom-hooks/useFetchData";
import { createContext, useContext, useEffect } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const { data, isLoading, isError, fetchData, getSingleData, isFetchLoading, isFetchError, singleData } = useFetchData();

    useEffect(() => {
        fetchData("http://localhost:3000/api/books/");
    }, []);

    return (
        <BookContext.Provider value={{ data, isLoading, isError, getSingleData, isFetchLoading, isFetchError, singleData }}>
            {children}
        </BookContext.Provider>
    )
}

export const useBookContext = () => {
    return useContext(BookContext);
}
