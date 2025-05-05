"use client"
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Wishlist() {
    return (
        <>
            <div className='flex flex-col justify-center items-center pt-12'>
                <p className='text-4xl'>My Wishlist</p>
                <div className='flex justify-center items-center py-1'>
                    <Link href={'/'}>
                        Home
                    </Link>
                    &nbsp;<p className='text-[#C09578]'>< MdKeyboardArrowRight /></p>
                    &nbsp;<p className='text-[#C09578]'> My Wishlist</p>
                </div>
            </div>
            <div className='max-w-[1320px] mx-auto border-b-1 border-b-gray-200 border-solid py-5'></div>
            <div className='max-w-[1320px] mx-auto flex justify-center items-center my-20'>

                {/* Empty Cart View */}
                <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
                    <img
                        src="/empty-cart.png"
                        alt="Empty Cart"
                        className="mx-auto w-40 h-40 object-contain mb-6" />
                    <h2 className="text-2xl font-semibold mb-2">Your Wishlist is Empty</h2>
                    <p className="text-gray-600 mb-6">
                        Looks like you haven't added anything to your wishlist yet.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </>
    )
}
