import React from 'react'
import { CiSearch } from "react-icons/ci"
import { FaUser } from "react-icons/fa"
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const Categories = () => {
    return (
        <div >
            <div className='bg-[#EFF4F7] pt-1.5'>
                <h6 className='text-xs text-center'>Experience the sound of freedom Nirvana ION ANC's new skin! Grab now.</h6>
                <div className='w-full flex items-center py-1 mt-0 shadow-md bg-white justify-evenly max-w-xl:hidden'>
                    <h2 className='text-black my-1.5 mr-4 self-start'>bo<span className='text-red-600'>A</span>t</h2>
                    <div className='text-slate-600 flex gap-5 pt-3 w-fit'>
                        <p>Categories</p>
                        <p>boAt Personalisation</p>
                        <p>Gift with boAt</p>
                        <p>Corporate Orders</p>
                        <p>More</p>
                    </div>
                    <div className='flex items-center bg-slate-200 p-1 px-4 rounded-2xl '>
                        <CiSearch className='text-gray-500' />
                        <input type="search" name="" id="" className='h-7 w-[170px] text-gray-500 bg-transparent px-1 outline-none placeholder:text-gray-500 text-xs' placeholder='Search "SmartWatches"' />
                    </div>
                    <div className='flex gap-4'> <FaUser className='text-gray-600 text-lg' />
                        <HiOutlineShoppingBag className='text-gray-600 text-lg' />

                    </div>
                </div>


            </div>
        </div >
    )
}
