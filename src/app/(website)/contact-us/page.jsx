"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBuildingCircleExclamation } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

export default function ContactUs() {
    const MapView = dynamic(() => import("@/app/(website)/contact-us/mapview/MapView"), { ssr: false });

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

    useEffect(() => {
        // ✅ This ensures it's only run in the browser
        if (typeof window !== "undefined") {
            const L = require("leaflet"); // ✅ Import inside effect
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
            });
        }
    }, []);
    return (
        <>
            <div className='flex flex-col justify-center items-center pt-12'>
                <p className='text-4xl'>Contact Us</p>
                <div className='flex justify-center items-center py-1'>
                    <Link href={'/'}>
                        Home
                    </Link>
                    &nbsp;<p className='text-[#C09578]'>< MdKeyboardArrowRight /></p>&nbsp; <p className='text-[#C09578]'> Contact Us</p>
                </div>

            </div>
            <div className='max-w-[1320px] mx-auto border-b-1 border-b-gray-200 border-solid py-5 pb-5 '></div>
            <div className='max-w-[1320px] mx-auto '>
                <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 pb-5 '></div>
                {/* Map View Start */}
                <div className="w-full h-[500px] rounded shadow overflow-hidden">
                    <MapContainer center={[28.6139, 77.2090]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[28.6139, 77.2090]}>
                            <Popup>Delhi, India</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                {/* Map View End */}

                <div className="pt-10 grid grid-cols-2 gap-4 ">
                    <div className="text-xl"><p>Contact Us</p>
                        <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid py-5 '></div>
                        <div className="flex gap-3 pt-5 items-center text-[15px] pb-3">

                            <FaBuildingCircleExclamation />
                            <p>Address : Claritas est etiam processus dynamicus</p>

                        </div>
                        <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid  '></div>
                        <div className="flex gap-3 pt-5 items-center text-[15px] pb-3">
                            <MdLocalPhone />
                            <p>9781234560</p>
                        </div>
                        <div className='max-w-[100%] border-b-1 border-b-gray-200 border-solid  '></div>
                        <div className="flex gap-3 pt-5 items-center text-[15px]">
                            <CiMail />
                            <p>furniture@gmail.com</p>
                        </div>
                    </div>
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
    )
}
