import axios from 'axios';
import { useEffect } from 'react';

const useHandleIssuedBooks = () => {
    const handleIssuedBooks = async () => {
        try {
            await axios.patch(`http://localhost:3000/api/issuedBooks/updateBooks`);
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     handleIssuedBooks();
    // }, [])

    return { handleIssuedBooks }
}

export default useHandleIssuedBooks;