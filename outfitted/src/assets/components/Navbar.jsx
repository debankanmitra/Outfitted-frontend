import { useState, Fragment } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "@react-icons/all-files/io/IoIosSearch";
import { RxHamburgerMenu } from "react-icons/rx";
import { Popover, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

import Image from "../images/outfitted.svg";
import Flyout from "./Flyout";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = () => {
    navigate("/cart/id");
  };
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-20">
          <img src={Image} alt="Logo" className="h-8 w-auto" />
          <nav className="hidden md:flex space-x-10">
            <a href="#men" className="text-gray-700">
              Men
            </a>
            <a href="#women" className="text-gray-700">
              Women
            </a>
            <a href="#kids" className="text-gray-700">
              Kids
            </a>
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
          <button className="hidden md:flex items-center space-x-2" onClick={handleClick}>
            <BsCart2 size={20} />
            <span className="text-gray-700">Cart</span>
          </button>
          <Popover className="relative hidden md:flex">
            <Popover.Button className="flex items-center space-x-2 focus:outline-none">
              <FaRegCircleUser size={20} />
              <span className="text-gray-700">Profile</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-3/4 px-4">
                <Flyout />
              </Popover.Panel>
            </Transition>
          </Popover>
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
            <a
              href="#men"
              className="block text-gray-700 hover:bg-gray-100 p-2 rounded"
            >
              Men
            </a>
            <a
              href="#women"
              className="block text-gray-700 hover:bg-gray-100 p-2 rounded"
            >
              Women
            </a>
            <a
              href="#kids"
              className="block text-gray-700 hover:bg-gray-100 p-2 rounded"
            >
              Kids
            </a>
          </div>
          <div className="py-2 px-4">
            <a
              href="#profile"
              className="block text-gray-700 hover:bg-gray-100 p-2 rounded"
            >
              Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
