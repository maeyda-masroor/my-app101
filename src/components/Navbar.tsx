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
    <nav className="bg-white text-black">
  <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div className="flex items-center justify-center lg:justify-start">
      <a href="#" className="text-xl font-bold">Brand</a>
    </div>
    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-end space-y-2 lg:space-y-0 lg:space-x-4">
      <a href="#" className="hover:text-gray-300">Home</a>
      <a href="#" className="hover:text-gray-300">About</a>
      <a href="#" className="hover:text-gray-300">Services</a>
      <a href="#" className="hover:text-gray-300">Contact</a>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
