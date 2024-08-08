import { Input } from "@nextui-org/react";
import useGetUserInputs from "../custom-hooks/useGetUserInputs";

const UserInput = ({ getUserInputs }) => {
    const { inputs, selectName, handleInputs } = useGetUserInputs({ getUserInputs });

    return (
        <>
            <Input
                type="text"
                radius="sm"
                isRequired
                name="user"
                label="User"
                value={inputs.user}
                list="user_input"
                autoComplete="off"
                onChange={handleInputs}
                labelPlacement="outside"
                placeholder="Select User"
            />

            {inputs?.user?.length >= 2 && (
                <datalist id="user_input">
                    {selectName.map((name, index) => (
                        <option key={index} value={name} />
                    ))}
                </datalist>
            )}

            <Input
                min={0}
                radius="sm"
                isRequired
                type="number"
                name="extraRent"
                placeholder="0.00"
                labelPlacement="outside"
                label="Extra Rent (Per day)"
                value={inputs.extraRent}
                onChange={handleInputs}
                startContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-small text-default-400">₹</span>
                    </div>
                }
            />
        </>
    )
}

export default UserInput;
