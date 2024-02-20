import { useState } from "react";
import { IoBag } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";
import { SlLogin } from "react-icons/sl";
import { Popover } from "@headlessui/react";
import { Login, Register } from "./LoginRegister";

const solutions = [
  {
    name: "Register",
    description: "Register as a new user or create an account",
    href: "#",
    icon: SlLogin,
    modalvalue: 'register',
  },
  {
    name: "Login",
    description: "Login to your existing account",
    href: "#",
    target:"authentication-modal",
    icon: FaKey,
    modalvalue: 'login',
  },
  {
    name: "Wishlist",
    description: "View items in your wishlist",
    href: "#",
    icon: IoBag,
  },
];

function Flyout() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (val) => {
    setShowModal(val);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  return (
    <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-3/4 px-4">
      <div className="w-80 max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {solutions.map((item) => (
            <div
              key={item.name}
              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50" 
            >
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div >
                <a href={item.href} onClick={() => handleOpenModal(item.modalvalue)} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
          {showModal == 'login' && <Login onClose={handleCloseModal} />}
          {showModal == 'register' && <Register onClose={handleCloseModal} />}
      </div>
    </Popover.Panel>
  );
}

export default Flyout;
