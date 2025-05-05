import React from 'react'
import WhyChooseCom from './AboutComp/WhyChooseCom'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md"


export default function AboutUs() {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-4xl'>About Us</p>
        <div className='flex justify-center items-center py-1'>
          <Link href={'/'}>
            Home
          </Link>
          &nbsp;<p className='text-[#C09578]'>< MdKeyboardArrowRight /></p>&nbsp; <p className='text-[#C09578]'> About-us</p>
        </div>

      </div>
      <div className='max-w-[1320px] mx-auto '>
        <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 '></div>
        <div className='py-10'>
          <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg" alt="" />
        </div>
        <div className='flex justify-center items-center flex-col gap-3'>
          <p className='text-2xl'>Welcome to Monsta!</p>
          <p className='text-center p-1 text-[14px]'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>
          <p className='text-[#C09578]'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
        </div>
      </div>


      <WhyChooseCom />
    </>
  )
}
