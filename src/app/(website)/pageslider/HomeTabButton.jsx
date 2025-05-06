
'use client';
import { useState } from 'react';
import React from 'react'

const tabs = [
    {
        id: 'tab1',
        label: 'Featured',

    },
    {
        id: 'tab2',
        label: 'New Arrivals',

    },
    {
        id: 'tab3',
        label: 'Onsale',

    },
];

const contents = [
    {
        title: 'iPhone 15 Pro Max',
        image: 'https://via.placeholder.com/300x200?text=iPhone+15',
        price: '$1299',
    },
    {
        title: 'Samsung Galaxy S24 Ultra',
        image: 'https://via.placeholder.com/300x200?text=Samsung+S24',
        price: '$1199',
    },
    {
        title: 'Google Pixel 9 Pro',
        image: 'https://via.placeholder.com/300x200?text=Pixel+9',
        price: '$999',
    },
]


export default function TabsComponent() {
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeContent, setActiveContent] = useState([])

    return (
        <>
            <div className="w-full max-w-md mx-auto mt-10">
                <div className="flex border-b border-gray-300">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 border py-2 px-4 text-center ${activeTab === tab.id
                                ?
                                'border-b-2 border-[#C09578] text-xl  text-[#C09578]'
                                :
                                'text-gray-900 text-xl'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* ✅ Simplified Content */}
                {/* <div className="p-4 bg-white border border-t-0 rounded-b shadow-sm space-y-4">
                    {activeTab === 'tab1' && (
                        <div>
                            <h2 className="text-xl font-bold">iPhone 15 Pro Max</h2>
                            <img
                                src="https://via.placeholder.com/300x200?text=iPhone+15"
                                alt="iPhone"
                                className="rounded"
                            />
                            <p className="text-lg font-semibold">$1299</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Add to Cart
                            </button>
                        </div>
                    )}

                    {activeTab === 'tab2' && (
                        <div>
                            <h2 className="text-xl font-bold">Samsung S24 Ultra</h2>
                            <img
                                src="https://via.placeholder.com/300x200?text=Samsung+S24"
                                alt="Samsung"
                                className="rounded"
                            />
                            <p className="text-lg font-semibold">$1199</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Add to Cart
                            </button>
                        </div>
                    )}

                    {activeTab === 'tab3' && (
                        <div>
                            <h2 className="text-xl font-bold">Pixel 9 Pro</h2>
                            <img
                                src="https://via.placeholder.com/300x200?text=Pixel+9"
                                alt="Pixel"
                                className="rounded"
                            />
                            <p className="text-lg font-semibold">$999</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Add to Cart
                            </button>
                        </div>
                    )}
                </div> */}

            </div>
            <ContentItem1 />
        </>
    );
}


function ContentItem1() {
    return (
        <>
            <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-6 mt-7'>
                <div className='shadow-2xl flex flex-col'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div>

                    </div>
                </div>
                <div className='shadow-lg flex flex-col'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg" alt="" />
                    </div>
                </div>
                <div className='shadow-lg flex flex-col'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg" alt="" />
                    </div>
                </div>
                <div className='shadow-lg flex flex-col'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg" alt="" />
                    </div>
                </div>
                <div className='shadow-lg flex flex-col'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg" alt="" />
                    </div>
                </div>
                <div className='shadow-lg flex flex-col'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615225341228Ganthur%20Sheesham%20Wood%20Sofa%20Set___.jpg" alt="" />
                    </div>
                </div>
                <div className='shadow-lg flex flex-col'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}
