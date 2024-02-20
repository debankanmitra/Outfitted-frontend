import { IoBag } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";
import { SlLogin } from "react-icons/sl";
import { Popover } from "@headlessui/react";
import { Login } from "./LoginRegister";

const solutions = [
  {
    name: "Register",
    description: "Register as a new user or create an account",
    href: "#",
    icon: SlLogin,
  },
  {
    name: "Login",
    description: "Login to your existing account",
    href: "#",
    target:"authentication-modal",
    icon: FaKey,
  },
  {
    name: "Wishlist",
    description: "View items in your wishlist",
    href: "#",
    icon: IoBag,
  },
  // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];
//   const callsToAction = [
//     { name: 'Watch Demo', href: '#', icon: PlayCircleIcon },
//     { name: 'Contact Sales', href: '#', icon: PhoneIcon },
//   ]
function Flyout() {
  return (
    <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-3/4 px-4">
      <div className="w-80 max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {solutions.map((item) => (
            <div
              key={item.name}
              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50" data-modal-target={item.target}
            >
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div>
                <a href={item.href} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Login id="authentication-modal"/>
        {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
      {callsToAction.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
        >
          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          {item.name}
        </a>
      ))}
    </div> */}
      </div>
    </Popover.Panel>
  );
}

export default Flyout;
