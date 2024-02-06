import  { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "@react-icons/all-files/io/IoIosSearch";
import { RxHamburgerMenu } from "react-icons/rx";

import Image from '../images/outfitted.svg';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-20">
          <img src={Image} alt="Logo" className="h-8 w-auto" />
          <nav className="hidden md:flex space-x-10">
            <a href="#men" className="text-gray-700">Men</a>
            <a href="#women" className="text-gray-700">Women</a>
            <a href="#kids" className="text-gray-700">Kids</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <IoIosSearch />
            </span>
          </div>
          <button className="hidden md:flex items-center space-x-2">
            <BsCart2 size={20} />
            <span className="text-gray-700">Cart</span>
          </button>
          <button className="flex items-center space-x-2">
          <FaRegCircleUser size={20} />
            <span className="text-gray-700">Profile</span>
          </button>
          <button onClick={toggleMobileMenu} className="md:hidden">
            <RxHamburgerMenu size={20} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mt-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 px-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="py-2 px-4">
            <a href="#men" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Men</a>
            <a href="#women" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Women</a>
            <a href="#kids" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Kids</a>
          </div>
          <div className="py-2 px-4">
            <a href="#profile" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Profile</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
