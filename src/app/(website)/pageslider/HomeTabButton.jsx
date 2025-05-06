
'use client';
import { useState } from 'react';
import React from 'react'

const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'This is the content of Tab 1.' },
    { id: 'tab2', label: 'Tab 2', content: 'Here is what Tab 2 shows.' },
    { id: 'tab3', label: 'Tab 3', content: 'Tab 3 content is here.' },
];

export default function TabsComponent() {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <div className="flex border-b border-gray-300">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 border py-2 px-4 text-center ${activeTab === tab.id
                                ? 
                                'border-b-2 border-[#C09578]  text-[#C09578]'
                                : 
                                'text-gray-500'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-4 bg-white  rounded-b shadow-sm">
                {tabs.map(
                    (tab) =>
                        tab.id === activeTab && (
                            <div key={tab.id} className="text-gray-700">
                                {tab.content}
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

