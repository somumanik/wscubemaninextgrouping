"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBuildingCircleExclamation } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

// 👇 Dynamically import MapView (SSR disabled)
const MapView = dynamic(() => import("@/app/(website)/contact-us/mapview/MapView"), {
    ssr: false,
});

export default function ContactUs() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        address: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center pt-12'>
                <p className='text-4xl'>Contact Us</p>
                <div className='flex justify-center items-center py-1'>
                    <Link href={'/'}>Home</Link>
                    &nbsp;<p className='text-[#C09578]'><MdKeyboardArrowRight /></p>&nbsp;
                    <p className='text-[#C09578]'> Contact Us</p>
                </div>
            </div>

            <div className='max-w-[1320px] mx-auto border-b-1 border-b-gray-200 py-5'></div>

            <div className='max-w-[1320px] mx-auto'>
                {/* Map View */}
                <div className="w-full h-[500px] rounded shadow overflow-hidden">
                    <MapView />
                </div>

                {/* Contact Info and Form */}
                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Contact Info */}
                    <div className="text-xl">
                        <p>Contact Us</p>
                        <div className='border-b border-gray-200 py-5'></div>
                        <div className="flex gap-3 pt-5 items-center text-[15px] pb-3">
                            <FaBuildingCircleExclamation />
                            <p>Address : Claritas est etiam processus dynamicus</p>
                        </div>
                        <div className='border-b border-gray-200'></div>
                        <div className="flex gap-3 pt-5 items-center text-[15px] pb-3">
                            <MdLocalPhone />
                            <p>9781234560</p>
                        </div>
                        <div className='border-b border-gray-200'></div>
                        <div className="flex gap-3 pt-5 items-center text-[15px]">
                            <CiMail />
                            <p>furniture@gmail.com</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="text-xl">
                        <p>Tell us your question</p>
                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow rounded">
                            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Your Name (required)</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                    placeholder="Name *"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Your Email (required)</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                    placeholder="Email *"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Your Mobile Number (required)</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                    placeholder="Mobile Number *"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                    placeholder="Subject *"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Your Message</label>
                                <textarea
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                    placeholder="Address *"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
