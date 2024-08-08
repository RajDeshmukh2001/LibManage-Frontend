import {Pagination} from "@nextui-org/react";

const PaginationComp = ({ page, setPage, totalData, numberOfItems }) => {
    const handleSelectPage = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page){
            setPage(selectedPage);
        }
    };

    const totalPages = Math.ceil(totalData?.length / numberOfItems);

    return (
        <div className="flex items-center justify-center flex-wrap gap-3 mt-4 mb-16 md:mb-0">
            <Pagination 
                page={page} 
                size="md"
                showShadow
                showControls
                radius="full"
                total={totalPages} 
                onChange={handleSelectPage}
                classNames={{
                    item: "bg-white",
                    prev: "bg-white",
                    next: "bg-white",
                    cursor: "bg-lime-600 shadow-lime-300"
                }}
            />
        </div>
    )
}

export default PaginationComp;
