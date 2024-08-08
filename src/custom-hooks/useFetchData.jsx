import axios from 'axios';
import { useReducer } from 'react';
import reducer from '../reducer/DataReducer';

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    isFetchLoading: false,
    isFetchError: false,
    singleData: [],
}

const useFetchData = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async (URL) => {
        dispatch({ type: "LOADING" })
        try {
            const res = await axios.get(URL);
            const data = res.data
            dispatch({ type: "FETCH_DATA", payload: data });
        } catch (error) {
            dispatch({ type: "IS_ERROR" });
        }
    }
    
    const getSingleData = async (URL) => {
        dispatch({ type: "IS_LOADING" });
        try {
            const res = await axios.get(URL);
            const getData = res.data;
            dispatch({ type: "FETCH_SINGLE_DATA", payload: getData });
        } catch (error) {
            dispatch({ type: "IS_FETCH_ERROR" });
        }
    }

    return { ...state, fetchData, getSingleData };
}

export default useFetchData;