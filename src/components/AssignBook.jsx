import { useState } from "react";
import UserInput from "../helpers/UserInput";
import DateInputs from "../helpers/DateInputs";
import useHandleForm from "../custom-hooks/useHandleForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";

const AssignBook = () => {
    const { handleSubmit } = useHandleForm();
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const bookId = queryParams.get("id");
    const title = queryParams.get("title");
    const rent = queryParams.get("rent");

    const [formData, setFormData] = useState({
        bookId,
        title,
        rent,
        userId: "",
        name: "",
        extraRent: "",
        issuedOnDate: "",
        issuedTillDate: "",
    })

    const getDates = (issuedOnDate, issuedTillDate) => {
        setFormData({ ...formData, issuedOnDate, issuedTillDate });
    }

    const getUserInputs = (userId, name, extraRent) => {
        setFormData({ ...formData, userId, name, extraRent });
    }

    return (
        <div className="flex w-full flex-col gap-6 bg-neutral-50 p-6 md:gap-8 md:px-14 md:py-10">
            <Card>
                <CardHeader className="justify-center px-10 py-7">
                    <h2 className="text-xl font-bold uppercase tracking-wide text-lime-600">Issue Book</h2>
                </CardHeader>

                <CardBody className="p-10 pt-0">
                    <form action="" className="grid grid-cols-2 gap-x-10 gap-y-6" onSubmit={(e) => handleSubmit(e, formData, navigate)}>
                        <Input
                            value={title}
                            type="text"
                            radius="sm"
                            label="Book"
                            isRequired
                            labelPlacement="outside"
                            placeholder="Book Title"
                        />

                        <Input
                            type="number"
                            value={rent}
                            radius="sm"
                            label="Rent"
                            isRequired
                            placeholder="Book Rent"
                            labelPlacement="outside"
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-small text-default-400">₹</span>
                                </div>
                            }
                        />

                        <UserInput getUserInputs={getUserInputs} />

                        <DateInputs getDates={getDates} />

                        <button className="col-span-2 text-[15px] py-2.5 rounded-md tracking-wide bg-lime-600 text-white mt-4 transition duration-300 ease-in-out hover:bg-lime-600/80">SUBMIT</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AssignBook;
