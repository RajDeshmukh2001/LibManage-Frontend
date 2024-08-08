import { useReducer } from "react";
import reducer from "../reducer/FilterReducer";

const initialState = {
    filteredBooks: [],
    allBooks: [],
    filteredUsers: [],
    allUsers: [],
    filteredIssuedBooks: [],
    allIssuedBooks: [],
    filters: {
        search: "",
        bookSorting: "recent",
        userSorting: "recent",
        rent: 150,
        currentStock: 10,
        maxStock: 10,
        category: [],
    },
};

const useFilterData = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    };

    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };

    return { ...state, dispatch, updateFilterValue, clearFilters };
}

export default useFilterData;
