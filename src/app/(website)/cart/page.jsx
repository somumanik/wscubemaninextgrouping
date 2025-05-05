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
                <section className="bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl mb-24 tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Page not found currently</p>
                            <p className="mb-4 text-lg font-light text-gray-300">Sorry, we can't find such page.</p>

                            <button type="button" className="text-white text-center bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-1 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Back To Home</button>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}
