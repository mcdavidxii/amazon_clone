import React from 'react'
import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
    {/* Top Nav */}
    <div className='flex items-center bg-amazon_blue flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow-0'>
            <Image 
                src='https://links.papareact.com/f90'
                width= {150}
                height = {40}
                objectFit = "contain"
                className='cursor-pointer'
            />
        </div>
        {/* Search Bar */}
        <div className='hidden sm:flex items-center rounded-md h-10 bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer '>
            <input type='text' className='p-2 h-full w-6 flex-grow flex-shrink rounded-md focus:outline-none' />
            <SearchIcon className='h-12 p-4' />
        </div>
        {/* Right Contain */}
        <div className='text-white flex iterms-center text-xs space-x-6 mx-6 whitespace-nowrap'>
            <div>
                <p>Hello McDavid</p>
                <p>Account & Lists</p>
            </div>
            <div>
                <p>Returns</p>
                <p>& Orders</p>
            </div>
            <div>
                <ShoppingCartIcon className='h-10'/>
                <p>Basket</p>

            </div>
        </div>
    </div>
    {/* Bottom Nav */}
    </header>
  )
}

export default Header