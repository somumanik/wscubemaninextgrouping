import React from 'react'

export default function HomeImage() {
    return (
        <>
            <div className='max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5 p-5 mt-2' >
                <div className='relative' style={{zIndex:"-10"}}>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                    <div className='absolute top-7 left-7'>
                        <p>Design Creative</p>
                        <h1 className='text-[25px]'>Chair Collection</h1>
                    </div>
                </div>
                <div className='relative' style={{zIndex:"-10"}}>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp" alt="" />
                    <div className='absolute top-7 left-7'>
                        <p>Best Selling Products</p>
                        <h1 className='text-[25px]'>Chair Collection</h1>
                    </div>
                </div>
                <div className='relative' style={{zIndex:"-10"}}>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                    <div className='absolute top-7 left-7'>
                        <p>Design Creative</p>
                        <h1 className='text-[25px]'>Chair Collection</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
