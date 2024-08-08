import { useUserContext } from "./UserContext";
import { useBookContext } from "./BookContext";
import useFilterData from "../custom-hooks/useFilterData";
import { createContext, useContext, useEffect } from "react";
import { useIssuedBooksContext } from "./IssuedBooksContext";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const { data: usersData } = useUserContext();
    const { data: booksData } = useBookContext();
    const { data: issuedBooksData } = useIssuedBooksContext();

    const { filteredUsers, filteredBooks, filteredIssuedBooks, filters, dispatch, updateFilterValue, clearFilters } = useFilterData();

    useEffect(() => {
        dispatch({ type: "FILTER_USERS" });
    }, [usersData, filters]);

    useEffect(() => {
        dispatch({ type: "FILTER_BOOKS" });
    }, [booksData, filters]);

    useEffect(() => {
        dispatch({ type: "FILTER_ISSUED_BOOKS" });
    }, [issuedBooksData, filters]);

    useEffect(() => {
        if (usersData) {
            dispatch({ type: "LOAD_USERS", payload: usersData });
        }
    }, [usersData]);

    useEffect(() => {
        if (booksData) {
            dispatch({ type: "LOAD_BOOKS", payload: booksData });
        }
    }, [booksData]);

    useEffect(() => {
        if (booksData) {
            dispatch({ type: "LOAD_ISSUED_BOOKS", payload: issuedBooksData });
        }
    }, [issuedBooksData]);

    return (
        <FilterContext.Provider
            value={{
                filteredUsers,
                filteredBooks,
                filteredIssuedBooks,
                filters,
                updateFilterValue,
                clearFilters,
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}
