import axios from 'axios';
import { useEffect } from 'react';

const useHandleIssuedBooks = () => {
    const handleIssuedBooks = async () => {
        try {
            await axios.patch(`https://libmanage-backend.onrender.com/api/issuedBooks/updateBooks`);
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