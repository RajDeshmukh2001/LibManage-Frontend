import { createContext, useContext, useState } from "react";

export const RefetchDataContext = createContext()

export const RefetchDataProvider = ({ children }) => {
    const [refetch, setRefetch] = useState(false);

    const refetchData = () => setRefetch(prev => !prev);

    return (
        <RefetchDataContext.Provider value={{ refetch, refetchData }}>
            {children}
        </RefetchDataContext.Provider>
    )
}

export const useRefetchData = () => {
    return useContext(RefetchDataContext);
}