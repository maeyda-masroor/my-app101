"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/images/logo.png';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <Link href={'/'}><Image src={Logo} alt='c' width={100} height={100}/></Link>
        </div>

        {/* Desktop Menu (visible only on large screens) */}
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-white hover:text-gray-400">
            <button className='w-32 h-12 border-2 border-red-500 text-white'>Create Post</button>
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            <div className="relative inline-block">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
              3
            </span>
          </div>
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
          <div className="relative inline-block">
          <Image 
          src="https://via.placeholder.com/150" 
          alt="User Avatar" 
          className="w-12 h-12 rounded-full border-2 border-gray-200"
          width={50} height={50}
          />
         <div 
          className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
          +
        </div>
        </div>
        </Link>
        </div>

        {/* Mobile Menu Toggle Button (visible only on small screens) */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (hidden by default, shown when toggled) */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 text-white space-y-4 p-4`}>
      <Link href="#" className="text-white hover:text-gray-400">
            <button className='w-32 h-12 border-2 border-red-500 text-white'>Create Post</button>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
