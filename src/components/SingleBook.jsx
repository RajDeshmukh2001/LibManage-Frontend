import DOMPurify from 'dompurify';
import { useEffect } from "react";
import { format } from "date-fns";
import { Button, Image } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import { PiStarBold, PiStarFill, PiStarHalfFill } from "react-icons/pi";

const SingleBook = () => {
    const { getSingleData, isFetchLoading, isFetchError, singleData } = useBookContext();
    const { id } = useParams();

    useEffect(() => {
        getSingleData(`https://libmanage-backend.onrender.com/api/books/${id}`);
    }, [])

    return (
        <div className="flex w-full flex-col gap-6 p-6 md:px-14 md:py-10 mb-14 md:mb-0">
            <div className="grid grid-cols-4 gap-3 md:gap-x-0">
                <div className="md:row-span-3">
                    <Image
                        src={singleData?.thumbnailUrl}
                        alt={singleData?.isbn}
                        isZoomed
                        radius="lg"
                        shadow="sm"
                        loading="lazy"
                        className="w-32 md:w-52"
                    />
                </div>

                <div className="col-span-3 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between flex-wrap gap-y-1">
                        <h1 className="text-[15px] md:text-2xl text-lime-800">{singleData?.title}</h1>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => {
                                return (
                                    <span key={index}>
                                        {
                                            singleData?.reviews >= index + 1 ?
                                                <PiStarFill className="text-xs text-orange-400 md:text-base" />
                                                :
                                                singleData?.reviews >= index + 0.5 ?
                                                    <PiStarHalfFill className="text-xs text-orange-400 md:text-base" />
                                                    :
                                                    <PiStarBold className="text-xs text-orange-400 md:text-base" />

                                        }
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1">
                        <span className="text-[13px] tracking-wide text-neutral-500 md:text-base">
                            Authors:{" "}
                        </span>
                        {singleData?.authors?.map((author, index) => (
                            <h5 key={index} className="text-[13px] tracking-wide text-neutral-900 md:text-base">
                                {author}{index < singleData.authors.length - 1 ? ', ' : ''}
                            </h5>
                        ))}
                    </div>
                </div>

                <div className="col-span-4 md:col-span-3 flex flex-col gap-4">
                    <div className="flex items-center justify-between flex-wrap gap-y-1.5 gap-x-3">
                        <h5 className="text-[13px] tracking-wide text-neutral-500 md:text-[15px]">
                            Pages:
                            <span className="ml-1 text-neutral-900">{singleData?.pageCount}</span>
                        </h5>
                        <h5 className="text-[13px] tracking-wide text-neutral-500 md:text-[15px]">
                            Current Stock:
                            <span className="ml-1 text-neutral-900">{singleData?.currentStock}</span>
                        </h5>
                        <h5 className="text-[13px] tracking-wide text-neutral-500 md:text-[15px]">
                            Max Stock:
                            <span className="ml-1 text-neutral-900">{singleData?.maximumStock}</span>
                        </h5>
                        <h5 className="text-[13px] tracking-wide text-neutral-500 md:text-[15px]">
                            Published On:
                            <span className="ml-1 text-neutral-900">
                                {singleData?.publishedDate ? format(new Date(singleData?.publishedDate), 'dd MMM yyyy') : 'N/A'}
                            </span>
                        </h5>
                        <h5 className="text-[13px] tracking-wide text-neutral-500 md:text-[15px]">
                            Category:
                            <span className="ml-1 text-neutral-900">{singleData?.category}</span>
                        </h5>
                    </div>

                    <div className="flex items-center justify-between md:justify-normal gap-10">
                        <span className="w-max rounded bg-lime-100 px-3 py-1 text-sm text-lime-700 md:text-lg">
                            &#8377;{singleData?.rent}
                        </span>
                        <Button size="sm" className="rounded border-1.5 border-lime-700 bg-gradient-to-br from-lime-100 from-20% to-lime-500 text-lime-800">
                            <Link to={`/issue_book?id=${singleData?._id}&title=${singleData?.title}&rent=${singleData?.rent}`} className="text-sm md:text-base">Issue Book</Link>
                        </Button>
                    </div>
                </div>

                <div className="col-span-4 md:col-span-3 mt-3 md:mt-0">
                    <p className="text-[13px] md:text-base text-justify leading-6 tracking-wide">{singleData?.shortDescription}</p>
                </div>
            </div>

            <div>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(singleData?.longDescription || ''),
                    }}
                    className="text-[13px] md:text-base text-justify leading-6 tracking-wide"
                ></p>
            </div>
        </div>
    )
}

export default SingleBook;
