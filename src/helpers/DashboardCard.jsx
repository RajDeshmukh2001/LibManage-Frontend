import { Card, CardBody } from '@nextui-org/react';
import React from 'react'

const DashboardCard = ({ value, title, color }) => {
    return (
        <Card isPressable radius="sm" shadow="sm" className={`${color}`}>
            <CardBody>
                <h1 className="text-white font-bold text-base md:text-lg ">{value}</h1>
                <p className="text-white tracking-wide mt-2 text-sm md:text-[15px]">{title}</p>
            </CardBody>
        </Card>
    )
}

export default DashboardCard;