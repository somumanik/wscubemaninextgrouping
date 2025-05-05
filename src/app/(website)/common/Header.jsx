import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { FaShoppingCart } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'

export default function Header() {
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
           
            {/* logo */}
            <div className=' max-w-[1320px] mx-auto flex justify-between items-center py-4'>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" className='w-[150px]' />
                </div>
                <div>
                    <form action="" className='flex items-center gap-4'>

                        <div className=' border-1 border-gray-400 p-2 flex justify-between items-center rounded'>
                            <input className='outline-0 border-0 ' type="text" placeholder='Search product...' />
                            <CiSearch />
                        </div>
                        <div className=' border-1 border-gray-400 p-3 flex justify-center items-center rounded'>
                            <button>
                                <FaHeart />
                            </button>
                        </div>
                        <div className='border-1 border-gray-400 p-2 flex justify-between items-center gap-2 rounded relative'>
                            <div className='absolute top-[23%] left-[-8%] bg-[#C09578] w-[22px] h-[23px] flex justify-center text-white items-center rounded-full p-1'>
                                0
                            </div>&nbsp;
                            <button >
                                < FaShoppingCart />
                            </button>|
                            <p className='font-semibold text-sm'>Rs. 0.00</p>
                            <IoIosArrowDown />
                        </div>

                    </form>
                </div>
            </div>
            <hr className='border-gray-300' />

            {/* nav */}
            <nav>
                <ul className='flex justify-center items-center gap-10 text-sm py-5 font-semibold font-sans '>
                    <li className='text-[#C09578] active'><a>HOME</a></li>
                    <li className='hover:text-[#C09578] cursor-pointer'>
                        <a className='flex items-center gap-1'> LIVING
                            <IoIosArrowDown /></a>
                    </li>
                    <li className='hover:text-[#C09578] cursor-pointer'>
                        <a className='flex items-center gap-1'> SOFA
                            <IoIosArrowDown /></a>
                    </li>
                    <li className='hover:text-[#C09578] cursor-pointer'>
                        <a className='flex items-center gap-1'>
                            PAGES
                            <IoIosArrowDown />
                        </a>
                    </li>
                    <li className='hover:text-[#C09578] cursor-pointer'><Link href={'/contact-us'}>CONTACT US</Link></li>
                </ul>
            </nav>


            <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid '></div>
            {/* Header Middle End */}

        </>
    )
}
