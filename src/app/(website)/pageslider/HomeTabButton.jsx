
'use client';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

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


const featured = [
    {
        title: 'nest of tables',
        description: 'Caroline Study Tables',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg',
        price: '$2,500',
    },
    {
        title: 'coffe tables',
        escription: 'Evan Coffee Table',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg',
        price: '$2,300',
    },
    {
        title: 'shoe racks',
        escription: 'Gloria Shoe Racks',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg',
        price: '$2,900',
    },
    {
        title: 'bookshelves',
        escription: 'Erica Bookshelfs',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg',
        price: '$30,000',
    },
    {
        title: 'wooden sofa cum bed',
        escription: 'Sapien Sofa Cum Bed',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg',
        price: '$54,000',
    },
    {
        title: '2 seater sofa',
        escription: 'Ganthur Sheesham Wood Sofa Set',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615225341228Ganthur%20Sheesham%20Wood%20Sofa%20Set___.jpg',
        price: '$7,600',
    },
    {
        title: 'wooden jhula',
        escription: 'Calina Swing Jhula',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg',
        price: '$58,000',
    },
]

const newarrivals = [
    {
        title: 'nest of tables',
        description: 'Caroline Study Tables',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg',
        price: '$2,500',
    },
    {
        title: 'coffe tables',
        escription: 'Evan Coffee Table',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg',
        price: '$2,300',
    },
    {
        title: 'shoe racks',
        escription: 'Gloria Shoe Racks',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg',
        price: '$2,900',
    },
    {
        title: 'bookshelves',
        escription: 'Erica Bookshelfs',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg',
        price: '$30,000',
    },
    {
        title: 'wooden sofa cum bed',
        escription: 'Sapien Sofa Cum Bed',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617989633213Winona%20Mirror__.jpg',
        price: '$54,000',
    },
    {
        title: '2 seater sofa',
        escription: 'Ganthur Sheesham Wood Sofa Set',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg',
        price: '$7,600',
    },
    {
        title: 'wooden jhula',
        escription: 'Calina Swing Jhula',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663996596738Group%201.jpg',
        price: '$58,000',
    },
]
const onsale = [
    {
        title: 'nest of tables',
        description: 'Caroline Study Tables',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828789760Rex%20Console%20Table__.jpg',
        price: '$2,500',
    },
    {
        title: 'coffe tables',
        escription: 'Evan Coffee Table',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg',
        price: '$2,300',
    },
    {
        title: 'shoe racks',
        escription: 'Gloria Shoe Racks',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg',
        price: '$2,900',
    },
    {
        title: 'bookshelves',
        escription: 'Erica Bookshelfs',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1619988418966Leo%20TV%20Cabinets.jpg',
        price: '$30,000',
    },
    {
        title: 'wooden sofa cum bed',
        escription: 'Sapien Sofa Cum Bed',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1661762520951Group%201.jpg',
        price: '$54,000',
    },
    {
        title: '2 seater sofa',
        escription: 'Ganthur Sheesham Wood Sofa Set',
        image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1661502549484Group%201.jpg',
        price: '$7,600',
    },
    {
        title: '2 seater sofa',
        escription: 'Ganthur Sheesham Wood Sofa Set',
        image: '',
        price: '$7,600',
    },

]

export default function TabsComponent() {
    const [activeTab, setActiveTab] = useState('tab1');
    

    return (
        <>
            <div className="w-full max-w-md mx-auto mt-10">
                <div className="flex border-b border-gray-300 ">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 border border-[#ccc] cursor-pointer hover:text-[#C09578] py-2 px-4 text-center ${activeTab === tab.id
                                ?
                                ' hover:border-[#C09578] text-xl  text-[#C09578]'
                                :
                                'text-gray-900 text-xl'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Simplified Content */}
            </div>

            {/* <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-6 mt-7">
                {featured.map((item, index) => (
                    <ContentFeatured key={index} item={item} />
                ))}
            </div>
            <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-6 mt-7">
                {newarrivals.map((item, index) => (
                    <ContentArrivals key={index} item={item} />
                ))}
            </div>
            <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-6 mt-7">
                {onsale.map((item, index) => (
                    <ContentOnsale key={index} item={item} />
                ))}
            </div> */}

            <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-6 mt-7">
                {activeTab === 'tab1' &&
                    featured.map((item, index) => <ContentCard key={index} item={item} />)}
                {activeTab === 'tab2' &&
                    newarrivals.map((item, index) => <ContentCard key={index} item={item} />)}
                {activeTab === 'tab3' &&
                    onsale.map((item, index) => <ContentCard key={index} item={item} />)}
            </div>

        </>
    );
}

function ContentCard({ item }) {
    const { title, image, price, description, escription } = item;
  
    return (
      <div className='shadow-2xl flex flex-col '>
        <div>
          <img src={image} alt={title} />
        </div>
        <div className='text-center'>
          <p className='py-1'>{title}</p>
          <p className='py-2'>{description || escription}</p>
          <div className='py-1 max-w-full border-b border-gray-200'></div>
          <p className='py-3'>{price}</p>
          <div className='flex justify-center items-center gap-1 py-2'>
            <div className='border border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
              <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
                <FaHeart />
              </Link>
            </div>
            <button className='border border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
              <Link href={''}>
                <p>Add To Cart</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }


// function ContentFeatured({ item }) {
//     console.log(item); // ✅ Yeh ab object show karega: {title: ..., image: ..., etc.}

//     const { title, image, price, description, escription } = item;
//     return (
//         <>
//             <div className='shadow-2xl flex flex-col'>
//                 <div>
//                     <img src={image} alt={title} />
//                 </div>
//                 <div className='text-center'>
//                     <p className='py-1'>{title}</p>
//                     <p className='py-2'>{description || escription}</p>
//                     <div className='py-1 max-w-full border-b border-gray-200'></div>
//                     <p className='py-3'>{price}</p>
//                     <div className='flex justify-center items-center gap-1 py-2'>
//                         <div className='border border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                             <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                 <FaHeart />
//                             </Link>
//                         </div>
//                         <button className='border border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                             <Link href={''}>
//                                 <p>Add To Cart</p>
//                             </Link>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }


// function ContentArrivals({ item }) {
//     console.log(item); // ✅ Yeh ab object show karega: {title: ..., image: ..., etc.}

//     const { title, image, price, description, escription } = item;
//     return (
//         <>
//             <div className='shadow-2xl flex flex-col'>
//                 <div>
//                     <img src={image} alt={title} />
//                 </div>
//                 <div className='text-center'>
//                     <p className='py-1'>{title}</p>
//                     <p className='py-2'>{description || escription}</p>
//                     <div className='py-1 max-w-full border-b border-gray-200'></div>
//                     <p className='py-3'>{price}</p>
//                     <div className='flex justify-center items-center gap-1 py-2'>
//                         <div className='border border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                             <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                 <FaHeart />
//                             </Link>
//                         </div>
//                         <button className='border border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                             <Link href={''}>
//                                 <p>Add To Cart</p>
//                             </Link>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }


// function ContentOnsale({ item }) {
//     console.log(item); // ✅ Yeh ab object show karega: {title: ..., image: ..., etc.}

//     const { title, image, price, description, escription } = item;
//     return (
//         <>
//             <div className='shadow-2xl flex flex-col'>
//                 <div>
//                     <img src={image} alt={title} />
//                 </div>
//                 <div className='text-center'>
//                     <p className='py-1'>{title}</p>
//                     <p className='py-2'>{description || escription}</p>
//                     <div className='py-1 max-w-full border-b border-gray-200'></div>
//                     <p className='py-3'>{price}</p>
//                     <div className='flex justify-center items-center gap-1 py-2'>
//                         <div className='border border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                             <Link href={'/wishlist'} className='hover:text-[#C09578] text-2xl'>
//                                 <FaHeart />
//                             </Link>
//                         </div>
//                         <button className='border border-gray-400 px-2 py-1 flex justify-center items-center rounded mb-2'>
//                             <Link href={''}>
//                                 <p>Add To Cart</p>
//                             </Link>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }
