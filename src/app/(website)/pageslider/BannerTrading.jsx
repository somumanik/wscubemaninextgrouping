import React from 'react'

export default function BannerTrading() {
    return (
        <>
            <div className="group my-10 cursor-pointer
                bg-[url('https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg')] bg-cover bg-center h-127 w-full text-white transition-all duration-300">
                <div className="px-[200px] pt-[150px] transform transition-transform duration-300 group-hover:scale-110">
                    <h1 className="text-6xl text-black">
                        New Trending Collection
                    </h1>
                    <p className='py-2 text-[18px] text-gray-500'>
                        We Believe That Good Design is Always in Season
                    </p>
                    <button className='mt-4 p-2 text-[18px] border border-[#C09578] border-solid hover:bg-[#C09578] text-[#C09578] hover:text-white cursor-pointer'>
                        SHOPPING NOW
                    </button>
                </div>
            </div>


        </>
    )
}
