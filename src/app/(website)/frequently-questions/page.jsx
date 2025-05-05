"use client";
import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md"

const faqs = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase.",
    },
    {
        question: "How long does shipping take?",
        answer: "Shipping usually takes 3-5 business days.",
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, we offer 24/7 customer support via chat and email.",
    },
];


export default function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };


    return (
        <>
            <div className='flex flex-col justify-center items-center pt-12'>
                <p className='text-4xl'>Frequently Questions</p>
                <div className='flex justify-center items-center py-1'>
                    <Link href={'/'}>
                        Home
                    </Link>
                    &nbsp;<p className='text-[#C09578]'>< MdKeyboardArrowRight /></p>&nbsp; <p className='text-[#C09578]'> Frequently Questions</p>
                </div>

            </div>
            <div className='max-w-[1320px] mx-auto border-b-1 border-b-gray-200 border-solid py-5 '></div>
            <div className='max-w-[1320px] mx-auto '>
                <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 '>
                    <div className=" p-4">
                       

                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-3 border-[#C09578] rounded">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className={`w-full px-4 py-3 flex justify-between items-center text-left font-medium transition ${activeIndex === index ? "bg-[#C09578]" : "bg-gray-200"
                                        }`}>
                                    <span>{faq.question}</span>
                                    <span>{activeIndex === index ? "−" : "+"}</span>
               
                                    
                                </button>

                                <div
                                    className={` px-4 overflow-hidden transition-all duration-300 text-[#C09578] bg-white ${activeIndex === index ? "max-h-40 py-2" : "max-h-0"
                                        }`}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </>
    )
}
