import { useEffect } from 'react';
import user from '../assets/user.png';
import { FaPhone } from "react-icons/fa6";
import { PiBooksFill } from "react-icons/pi";
import { Link, useParams } from 'react-router-dom';
import { MdEmail, MdLocationPin } from "react-icons/md";
import { useUserContext } from '../context/UserContext';
import BooksAssignedUser from '../sub-components/BooksAssignedUser';
import { Card, Chip, Image, Spinner, Tab, Tabs } from '@nextui-org/react';

const SingleUser = () => {
    const { getSingleData, isFetchLoading, singleData } = useUserContext();
    const { id } = useParams();

    useEffect(() => {
        getSingleData(`https://libmanage-backend.onrender.com/api/users/${id}`);
    }, []);

    return (
        <div className="flex w-full flex-col gap-6 bg-neutral-50 p-6 md:gap-8 md:px-14 md:py-10">
            <Card className="p-4 flex flex-row gap-4">
                {isFetchLoading ?
                    <Spinner className="w-full" classNames={{ circle1: 'border-b-lime-600', circle2: 'border-b-lime-600' }} />
                    :
                    <>
                        <div className="w-28 md:w-40">
                            <Image
                                src={user}
                                alt="user_image"
                                isZoomed
                                className="w-32 md:w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-0.5">
                                <h1 className="text-sm md:text-xl font-semibold tracking-wide">{singleData?.name}</h1>
                                <span className="text-xs md:text-[15px] text-lime-600 tracking-wide">{singleData?.username}</span>
                            </div>

                            <div className="flex md:items-center flex-col md:flex-row gap-2 md:gap-6">
                                <div className="flex items-center gap-1">
                                    <MdEmail className="text-sm md:text-xl text-neutral-500" />
                                    <span className="ml-1 text-neutral-900 tracking-wide text-sm md:text-base">{singleData?.email}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaPhone className="text-neutral-500 text-xs md:text-base" />
                                    <span className="ml-1 text-neutral-900 tracking-wide text-[13px] md:text-base">{singleData?.phone}</span>
                                </div>
                            </div>

                            <div className="flex md:items-center">
                                <MdLocationPin className="text-xl text-neutral-500" />
                                <span className="ml-1 text-neutral-900 text-[13px] md:text-base">
                                    {singleData?.address?.street}, {singleData?.address?.city}, {singleData?.address?.state}, {singleData?.address?.zipCode}
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <PiBooksFill className="text-base md:text-xl text-neutral-500" />
                                <h5 className="ml-1 text-[13px] tracking-wide text-neutral-900 md:text-[15px]">
                                    Books Assigned:
                                    <Chip color="warning" radius="sm" variant="flat" className="h-6 text-lime-700 bg-lime-200 rounded ml-2">{singleData?.books_assigned}</Chip>
                                </h5>
                            </div>
                        </div>
                    </>
                }
            </Card>

            <hr />

            <Tabs
                variant="underlined"
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 border-divider",
                    cursor: "w-full bg-lime-600",
                    tab: "max-w-fit px-0 h-8 md:h-12",
                    tabContent: "group-data-[selected=true]:text-lime-600 md:text-[15px]"
                }}
            >
                <Tab title="Books Assigned">
                    <BooksAssignedUser id={singleData?._id} />
                </Tab>
            </Tabs>
        </div>
    )
}

export default SingleUser;