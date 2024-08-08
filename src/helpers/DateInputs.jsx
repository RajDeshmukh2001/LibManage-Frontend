import { addDays, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { DatePicker } from '@nextui-org/react';
import { getLocalTimeZone, today } from '@internationalized/date';

const DateInputs = ({ getDates }) => {
    const [dateTill, setDateTill] = useState();
    const [dateFrom, setDateFrom] = useState();

    let issuedOnDate = `${dateFrom?.year}-${dateFrom?.month}-${dateFrom?.day}`;
    let issuedTillDate = `${dateTill?.year}-${dateTill?.month}-${dateTill?.day}`;

    useEffect(() => {
        getDates(issuedOnDate, issuedTillDate);
    }, [dateFrom, dateTill]);

    return (
        <>
            <DatePicker
                radius="sm"
                isRequired
                value={dateFrom}
                label="Date (Issue From)"
                onChange={setDateFrom}
                labelPlacement="outside"
                errorMessage={`Date must be ${format(new Date(), 'MM/dd/yyyy')} or later`}
                minValue={today(getLocalTimeZone())}
            />

            <DatePicker
                radius="sm"
                isRequired
                value={dateTill}
                label="Date (To)"
                onChange={setDateTill}
                labelPlacement="outside"
                errorMessage={`Date must be ${format(addDays(new Date(), 10), 'MM/dd/yyyy')} or later`}
                minValue={today(getLocalTimeZone()).add({ days: 10 })}
            />
        </>
    )
}

export default DateInputs;