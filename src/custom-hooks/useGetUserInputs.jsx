import { useEffect, useState } from 'react';
import { useFilterContext } from '../context/FilterContext';

const useGetUserInputs = ({ getUserInputs }) => {
    const [inputs, setInputs] = useState({
        user: '',
        extraRent: ''
    });

    const { filteredUsers } = useFilterContext();

    const selectName = filteredUsers
        .filter((user) => user.name.toLowerCase().includes(inputs?.user.toLowerCase()))
        .map((user) => user.name);

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInputs({ ...inputs, [name]: value });
    }

    useEffect(() => {
        const selectUser = filteredUsers.find(user => user.name.toLowerCase() === inputs?.user.toLowerCase());
        const userId = selectUser ? selectUser._id : null;
        getUserInputs(userId, inputs.user, inputs.extraRent);
    }, [inputs]);

    return { inputs, selectName, handleInputs }
}

export default useGetUserInputs;