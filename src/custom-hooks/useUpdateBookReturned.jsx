import axios from 'axios';
import { toast } from 'sonner';

const useUpdateBookReturned = () => {

    const handleBookReturned = async (id, navigate) => {
        try {
            const res = await axios.patch(`http://localhost:3000/api/issuedBooks/bookReturned?id=${id}`);
            if (res.status === 200) {
                toast.success(res.data.message);
                navigate('/issued_books');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return { handleBookReturned }
}

export default useUpdateBookReturned;