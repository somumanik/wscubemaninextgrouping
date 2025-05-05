import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"

export default function Cart() {
    return (
        <>
            <div className='flex flex-col justify-center items-center pt-12'>
                <p className='text-4xl'>Shopping Cart</p>
                <div className='flex justify-center items-center py-1'>
                    <Link href={'/'}>
                        Home
                    </Link>
                    &nbsp;<p className='text-[#C09578]'>< MdKeyboardArrowRight /></p>&nbsp; <p className='text-[#C09578]'> Shopping Cart</p>
                </div>

            </div>
            <div className='max-w-[1320px] mx-auto '>
                <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 '></div>

            </div>


        </>
    )
}
