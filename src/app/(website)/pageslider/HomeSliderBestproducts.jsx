// "use client"
// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import Link from 'next/link';
// import { FaHeart } from 'react-icons/fa';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const CustomPrevArrow = ({ onClick }) => (
//     <div onClick={onClick} className="absolute left-[-30px] top-[40%] z-10 cursor-pointer text-xl">
//         <FaChevronLeft />
//     </div>
// );

// const CustomNextArrow = ({ onClick }) => (
//     <div onClick={onClick} className="absolute right-[-30px] top-[40%] z-10 cursor-pointer text-xl">
//         <FaChevronRight />
//     </div>
// );

// export default function HomeBanner() {

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         nextArrow: <CustomNextArrow />,
//         prevArrow: <CustomPrevArrow />
//     };


//     return (
//         <>
//             <div className='max-w-[1320px] mx-auto px-[40px] md:px-[0px] '>
//                 {/* Heading with line */}
//                 <div className='flex items-center gap-3 mb-6'>
//                     <h1 className='text-xl whitespace-nowrap'>Bestselling Products</h1>
//                     <div className='flex-1 border-b border-gray-400'></div>
//                 </div>

//                 <Slider {...settings} className="bannerslider" z-50>
//                     <div className='shadow-xl p-1 my-2 '>
//                         <div className=' fle bg-whitex flex-col mx-[10px]'>
//                             <div>
//                                 <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
//                             </div>
//                             <div className='text-center'>
//                                 <p className='py-1'>Chest Of Drawers</p>
//                                 <p className='py-2'>Cabinets and Sideboard</p>
//                                 <div className='py-1 max-w-full border-b border-gray-200'></div>
//                                 <p className='py-3'>Rs. 25000</p>
//                                 <div className='flex justify-center items-center gap-1 py-2'>
//                                     <div className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                             <FaHeart />
//                                         </Link>
//                                     </div>
//                                     <button className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={''}>
//                                             <p className='hover:text-[#C09578] cursor-pointer '>Add To Cart</p>
//                                         </Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='shadow-xl p-1 my-2 '>
//                         <div className='flex bg-white flex-col mx-[10px]'>
//                             <div>
//                                 <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
//                             </div>
//                             <div className='text-center'>
//                                 <p className='py-1'>Chest Of Drawers</p>
//                                 <p className='py-2'>Cabinets and Sideboard</p>
//                                 <div className='py-1 max-w-full border-b border-gray-200'></div>
//                                 <p className='py-3'>Rs. 25000</p>
//                                 <div className='flex justify-center items-center gap-1 py-2'>
//                                     <div className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                             <FaHeart />
//                                         </Link>
//                                     </div>
//                                     <button className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={''}>
//                                             <p className='hover:text-[#C09578] cursor-pointer '>Add To Cart</p>
//                                         </Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='shadow-xl p-1 my-2 '>
//                         <div className='flex bg-white flex-col mx-[10px]'>
//                             <div>
//                                 <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
//                             </div>
//                             <div className='text-center'>
//                                 <p className='py-1'>Chest Of Drawers</p>
//                                 <p className='py-2'>Cabinets and Sideboard</p>
//                                 <div className='py-1 max-w-full border-b border-gray-200'></div>
//                                 <p className='py-3'>Rs. 25000</p>
//                                 <div className='flex justify-center items-center gap-1 py-2'>
//                                     <div className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                             <FaHeart />
//                                         </Link>
//                                     </div>
//                                     <button className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={''}>
//                                             <p className='hover:text-[#C09578] cursor-pointer '>Add To Cart</p>
//                                         </Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='shadow-xl p-1 my-2 '>
//                         <div className='flex bg-white flex-col mx-[10px] '>
//                             <div>
//                                 <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
//                             </div>
//                             <div className='text-center'>
//                                 <p className='py-1'>Chest Of Drawers</p>
//                                 <p className='py-2'>Cabinets and Sideboard</p>
//                                 <div className='py-1 max-w-full border-b border-gray-200'></div>
//                                 <p className='py-3'>Rs. 25000</p>
//                                 <div className='flex justify-center items-center gap-1 py-2'>
//                                     <div className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                             <FaHeart />
//                                         </Link>
//                                     </div>
//                                     <button className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={''}>
//                                             <p className='hover:text-[#C09578] cursor-pointer '>Add To Cart</p>
//                                         </Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='shadow-xl p-1 my-2 '>
//                         <div className='flex bg-white flex-col mx-[10px] '>
//                             <div>
//                                 <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
//                             </div>
//                             <div className='text-center'>
//                                 <p className='py-1'>Chest Of Drawers</p>
//                                 <p className='py-2'>Cabinets and Sideboard</p>
//                                 <div className='py-1 max-w-full border-b border-gray-200'></div>
//                                 <p className='py-3'>Rs. 25000</p>
//                                 <div className='flex justify-center items-center gap-1 py-2'>
//                                     <div className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                             <FaHeart />
//                                         </Link>
//                                     </div>
//                                     <button className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={''}>
//                                             <p className='hover:text-[#C09578] cursor-pointer '>Add To Cart</p>
//                                         </Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='shadow-xl p-1 my-2 '>
//                         <div className='flex bg-white flex-col mx-[10px] '>
//                             <div>
//                                 <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
//                             </div>
//                             <div className='text-center'>
//                                 <p className='py-1'>Chest Of Drawers</p>
//                                 <p className='py-2'>Cabinets and Sideboard</p>
//                                 <div className='py-1 max-w-full border-b border-gray-200'></div>
//                                 <p className='py-3'>Rs. 25000</p>
//                                 <div className='flex justify-center items-center gap-1 py-2'>
//                                     <div className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                             <FaHeart />
//                                         </Link>
//                                     </div>
//                                     <button className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={''}>
//                                             <p className='hover:text-[#C09578] cursor-pointer '>Add To Cart</p>
//                                         </Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='shadow-xl p-1 my-2 '>
//                         <div className='flex bg-white flex-col mx-[10px]'>
//                             <div>
//                                 <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
//                             </div>
//                             <div className='text-center'>
//                                 <p className='py-1'>Chest Of Drawers</p>
//                                 <p className='py-2'>Cabinets and Sideboard</p>
//                                 <div className='py-1 max-w-full border-b border-gray-200'></div>
//                                 <p className='py-3'>Rs. 25000</p>
//                                 <div className='flex justify-center items-center gap-1 py-2'>
//                                     <div className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                             <FaHeart />
//                                         </Link>
//                                     </div>
//                                     <button className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={''}>
//                                             <p className='hover:text-[#C09578] cursor-pointer '>Add To Cart</p>
//                                         </Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='shadow-xl  p-1 my-2 '>
//                         <div className='flex bg-white flex-col mx-[10px]'>
//                             <div>
//                                 <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
//                             </div>
//                             <div className='text-center'>
//                                 <p className='py-1'>Chest Of Drawers</p>
//                                 <p className='py-2'>Cabinets and Sideboard</p>
//                                 <div className='py-1 max-w-full border-b border-gray-200'></div>
//                                 <p className='py-3'>Rs. 25000</p>
//                                 <div className='flex justify-center items-center gap-1 py-2'>
//                                     <div className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                             <FaHeart />
//                                         </Link>
//                                     </div>
//                                     <button className='border hover:border-[#C09578] border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                                         <Link href={''}>
//                                             <p className='hover:text-[#C09578] cursor-pointer '>Add To Cart</p>
//                                         </Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </Slider>
//                 {/* Custom styles for dots */}
//                 <style jsx global>{`
//             .slick-dots {
//               display: flex !important;
//               justify-content: flex-end !important;
//               padding-right: 40px;
//               margin-top: 20px;
//             }
//           `}</style>
//             </div>
//         </>
//     )
// }





'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Link from 'next/link';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HomeBanner() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false ,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false, // Arrows disabled from inside slider
  };

  return (
    <div className='max-w-[1320px] mx-auto px-4 mt-10'>

      {/* Heading + Border + Chevrons */}
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-xl whitespace-nowrap'>Bestselling Products</h1>
        <div className='flex items-center gap-3 flex-1 ml-4 border-b border-gray-400'>
          {/* Empty space filled with border */}
        </div>
        {/* Chevron Arrows */}
        <div className="flex items-center gap-2 ml-4">
          <button onClick={() => sliderRef.current?.slickPrev()} className='text-xl text-gray-700 hover:text-black'>
            <FaChevronLeft />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()} className='text-xl text-gray-700 hover:text-black'>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className='px-2'>
              <div className='bg-white shadow p-3'>
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
                <div className='text-center mt-3'>
                  <p>Chest Of Drawers</p>
                  <p className='text-sm text-gray-600'>Cabinets and Sideboard</p>
                  <div className='my-2 border-b'></div>
                  <p>Rs. 25000</p>
                  <div className='flex justify-center gap-2 mt-2'>
                    <Link href="/wishlist" className='border px-2 py-1 rounded hover:border-[#C09578]'>
                      <FaHeart className='text-xl hover:text-[#C09578]' />
                    </Link>
                    <button className='border px-2 py-1 rounded hover:border-[#C09578]'>
                      <p className='hover:text-[#C09578]'>Add To Cart</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Dots CSS */}
        <style jsx global>{`
          .slick-dots {
            display: flex !important;
            justify-content: flex-end !important;
            padding-right: 40px;
            margin-top: 20px;
          }
        `}</style>
      </div>
    </div>
  );
}





// 'use client';
// import React from 'react';
// import Slider from 'react-slick';
// import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Link from 'next/link';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Simple custom buttons (no useRef)
// const PrevArrow = ({ onClick }) => (
//   <button onClick={onClick} className="text-gray-600 hover:text-[#C09578]">
//     <FaChevronLeft size={20} />
//   </button>
// );

// const NextArrow = ({ onClick }) => (
//   <button onClick={onClick} className="text-gray-600 hover:text-[#C09578]">
//     <FaChevronRight size={20} />
//   </button>
// );

// export default function HomeBanner() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto px-4 py-6">
      
//       {/* Heading + Border + Arrows */}
//       <div className="flex items-center gap-4 mb-6">
//         <h2 className="text-lg font-semibold whitespace-nowrap">Bestselling Products</h2>
//         <div className="flex-grow h-px bg-gray-400"></div>
//         <div className="flex items-center gap-2">{/* Arrows */}
//           <PrevArrow onClick={() => document.querySelector('.slick-prev')?.click()} />
//           <NextArrow onClick={() => document.querySelector('.slick-next')?.click()} />
//         </div>
//       </div>

//       {/* Slider */}
//       <Slider {...settings}>
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="p-2">
//             <div className="bg-white shadow p-3 text-center">
//               <img
//                 src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg"
//                 alt="product"
//                 className="w-full h-auto"
//               />
//               <p className="mt-2 font-medium">Chest Of Drawers</p>
//               <p className="text-sm text-gray-500">Cabinets and Sideboard</p>
//               <hr className="my-2" />
//               <p>Rs. 25000</p>
//               <div className="flex justify-center gap-2 mt-2">
//                 <Link href="/wishlist">
//                   <div className="border p-1 rounded hover:border-[#C09578]">
//                     <FaHeart className="text-[#888] hover:text-[#C09578]" />
//                   </div>
//                 </Link>
//                 <button className="border p-1 px-3 rounded hover:border-[#C09578]">
//                   <p className="hover:text-[#C09578]">Add To Cart</p>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
