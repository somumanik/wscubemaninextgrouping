'use client'

import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import HomeSliderBestproducts from '../pageslider/HomeSliderBestproducts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


// react-slick jab tumhara custom arrow render karta hai, to woh us custom component ko kuch props ke saath call karta hai — jaise:

// className

// style

// onClick

// currentSlide

// slideCount


export default function ProductDetails() {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} z-50 right-0`}
                style={{ ...style, display: 'block', background: '#C09578', borderRadius: '50%' }}
                onClick={onClick}
            />
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} z-50 left-0`}
                style={{ ...style, display: 'block', background: '#C09578', borderRadius: '50%' }}
                onClick={onClick}
            />
        );
    };


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };



    return (
        <>
            <div className='flex flex-col justify-center items-center pt-12'>
                <p className='text-4xl'>Product Details</p>
                <div className='flex justify-center items-center py-1'>
                    <Link href={'/'}>
                        <p className='hover:text-[#C09578] cursor-pointer'>Home</p>
                    </Link>
                    &nbsp;<p className='text-[#C09578]'><MdKeyboardArrowRight /></p>&nbsp;
                    <p className='hover:text-[#C09578] cursor-pointer'> Product Details</p>
                    <p className='text-[#C09578]'><MdKeyboardArrowRight /></p>&nbsp;
                    <p className='text-[#C09578]'> Product Details</p>
                </div>
            </div>
            <div className='max-w-[1320px] mx-auto border-b-1 border-b-gray-200 border-solid py-5'></div>
            <div className='max-w-[1320px] mx-auto flex justify-center items-center my-10'>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <div className='relative overflow-hidden cursor-pointer'>
                            <div className='transition-transform duration-300 hover:scale-105'>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                            </div>
                        </div>
                        <Slider {...settings} className="my-2 mx-5 gap-x-5 z-50">
                            <div className='px-1'>
                                <img className="w-50 h-[75px] transition-transform duration-300 group-[.slick-center]:scale-125" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                            </div>
                            <div className='px-1'>
                                <img className="w-50 h-[75px] transition-transform duration-300 group-[.slick-center]:scale-125" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                            </div>
                            <div className='px-1'>
                                <img className="w-50 h-[75px] transition-transform duration-300 group-[.slick-center]:scale-125" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                            </div>
                            <div className='px-1'>
                                <img className="w-50 h-[75px] transition-transform duration-300 group-[.slick-center]:scale-125" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                            </div>
                            <div className='px-1'>
                                <img className="w-50 h-[75px] transition-transform duration-300 group-[.slick-center]:scale-125" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                            </div>
                            <div className='px-1'>
                                <img className="w-50 h-[75px] transition-transform duration-300 group-[.slick-center]:scale-125" src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                            </div>

                        </Slider>
                    </div>
                    <div>
                        <p className='text-[20px] mb-3'>Evan Coffee Table</p>
                        <p className='py-1 mb-5'><span className='line-through text-red-600 text-[13px]'>Rs. 32000</span>&nbsp; Rs. 2,300</p>
                        <p className='py-1'>The Evan Coffee table has stools that can be encased under the table.</p>
                        <div className='max-w-[1320px] mx-auto border-b-1 border-b-gray-200 border-solid py-5'></div>

                        <div className="py-3 my-3  ">
                            <button type="button" className="bg-[#C09578] text-right text-white px-10 py-3 hover:bg-[#C09578] cursor-pointer rounded transition" ><p className='px-12'>Add To Cart</p></button>
                        </div>
                        <div className='my-5'>
                            <p className='py-1'>Code: jod00113</p>
                            <p className='py-1'>Dimension: 72L * 32H * 30W</p>
                            <p className='py-1'>Estimate Delivery Days: "30-35" Days</p>
                            <p className='py-1'>Category: Coffee Tables</p>
                            <p className='py-1'>Color: Faded Ochre</p>
                            <p className='py-1'>Material: Marandi Wood</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1320px] mx-auto'>
                <p className="text-[22px] font-[600] text-[#C09578]">Description</p>
                <div className='max-w-[1320px] mx-auto border-b-1 border-b-gray-200 border-solid py-2 mb-8'></div>
                <p>The Evan Coffee table has stools that can be encased under the table. The Stools are cushioned to keep you comfortable, and since they can be put away under the table, they do not take up much space. This table is made of Sheesham, and the design is practical and functional. It can seamlessly blend in with any décor style owing to its simple yet elegant design.</p>
            </div>

            <HomeSliderBestproducts />
            <HomeSliderBestproducts />


            <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 mb-8 '></div>
        </>
    )
}

