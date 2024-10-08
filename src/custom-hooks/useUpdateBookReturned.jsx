import axios from 'axios';
import { toast } from 'sonner';
import { useRefetchData } from '../context/RefetchDataContext';

const useUpdateBookReturned = () => {
    const { refetchData } = useRefetchData();

    const handleBookReturned = async (id, navigate) => {
        try {
            const res = await axios.patch(`https://libmanage-backend.onrender.com/api/issuedBooks/bookReturned?id=${id}`);
            if (res.status === 200) {
                toast.success(res.data.message);
                refetchData();
                navigate('/issued_books');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return { handleBookReturned }
}

export default useUpdateBookReturned;