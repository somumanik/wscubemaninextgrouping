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
            <div className='max-w-[1320px] mx-auto mb-5 '>
                <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 mb-5 '></div>
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
                        <tr>
                            <td colSpan={6} className="p-2 text-right">
                                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-[#C09578] cursor-pointer transition">
                                    Update Cart
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className='grid grid-cols-2 gap-6'>
                    <div >
                        <p className='border bg-gray-900 text-white p-3'>COUPON</p>
                        <div className='border border-gray-200 ps-4'>
                            <p className='my-4'>Enter your coupon code if you have one.</p>
                            <form action="" className='flex gap-5 mb-10'>
                                <input className='p-2 border border-gray-200 outline-[0]' type="search" placeholder='Coupon Code' />
                                <button type="button" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-[#C09578] cursor-pointer transition">Apply Coupon</button>
                            </form>
                        </div>
                    </div>
                    <div >
                        <p className='border bg-gray-900 text-white p-3'>CART TOTALS</p>
                        <div className='border border-gray-200 ps-4'>
                            <div className='flex justify-between pe-4 my-4'>
                                <p>Subtotal</p>
                                <p>Rs. 5,200</p>
                            </div>
                            <div className='flex justify-between pe-4 my-4'>
                                <p>Discount (-)</p>
                                <p>Rs. 0</p>
                            </div>
                            <div className='flex justify-between pe-4 my-4'>
                                <p>Total</p>
                                <p>Rs. 5,200</p>
                            </div>
                            <div className="py-3 text-right ">
                                <button type="button" className="bg-blue-600 text-right text-white px-6 py-2 hover:bg-[#C09578] cursor-pointer rounded transition" >Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 mb-8 '></div>
        </>
    )
}
