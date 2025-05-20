import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'

import { IoIosArrowDown } from 'react-icons/io'

export default function Footer() {
  return (
    <>
      <div className='max-w-[1320px] mx-auto grid lg:grid-cols-[32%_auto] md:grid-cols-2 grid-cols-1 mt-10'>
        <div>
          <h1 className='mb-4 text-[19px] text-[#242424]'>Contact Us</h1>
          <div className='text-[15px] mb-2 group'>
            <p className='py-1 text-gray-500 '>Address: Claritas est etiam processus dynamicus</p>
            <p className='py-1 text-gray-500 group-hover:text-[#C09578]'>Phone: 9781234560</p>
            <p className='py-1 text-gray-500 '>Email: furniture@gmail.com</p>
          </div>
          <div className='flex gap-3'>
            <div className='w-[35px] h-[35px] rounded-[50%]  border-1 text-gray-300 flex items-center justify-center group hover:border-[#C09578]  cursor-pointer transition-colors duration-300'>
              <div className='text-gray-400 group-hover:text-[#C09578]'>< FaFacebookF /></div>
            </div>
            <div className='w-[35px] h-[35px] rounded-[50%]  border-1 text-gray-300 flex items-center justify-center group hover:border-[#C09578]  cursor-pointer transition-colors duration-300'>
              <div className='text-gray-400 group-hover:text-[#C09578]'>< FaInstagram /></div>
            </div>
            <div className='w-[35px] h-[35px] rounded-[50%]  border-1 text-gray-300 flex items-center justify-center group hover:border-[#C09578]  cursor-pointer transition-colors duration-300'>
              <div className='text-gray-400 group-hover:text-[#C09578]'>< FaTwitter /></div>
            </div>
            <div className='w-[35px] h-[35px] rounded-[50%]  border-1 text-gray-300 flex items-center justify-center group hover:border-[#C09578] cursor-pointer transition-colors duration-300'>
              <div className='text-gray-400 group-hover:text-[#C09578]'>< FaLinkedinIn /></div>
            </div>
            <div className='w-[35px] h-[35px] rounded-[50%]  border-1 text-gray-300 flex items-center justify-center group hover:border-[#C09578]  cursor-pointer transition-colors duration-300'>
              <div className='text-gray-400 group-hover:text-[#C09578]'>< FaYoutube /></div>
            </div>
            <div className='w-[35px] h-[35px] rounded-[50%]  border-1 text-gray-300 flex items-center justify-center group hover:border-[#C09578]  cursor-pointer transition-colors duration-300'>
              <div className='text-gray-400 group-hover:text-[#C09578]'>< FaTelegram /></div>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-1'>
          <div>
            <h1 className='mb-4 text-[19px] text-[#242424]'>Information</h1>
            <ul>
              <li className='text-gray-500'>About Us</li>
              <li className='text-gray-500'>Contact Us</li>
              <li className='text-gray-500'>Frequently Questions</li>
            </ul>
          </div>
          <div>
            <h1 className='mb-4 text-[19px] text-[#242424]'>My Account</h1>
            <ul >
              <li className='text-gray-500'>My Dashboard</li>
              <li className='text-gray-500'>Wishlist</li>
              <li className='text-gray-500'>Cart</li>
              <li className='text-gray-500'>Checkout</li>
            </ul>
          </div>
          <div>
            <h1 className='mb-4 text-[19px] text-[#242424]'>Top Rated Products</h1>
            <div className='flex gap-4'>
              <img width={95} src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1619988418966Leo%20TV%20Cabinets.jpg" alt="" />

              <div className='flex flex-col'>
                <p className='text-[13px] cursor-pointer pb-1'>Console Table</p>
                <p className='text-[15px] text-blue-500 hover:text-[#C09578]'>Rex Console Table</p>
                <p className='text-[#C09578]'><span className='line-through text-red-600 text-[13px]'>Rs. 32000</span>&nbsp;Rs. 2,200</p>
              </div>
            </div>
            <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid my-4 '></div>
            <div className='flex gap-4'>
              <img width={95} src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg" alt="" />

              <div className='flex flex-col cursor-pointer pb-1'>
                <p className='text-[13px]'>3 Seater Sofa</p>
                <p className='text-[15px] text-blue-500 hover:text-[#C09578]'>Victoria Sheesham Wood Sofa Set</p>
                <p className='text-[#C09578]'><span className='line-through text-red-600 text-[13px]'>Rs. 32000</span>&nbsp;Rs. 7,000</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='max-w-[1320px] mx-auto mt-22 '>
        <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid my-5 '></div>
     
        <nav>
          <ul className='flex justify-center items-center gap-10 text-sm font-semibold font-sans '>
            <li className='hover:text-[#C09578] text-gray-500 cursor-pointer text-[16px]'><a>Home</a></li>
            <li className='hover:text-[#C09578] cursor-pointer text-gray-500 text-[16px]'>
              <a className='flex items-center gap-1'> Online Store
              </a>
            </li>
            <li className='hover:text-[#C09578] cursor-pointer text-gray-500 text-[16px]'>
              <a className='flex items-center gap-1'> Privacy Policy
              </a>
            </li>
            <li className='hover:text-[#C09578] cursor-pointer text-gray-500 text-[16px]'>
              <a className='flex items-center gap-1'>
                Terms Of Use
              </a>
            </li>
          </ul>
        </nav>
        <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid my-5'></div>
      </div>
      <div className='max-w-[1320px] mx-auto flex flex-col gap-5 justify-center items-center mt-8 mb-12 '>
              <p className='text-gray-500 text-[14px]'>All Rights Reserved By Furniture | © 2025</p>
              <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png" alt="" />
      </div>

    </>
  )
}
