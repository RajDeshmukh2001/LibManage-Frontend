import { format } from "date-fns";
import { Link } from "react-router-dom";
import BookSkeleton from "./BookSkeleton";
import { Button, Card, Image } from "@nextui-org/react";
import { useBookContext } from "../context/BookContext";
import { useFilterContext } from "../context/FilterContext";
import { PiStarBold, PiStarFill, PiStarHalfFill } from "react-icons/pi";

const Books = ({ page }) => {
    const { isLoading } = useBookContext();
    const { filteredBooks } = useFilterContext();

    return (
        <>
            {isLoading ? (
                <BookSkeleton />
            ) : (
                filteredBooks?.slice(page * 20 - 20, page * 20).map((book) => (
                    <Card key={book._id} shadow="sm" radius="sm" className="grid grid-cols-3 gap-3 bg-white p-3 md:gap-1.5 md:p-4">
                        <div className="md:row-span-2 rounded-md">
                            <Image src={book.thumbnailUrl} alt={book.isbn} loading="lazy" shadow="sm" isZoomed radius="md" className="w-28 md:w-40 md:h-52" />
                        </div>

                        <div className="col-span-2 flex w-full flex-col gap-1.5 md:gap-2">
                            <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
                                <h3 className="text-sm font-medium leading-4 text-lime-600 md:text-lg">
                                    {book.title}
                                </h3>
                                <span className="hidden w-max rounded bg-lime-100 px-3 py-1 text-xs text-lime-700 md:block md:text-sm">
                                    &#8377;{book.rent}
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-1">
                                <span className="text-xs tracking-wide text-neutral-500 md:text-sm">
                                    Authors:{" "}
                                </span>
                                {book.authors?.map((author, index) => (
                                    <h5 className="text-xs tracking-wide text-neutral-900 md:text-sm" key={index}>
                                        {author} {index < book.authors?.length - 1 ? ", " : ""}
                                    </h5>
                                ))}
                            </div>

                            <div className="mt-1 flex items-center gap-1 md:mt-0">
                                {[...Array(5)].map((_, index) => {
                                    return (
                                        <span key={index}>
                                            {
                                                book.reviews >= index + 1 ? 
                                                <PiStarFill className="text-xs text-orange-400 md:text-base" />
                                                :
                                                book.reviews >= index + 0.5 ? 
                                                <PiStarHalfFill className="text-xs text-orange-400 md:text-base" />
                                                :
                                                <PiStarBold className="text-xs text-orange-400 md:text-base" />

                                            }
                                        </span>
                                    )
                                })}
                            </div>

                            <span className="w-max mt-4 rounded bg-lime-100 px-3 py-1 text-xs text-lime-700 md:hidden md:text-sm">
                                &#8377;{book.rent}
                            </span>
                        </div>

                        <div className="col-span-3 flex w-full flex-col gap-2 md:col-span-2 md:gap-2">
                            <div className="grid grid-cols-3">
                                <h5 className="col-span-2 text-xs tracking-wide text-neutral-500 md:text-sm">
                                    Published On:
                                    <span className="ml-1 text-neutral-900">
                                        {book.publishedDate ? format(new Date(book.publishedDate), "dd MMM yyyy") : "N/A"}
                                    </span>
                                </h5>
                                <h5 className="text-xs tracking-wide text-neutral-500 md:text-sm">
                                    Pages:
                                    <span className="ml-1 text-neutral-900">
                                        {book.pageCount}
                                    </span>
                                </h5>
                            </div>

                            <div className="grid grid-cols-3">
                                <h4 className="col-span-2 text-xs tracking-wide text-neutral-500 md:text-sm">
                                    Current Stock:
                                    <span className="ml-1 text-neutral-900">
                                        {book.currentStock}
                                    </span>
                                </h4>
                                <h4 className="text-xs tracking-wide text-neutral-500 md:text-sm">
                                    Max Stock:
                                    <span className="ml-1 text-neutral-900">
                                        {book.maximumStock}
                                    </span>
                                </h4>
                            </div>

                            <div className="mt-2 flex w-full items-center justify-between gap-3">
                                <div className="flex w-full items-end justify-end gap-3">
                                    <Button
                                        size="sm"
                                        isDisabled={book.currentStock === 0 ? true : false}
                                        className="rounded border-1.5 border-lime-700 bg-gradient-to-br from-lime-100 from-20% to-lime-500 text-lime-800"
                                    >
                                        <Link
                                            to={`/issue_book?id=${book._id}&title=${book.title}&rent=${book.rent}`}
                                            className="text-sm md:text-[15px]"
                                        >
                                            {book.currentStock === 0 ? "Out of Stock" : "Issue Book"}
                                        </Link>
                                    </Button>

                                    <Button size="sm" className="rounded border-1.5 border-lime-700 bg-white text-lime-700">
                                        <Link to={`/book/${book._id}`} className="text-sm md:text-[15px]">View</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))
            )}
        </>
    )
}

export default Books;
