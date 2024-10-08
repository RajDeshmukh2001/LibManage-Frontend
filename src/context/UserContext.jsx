import { useRefetchData } from "./RefetchDataContext";
import useFetchData from "../custom-hooks/useFetchData";
import { createContext, useContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { data, isLoading, isError, fetchData, getSingleData, isFetchLoading, isFetchError, singleData } = useFetchData();
    const { refetch } = useRefetchData();

    useEffect(() => {
        fetchData("http://localhost:3000/api/users/");
    }, [refetch])

    return (
        <UserContext.Provider value={{ data, isLoading, isError, getSingleData, isFetchLoading, isFetchError, singleData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}