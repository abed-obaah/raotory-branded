import { useState } from "react";

import {
  Bars3Icon,
  HomeIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgList } from "react-icons/cg";
import { PiScroll } from "react-icons/pi";
import { TbHistory } from "react-icons/tb";
import { LuCircleUserRound } from "react-icons/lu";
import { TbHelpSquareRounded } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { HiLogout } from "react-icons/hi";

import RaotoryLogoAndNameBlue from "../../assets/raotory-logo-name-blue.svg";
import InputOrder from "./InputOrder";
import Inventory from "./Inventory";
import Overview from "./Overview";
import OnboardingFlow from "./onboarding/OnboardingFlow";
import StockProduct from "./StockProduct";

const pages = [
    { name: 'Location', href: '#', current: false },
    { name: 'Sub Location', href: '#', current: true },
]

const components = {
  "Onboarding": () => <OnboardingFlow />,
  "Overview": () => <Overview />,
  "Input Order": () => <InputOrder />,
  "Stock Products": () => <div><StockProduct /></div>,
  "Returned Products": () => <div>Returned Products Content</div>,
  "Inventory": () => <Inventory />,
  "Invoice": () => <div>Invoice Content</div>,
  "Sales History": () => <div>Sales History content</div>,
  "Create Customer": () => <div>Create Customer Content</div>,
  "Settings": () => <div>Settings Content</div>,
  "Help Center": () => <div>Help Center Content</div>,
};

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Overview");
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <>
        <div>
            {/* Dialog (for mobile) - REMOVED */}

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r border-black-10-percent">
                    
                    {/* Company logo */}
                    <div className="flex h-16 shrink-0 items-center">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Raotory</span>
                            <img
                            alt="Raotory logo"
                            src={RaotoryLogoAndNameBlue}
                            className="h-5 w-auto"
                            />
                        </a>
                    </div>
                   
                    {/* Sidebar menu */}
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            
                            {/* Top sidebar menu items */}
                            <li className="flex flex-1 flex-col">
                                <ul className="space-y-1">
                                    {[
                                    { name: "Onboarding", icon: HomeIcon },
                                    { name: "Overview", icon: BiSolidDashboard },
                                    { name: "Input Order", icon: HiOutlineShoppingCart },

                                    ].map(({ name, icon: Icon }) => (
                                    <li key={name}>
                                        <button
                                        onClick={() => setSelectedComponent(name)}
                                        className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
                                            selectedComponent === name
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                        }`}
                                        >
                                        <Icon className="size-6" /> {name}
                                        </button>
                                    </li>
                                    ))}

                                    {/* Products Submenu */}
                                    <li>
                                        <button
                                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                                            className="flex items-center justify-between w-full p-2 text-sm font-semibold rounded-md text-left text-gray-700 hover:bg-blue-500 hover:text-white"
                                        >
                                            <span className="flex items-center gap-x-3">
                                            <CgList className="size-6" /> Products
                                            </span>
                                            <ChevronDownIcon className={`size-5 transition-transform ${isProductsOpen ? "rotate-180" : "rotate-0"}`} />
                                        </button>
                                        {isProductsOpen && (
                                            <ul className="ml-4 mt-1 space-y-1">
                                            {["Stock Products", "Returned Products", "Inventory"].map((subItem) => (
                                                <li key={subItem}>
                                                <button
                                                    onClick={() => setSelectedComponent(subItem)}
                                                    className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
                                                    selectedComponent === subItem
                                                        ? "bg-blue-500 text-white"
                                                        : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                                    }`}
                                                >
                                                    {subItem}
                                                </button>
                                                </li>
                                            ))}
                                            </ul>
                                        )}
                                    </li>

                                    {[{ name: "Invoice", icon: PiScroll },
                                        { name: "Sales History", icon: TbHistory },
                                        { name: "Create Customer", icon: LuCircleUserRound },
                                        { name: "Settings", icon: Cog6ToothIcon },
                                        { name: "Help Center", icon: TbHelpSquareRounded }].map(({ name, icon: Icon }) => (
                                        <li key={name}>
                                            <button
                                            onClick={() => setSelectedComponent(name)}
                                            className={`flex items-center gap-x-3 p-2 text-sm font-semibold rounded-md w-full text-left ${
                                                selectedComponent === name
                                                ? "bg-blue-500 text-white"
                                                : "text-gray-700 hover:bg-blue-500 hover:text-white"
                                            }`}
                                            >
                                            <Icon className="size-6" /> {name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* Middle sidebar menu items removed from here */}

                            {/* Bottom sidebar menu items */}
                            <li className="mt-auto">
                                <ul className="">
                                    <li className="px-2">
                                        <a
                                            href="#"
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 hover:bg-blue-29a8f1 hover:text-white"
                                        >
                                            <MdDarkMode
                                                aria-hidden="true"
                                                className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                            />
                                            Dark Mode
                                        </a>
                                    </li>
                                    <li className="px-2">
                                        <a
                                            href="#"
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 hover:bg-blue-29a8f1 hover:text-white"
                                        >
                                            <HiLogout
                                                aria-hidden="true"
                                                className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                            />
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Dashboard main section */}
            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">

                    {/* Hamburger button (for mobile) */}
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Separator (for mobile) */}
                    <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

                    {/* Dashboard notification bar */}
                    <div className="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
                        
                        {/* Search removed from here, replaced with breadcrumb */}

                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="flex flex-1">
                            <ol role="list" className="flex items-center space-x-4">
                                {pages.map((page, index) => (
                                    <li key={page.name} className="flex items-center">
                                        {index > 0 && (
                                        <ChevronRightIcon
                                            aria-hidden="true"
                                            className="size-5 shrink-0 text-gray-400"
                                        />
                                        )}
                                        <a
                                            href={page.href}
                                            aria-current={page.current ? 'page' : undefined}
                                            className={`text-sm font-medium text-gray-500 hover:text-gray-700 ${
                                                index > 0 ? 'ml-4' : ''
                                            }`}
                                            >
                                            {page.name}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        {/* Notification icon and profile dropdown - REMOVED */}

                    </div>
                </div>
                
                {/* Main content area */}
                <main className="p-8">
                    <div id="main-content-area">
                        {components[selectedComponent] ? components[selectedComponent]() : <div>Not Found</div>}
                    </div>
                </main>
            </div>
        </div>
    </>
  );
}