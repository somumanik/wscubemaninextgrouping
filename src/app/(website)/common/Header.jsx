"use client"
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { FaShoppingCart } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'


export default function Header() {
    let [isOpen, setIsopen] = useState(false)



    return (
        <>
            {/* Header Top Start */}
            <div className='max-w-[1320px] mx-auto grid grid-cols-2 justify-center items-center p-3'>
                <div>
                    <p>Contact us 24/7 : +91-9781234560 / furniture@gmail.com</p>
                </div>
                <div className='flex justify-end'>
                    <button className='cursor-pointer'>Login&nbsp; /</button>
                    <button>&nbsp; Register</button>
                </div>
            </div>
            <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid '></div>
            {/* Header Top End */}

            {/* Header Middle Start */}
            <div className='max-w-[1320px] mx-auto flex justify-between items-center py-4'>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" className='w-[150px]' />
                </div>
                <div>
                    <form action="" className='flex items-center gap-4'>
                        <div className='border-1 border-gray-400 p-2 flex justify-between items-center rounded'>
                            <input className='outline-0 border-0 ' type="text" placeholder='Search product...' />
                            <p className='hover:text-[#C09578] text-xl'><CiSearch /></p>

                        </div>
                        <div className='border-1 border-gray-400 p-3 flex justify-center items-center rounded'>

                            <Link href={'/wishlist'} className='hover:text-[#C09578] text-xl'>
                                <FaHeart />
                            </Link>

                        </div>
                        <div className='border-1 border-gray-400 p-2 flex justify-between items-center gap-2 rounded relative'>
                            <div className='absolute top-[23%] left-[-8%] bg-[#C09578] w-[22px] h-[23px] flex justify-center text-white items-center rounded-full p-1'>
                                0
                            </div>&nbsp;
                            <button type="button" onClick={(() => setIsopen(true))} className=' flex justify-center items-center gap-2 cursor-pointer hover:text-[#C09578] font-semibold text-sm' >
                                < FaShoppingCart /> |
                                <p>Rs. 0.00</p>
                                < IoIosArrowDown />
                            </button>

                            <div className={`fixed inset-0 z-50 flex justify-end pointer-events-none`}>
                                {/*  यह पूरा panel screen पर "fixed" रहता है
                                     justify-end से Cart panel दाईं ओर जाता है
                                     pointer-events-none से default पर यह क्लिक नहीं लेता
                                     जब isOpen = true होता है, तो हम नीचे वाले हिस्से को दिखाते हैं */}
                                {/* Overlay */}
                                <div
                                    className={`
                                            fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity duration-300 ease-in-out 
                                             ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                                          `}
                                    onClick={() => setIsopen(false)}>
                                </div>

                                {/* Offcanvas Panel */}
                                <div
                                    className={`
                                        relative w-[350px] bg-white shadow-lg h-full p-4 transform transition-transform duration-500 ease-in-out
                                        ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
                                        pointer-events-auto
                                    `}>
                                        {/*  ये है actual Cart panel
                                             Width: 350px, Height: full, background: सफेद
                                             Transition की वजह से यह धीरे-धीरे slide होता है
                                             translate-x-0: दिखाई दे
                                             translate-x-full: पूरा बाहर (right side) छुपा हुआ */}
                                    <button
                                        onClick={() => setIsopen(false)}
                                        className="absolute top-2 right-2 text-gray-500 hover:text-black"
                                    >
                                        ✕
                                    </button>
                                    <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
                                    <div className='border-b border-gray-200 my-3' />
                                    <p>Cart is empty for now!</p>
                                    <img
                                        src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/wishlist-Empty.jpg"
                                        alt="Empty Cart"
                                        className="mx-auto w-40 h-40 object-contain mb-6"
                                    />
                                    <div className='border-b border-gray-200 my-5' />
                                    <p className='text-center text-gray-500'>Your shopping cart is empty!</p>
                                    <div className='border-b border-gray-200 my-5' />
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
            <hr className='border-gray-300' />
            {/* Header Middle End */}

            {/* nav */}
            <nav>
                <ul className='flex justify-center items-center gap-10 text-sm font-semibold font-sans '>
                    <li className='text-[#C09578] active'>
                        <a>HOME</a>
                    </li>

                    {/* LIVING */}
                    <li className='relative group hover:text-[#C09578] py-7 cursor-pointer'>
                        <a className='flex items-center gap-1'>
                            LIVING
                            <IoIosArrowDown />
                        </a>
                        {/* Submenu */}
                        <ul className='absolute top-[64px] shadow-lg border-1 border-solid border-[#ccc] left-0 hidden group-hover:block bg-white  mt-3 transition-all duration-300 ease-in-out z-10 opacity-0 group-hover:opacity-100'>
                            {/* Row Layout for Tables, Page 2, and Page 3 */}
                            <div className='flex'>
                                {/* Left Column: Tables */}
                                <div className='w-52'>
                                    <li className=''>
                                        <Link href={'/page1'} className='block px-4 py-2 text-black text-sm'>
                                            Tables
                                        </Link>
                                        <ul className='block px-4 py-2 text-sm'>
                                            <li className='py-1 text-gray-400 hover:text-[#C09578]'>Nest of Tables</li>
                                            <li className='py-1 text-gray-400 hover:text-[#C09578]'>Console Table</li>
                                            <li className='py-1 text-gray-400 hover:text-[#C09578]'>Coffee Table Sets</li>
                                            <li className='py-1 text-gray-400 hover:text-[#C09578]'>Coffee Tables</li>
                                        </ul>
                                    </li>
                                </div>

                                {/* Right Columns: Page 2 and Page 3 */}
                                <div className=' flex'>
                                    <div className='w-50'>
                                        <li className=''>
                                            <Link href={'/living-storage'} className='block px-4 py-2 text-black text-sm'>
                                                LIVING STORAGE
                                            </Link>
                                        </li>
                                        <ul className='block px-4 py-2  text-sm'>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>Prayer Units</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>Display Unit</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>Shoe Racks</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>Chest Of Drawers</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>Cabinets And Sideboard</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>Bookshelves</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>TV Units</li>
                                        </ul>
                                    </div>
                                    <div className='w-50'>
                                        <li className=''>
                                            <Link href={'/mirrors'} className='block px-4 py-2 text-black text-sm'>
                                                MIRRORS
                                            </Link>
                                            <ul className='block px-4 py-2  text-sm'>
                                                <li className='py-1 text-gray-400 hover:text-[#C09578]'>Wooden Mirrors</li>
                                            </ul>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </li>

                    {/* SOFA */}
                    <li className='relative group hover:text-[#C09578] py-7 cursor-pointer'>
                        <a className='flex items-center gap-1'>
                            SOFA
                            <IoIosArrowDown />
                        </a>
                        {/* Submenu */}
                        <ul className='absolute top-[64px] shadow-lg border-1 border-solid border-[#ccc] left-0 hidden group-hover:block bg-white  mt-3 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100'>
                            {/* Row Layout for Tables, Page 2, and Page 3 */}
                            <div className='flex'>
                                {/* Left Column: Tables */}
                                <div className='w-52'>
                                    <li className=''>
                                        <Link href={'/page1'} className='block px-4 py-2 text-black text-sm'>
                                            SOFA CUM BED
                                        </Link>
                                        <ul className='block px-4 py-2 text-sm'>
                                            <li className='py-1 text-gray-400 hover:text-[#C09578]'>Wooden Sofa Cum Bed</li>

                                        </ul>
                                    </li>
                                </div>

                                {/* Right Columns: Page 2 and Page 3 */}
                                <div className=' flex'>
                                    <div className='w-50'>
                                        <li className=''>
                                            <Link href={'/living-storage'} className='block px-4 py-2 text-black text-sm'>
                                                SOFA SETS
                                            </Link>
                                        </li>
                                        <ul className='block px-4 py-2  text-sm'>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>L Shape Sofa</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>1 Seater Sofa</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>2 Seater Sofa</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>3 Seater Sofa</li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>Wooden Sofa Sets</li>

                                        </ul>
                                    </div>
                                    <div className='w-50'>
                                        <li className=''>
                                            <Link href={'/mirrors'} className='block px-4 py-2 text-black text-sm'>
                                                SWING JHULA
                                            </Link>
                                            <ul className='block px-4 py-2  text-sm'>
                                                <li className='py-1 text-gray-400 hover:text-[#C09578]'>Wooden Jhula</li>
                                            </ul>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </li>

                    {/* PAGES*/}
                    <li className='relative group hover:text-[#C09578] py-7 cursor-pointer'>
                        <a className='flex items-center gap-1'>
                            PAGES
                            <IoIosArrowDown />
                        </a>
                        {/* Submenu */}
                        <ul className='absolute top-[64px] shadow-lg border-1 border-solid border-[#ccc] left-0 hidden group-hover:block bg-white  mt-3 transition-all duration-300 ease-in-out z-10 opacity-0 group-hover:opacity-100'>
                            {/* Row Layout for Tables, Page 2, and Page 3 */}
                            <div className='flex'>
                                {/* Left Column: Tables */}
                                <div className='w-52'>
                                    <li className=''>
                                        {/* <Link href={'/page1'} className='block px-4 py-2 text-black text-sm'>
                                            Tables
                                        </Link> */}
                                        <ul className='block px-4 py-4 text-sm'>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>
                                                <Link href={'/about-us'} >About Us</Link></li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>
                                                <Link href={'/cart'} >Cart</Link></li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>
                                                <Link href={'/checkout'} >Checkout</Link ></li>
                                            <li className='p-2 text-gray-400 hover:text-[#C09578]'>
                                                <Link href={'/frequently-questions'} >Frequency Questions</Link ></li>
                                        </ul>
                                    </li>
                                </div>


                            </div>
                        </ul>
                    </li>
                    <li className='hover:text-[#C09578] cursor-pointer'>
                        <Link href={'/contact-us'}>CONTACT US</Link>
                    </li>
                </ul>
            </nav>

            <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid '></div>
            {/* Header Bottom End */}
        </>
    )
}
