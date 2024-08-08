import React from 'react';

const NumbersOfItems = ({ totalData, page, numberOfItems, item }) => {
    const startItem = (page - 1) * numberOfItems + 1;
    const endItem = Math.min(page * numberOfItems, totalData?.length);

    return (
        <div className="w-full">
            <p className="ml-1.5 text-left text-xs md:font-medium italic tracking-wide text-neutral-600/70 md:text-sm">
                Showing {startItem} - {endItem} of {totalData?.length} {item}
            </p>
        </div>
    )
}

export default NumbersOfItems;