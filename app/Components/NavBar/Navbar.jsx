"use client";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import BookAppointmentButton from "../BookAppointmentButton/BookAppointmentButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 h-24 z-50 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
          <Link href="/" legacyBehavior>
              <div>
                {/* Small screen logo */}
                <Image 
                  src='/BarciasNewLogoSmallScreen.png' 
                  width={100} 
                  height={30} 
                  alt="logo" 
                  className="block sm:hidden"
                />
                {/* Large screen logo */}
                <Image 
                  src='/BarciasNewLogo.png' 
                  width={150} 
                  height={50} 
                  alt="logo" 
                  className="hidden sm:block"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#services" legacyBehavior>
                <a className="text-gray-700 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </a>
              </Link>
              <Link href="#pricing" legacyBehavior>
                <a className="text-gray-700 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-700 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-700 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </Link>
              {/* <Link href="/contact" type='phone' legacyBehavior>
                <a className="text-gray-700 hover:text-zinc-500 px-3 py-2 rounded-md text-sm font-medium">
                  CALL: 708-314-0477
                </a>
              </Link> */}

              <BookAppointmentButton />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white pb-4" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#services" legacyBehavior>
              <a className="text-red-500 hover:bg-red-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
            </Link>
            <Link href="#pricing" legacyBehavior>
              <a className="text-red-500 hover:bg-red-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-red-500 hover:bg-red-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-red-500 hover:bg-red-500 hover:text-white block px-3 py-2 pb-5 rounded-md text-base font-medium">
                Contact
              </a>
            </Link>

            <BookAppointmentButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
