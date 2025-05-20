


import React from 'react';
import { FaEarthAfrica } from "react-icons/fa6";
import { CiClock1 } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function ThreeCompnent() {
    return (
        <div className='bg-[#F8F9F9] mt-12 border border-gray-200'>
            <div className='max-w-[1320px] mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-12 items-center text-center'>

                    <div>
                        <div className='w-[80px] h-[80px] rounded-full border border-gray-300 flex items-center justify-center mx-auto group hover:border-[#C09578] cursor-pointer transition-colors duration-300'>
                            <div className='text-gray-400 group-hover:text-[#C09578] text-2xl'>
                                <FaEarthAfrica />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className='text-xl py-2 font-semibold'>Free Shipping</p>
                            <p className='text-sm text-gray-500'>Free shipping on all order</p>
                        </div>
                    </div>

                    <div>
                        <div className='w-[80px] h-[80px] rounded-full border border-gray-300 flex items-center justify-center mx-auto group hover:border-[#C09578] cursor-pointer transition-colors duration-300'>
                            <div className='text-gray-400 group-hover:text-[#C09578] text-2xl'>
                                <IoMdCheckmarkCircleOutline />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className='text-xl py-2 font-semibold'>Money Return</p>
                            <p className='text-sm text-gray-500'>Back guarantee under 7 days</p>
                        </div>
                    </div>

                    <div>
                        <div className='w-[80px] h-[80px] rounded-full border border-gray-300 flex items-center justify-center mx-auto group hover:border-[#C09578] cursor-pointer transition-colors duration-300'>
                            <div className='text-gray-400 group-hover:text-[#C09578] text-2xl'>
                                <CiClock1 />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className='text-xl py-2 font-semibold'>Online Support</p>
                            <p className='text-sm text-gray-500'>Support online 24 hours a day</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
