import { Card, Skeleton } from "@nextui-org/react";

const BookSkeleton = () => {
    return (
        [...Array(4)].map((_, index) => (
            <Card key={index} shadow="sm" radius="sm" className="flex flex-row justify-between gap-4 p-3 md:p-4">
                <div>
                    <Skeleton className="h-48 w-28 rounded-lg md:w-40"></Skeleton>
                </div>

                <div className="flex w-full flex-col justify-between">
                    <div className="flex flex-col gap-3">
                        <Skeleton className="h-3 w-3/5 rounded-lg"></Skeleton>
                        <Skeleton className="h-3 w-full rounded-lg"></Skeleton>
                        <Skeleton className="h-3 w-2/5 rounded-lg"></Skeleton>
                    </div>

                    <div className="flex w-full flex-col gap-3">
                        <Skeleton className="h-3 w-3/5 rounded-lg" />
                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                    </div>

                    <div className="mt-2 flex w-full items-end justify-end gap-3">
                        <Skeleton className="h-9 w-24 rounded-md"></Skeleton>
                        <Skeleton className="h-9 w-16 rounded-md"></Skeleton>
                    </div>
                </div>
            </Card>
        ))
    )
}

export default BookSkeleton;
