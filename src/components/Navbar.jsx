import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import RaotoryLogoAndNameBlue from '../assets/raotory-logo-name-blue.svg';
import ButtonRoundedSolid from './ButtonRoundedSolid';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-e4e4e4 rounded-[50px] max-w-6xl mx-auto">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between px-8 py-4">

        {/* Company logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Raotory logo"
              src={RaotoryLogoAndNameBlue}
              className="h-5 w-auto md:h-8"
            />
          </a>
        </div>
        
        {/* Mobile menu bars (open) icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop menu items */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* Home menu */}
          <a href="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </a>
          {/* About us menu */}
          <a href="/about" className="text-sm/6 font-semibold text-gray-900">
            About Us
          </a>
          {/* Contact us menu */}
          <a href="/contact" className="text-sm/6 font-semibold text-gray-900">
            Contact Us
          </a>
        </PopoverGroup>

        {/* Get started button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonRoundedSolid text="Get Started" href="/account/register" />
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Raotory logo"
                src={RaotoryLogoAndNameBlue}
                className="h-6 w-auto"
              />
            </a>

            {/* Mobile menu x (close) button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Mobile menu */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Home menu */}
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                {/* About us menu */}
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                {/* Contact us menu */}
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                {/* Get started menu */}
                <a
                  href="/account/register"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
