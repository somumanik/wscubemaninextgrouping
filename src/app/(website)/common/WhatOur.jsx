"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaRegStar } from 'react-icons/fa';

export default function WhatOur() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="w-full"> {/* wrapper for height */}
            <p className='pb-12 pt-10 flex justify-center items-center text-[25px]'>What Our Custumers Say ?</p>
            <Slider {...settings} className="h-full whatourslider" style={{zIndex:"-10"}}>
                {/* Slide 1 */}
                <div>
                    <div className="flex flex-col items-center justify-center text-center cursor-pointer px-4">
                        <p className="mb-8 text-lg font-medium text-gray-700 max-w-[1100px]">
                            These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                        </p>
                        <img
                            className="w-24 h-24 rounded-full object-cover mb-5"
                            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg"
                            alt="Testimonial"
                        />
                        <span class="mb-2">Kathy Young</span>
                        <span class="mb-1">CEO of SunPark</span>
                        <div class="mb-15 mt-2">
                            <ul className='flex text-[#C09578] '>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div>
                    <div className="flex flex-col items-center justify-center text-center cursor-pointer px-4">
                        <p className="mb-8 text-lg font-medium text-gray-700 max-w-[1100px]">
                            These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                        </p>
                        <img
                            className="w-24 h-24 rounded-full object-cover mb-10"
                            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg"
                            alt="Testimonial"
                        />
                         <span class="mb-2">Kathy Young</span>
                        <span class="mb-1">CEO of SunPark</span>
                        <div class="mb-15 mt-2">
                            <ul className='flex text-[#C09578] '>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>

                               
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div>
                    <div className="flex flex-col items-center justify-center text-center cursor-pointer px-4">
                        <p className="mb-8 text-lg font-medium text-gray-700 max-w-[1100px]">
                            These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                        </p>
                        <img
                            className="w-24 h-24 rounded-full object-cover mb-10"
                            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png"
                            alt="Testimonial"
                        />
                         <span class="mb-2">Kathy Young</span>
                        <span class="mb-1">CEO of SunPark</span>
                        <div class="mb-15 mt-2">
                            <ul className='flex text-[#C09578] '>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>

                                <li><a href="#"><FaRegStar /></a></li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </Slider>

        </div>
    );
}
