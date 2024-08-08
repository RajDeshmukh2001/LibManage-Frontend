const DataReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            };

        case 'FETCH_DATA':
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };

        case "IS_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        case 'IS_LOADING':
            return {
                ...state,
                isFetchLoading: true
            };

        case 'FETCH_SINGLE_DATA':
            return {
                ...state,
                isFetchLoading: false,
                singleData: action.payload
            };

        case 'IS_FETCH_ERROR':
            return {
                ...state,
                isFetchLoading: false,
                isFetchError: true
            };

        default:
            return state;
    }
}

export default DataReducer;