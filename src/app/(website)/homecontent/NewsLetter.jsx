import React from 'react'

export default function NewsLetter() {

    return (
        <>
            <div className='bg-gray-50 py-12'>
                <div className='max-w-[1320px] mx-auto flex flex-col justify-center items-center mt-8 mb-12 '>
                    <p className='my-2 text-[28px] text-gray-900'>Our Newsletter</p>
                    <h1 className='my-1 text-[14px] text-gray-500 '>Get E-mail updates about our latest shop and special offers.</h1>
                    <form action="" className='my-8 w-[50%]  '>
                        <input className='w-[70%] px-2 py-[11px] border-1 outline-0 border-gray-400' type="search" placeholder='Email address...' />
                        <button className='w-[30%] px-2 py-[12px] bg-[#C09578] text-white cursor-pointer'>Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )

}
