import axios from "axios";
import { toast } from 'sonner';

const useHandleForm = () => {

    const handleSubmit = async (event, formData, navigate) => {
        event.preventDefault();

        try {
            const res = await axios.post(`http://localhost:3000/api/issuedBooks/issueBook`, formData);
            if (res.status === 200) {
                toast.success(res.data.message);
                navigate('/issued_books');
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return { handleSubmit }
}

export default useHandleForm;
