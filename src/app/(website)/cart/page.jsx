import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"

export default function Cart() {
    const cartItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1513708927688-890fe41c2e99?auto=format&fit=facearea&w=256&q=80",
            name: "Wireless Headphones",
            desc: "Bluetooth, Noise Cancelling",
            price: 1999,
            qty: 1,
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=facearea&w=256&q=80",
            name: "Smart Watch",
            desc: "Fitness Tracker, Black",
            price: 2999,
            qty: 2,
        },
    ];

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
                <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 mb-5 '></div>
                {/* <section className="bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl mb-24 tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Page not found currently</p>
                            <p className="mb-4 text-lg font-light text-gray-300">Sorry, we can't find such page.</p>

                            <button type="button" className="text-white text-center bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-1 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Back To Home</button>
                        </div>
                    </div>
                </section> */}



                <table className="w-full border border-gray-200 my-8">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b border-r border-gray-200 w-20">Delete</th>
                            <th className="py-2 px-4 border-b border-r border-gray-200 w-50">Image</th>
                            <th className="py-2 px-4 border-b border-r border-gray-200 w-50">Product Details</th>
                            <th className="py-2 px-4 border-b border-r border-gray-200 w-30">Price</th>
                            <th className="py-2 px-4 border-b border-r border-gray-200 w-40">Quantity</th>
                            <th className="py-2 px-4 border-b w-30">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                {/* Delete */}
                                <td className="py-2 px-2 border-b border-r border-gray-200 text-center w-16">
                                    <button className="text-red-500 font-bold">Delete</button>
                                </td>
                                {/* Image */}
                                <td className="py-2 px-4 border-b border-r border-gray-200 text-center w-40">
                                    <img src={item.image} alt={item.name} className="w-28 h-28 object-cover mx-auto rounded" />
                                </td>
                                {/* Product Details */}
                                <td className="py-2 px-2 border-b border-r border-gray-200 w-40">
                                    <div>
                                        <p className="font-semibold truncate">{item.name}</p>
                                        <p className="text-sm text-gray-500 truncate">{item.desc}</p>
                                    </div>
                                </td>
                                {/* Price */}
                                <td className="py-2 px-2 border-b border-r border-gray-200 text-center">
                                    <span className="font-bold text-lg">₹{item.price}</span>
                                </td>
                                {/* Quantity */}
                                <td className="py-2 px-4 border-b border-r border-gray-200 text-center">
                                    <div className="flex items-center justify-center">
                                        <span className='me-2'>Quantity </span>
                                        <button className="px-2 py-1 bg-gray-200 rounded-l">-</button>
                                        <span className="px-4">{item.qty}</span>
                                        <button className="px-2 py-1 bg-gray-200 rounded-r">+</button>
                                    </div>
                                </td>
                                {/* Total */}
                                <td className="py-2 px-4 border-b text-center">
                                    <span className="font-bold text-lg">₹{item.price * item.qty}</span>
                                </td>
                            </tr>
                        ))}
                        <tr className='col-span-6'>
                            <td className='flex items-center justify-end'><button>Update Cart</button></td>
                        </tr>
                    </tbody>
                </table>


            </div>


        </>
    )
}
