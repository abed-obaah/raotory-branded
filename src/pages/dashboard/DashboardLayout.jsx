import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import RaotoryLogoAndNameBlue from "../../assets/raotory-logo-name-blue.svg";
import InputOrder from "./InputOrder";
import Inventory from "./Inventory";

const navigation = [
  { name: "Overview", href: "#", icon: HomeIcon, current: true },
  { name: "Input Order", href: "#", icon: UsersIcon, current: false },
  { name: "Create Customers", href: "#", icon: FolderIcon, current: false },
  { name: "Products", href: "#", icon: CalendarIcon, current: false },
  { name: "Invoice", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Settings", href: "#", icon: ChartPieIcon, current: false },
  { name: "Help Center", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const components = {
  "Overview": () => <div>Overview Content</div>,
  "Input Order": () => <InputOrder />,
  "Create Customers": () => <div>Create Customers Content</div>,
  "Stock Products": () => <div>Stock Products Content</div>,
  "Returned Products": () => <div>Returned Products Content</div>,
  "Inventory": () => <Inventory />,
  "Invoice": () => <div>Invoice Content</div>,
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
            {/* Dialog for mobile removed from here */}

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
                                    { name: "Overview", icon: HomeIcon },
                                    { name: "Input Order", icon: UsersIcon },
                                    { name: "Create Customers", icon: FolderIcon },
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
                                        <CalendarIcon className="size-6" /> Products
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

                                    {[{ name: "Invoice", icon: DocumentDuplicateIcon }, { name: "Settings", icon: ChartPieIcon }].map(({ name, icon: Icon }) => (
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
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 hover:bg-blue-29a8f1 hover:text-white"
                                >
                                    <Cog6ToothIcon
                                    aria-hidden="true"
                                    className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                    />
                                    Dark Mode
                                </a>
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-757575 hover:bg-blue-29a8f1 hover:text-white"
                                >
                                    <Cog6ToothIcon
                                    aria-hidden="true"
                                    className="size-6 shrink-0 text-gray-757575 group-hover:text-white"
                                    />
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Dashboard main section */}
            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">

                    {/* Hamburger button (for mobile) removed from here */}
                    {/* Separator (for mobile) removed from here*/}
                    
                    {/* Dashboard notification bar */}
                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        
                        {/* Search */}
                        <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                            <input
                            name="search"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                            />
                            <MagnifyingGlassIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                            />
                        </form>

                        {/* Notification icon and profile dropdown */}
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            
                            {/* Notification icon */}
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="size-6" />
                            </button>

                            {/* Separator */}
                            <div
                                aria-hidden="true"
                                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                            />

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <MenuButton className="-m-1.5 flex items-center p-1.5">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="size-8 rounded-full bg-gray-50"
                                    />
                                    <span className="hidden lg:flex lg:items-center">
                                        <span
                                            aria-hidden="true"
                                            className="ml-4 text-sm/6 font-semibold text-gray-900"
                                        >
                                            Tom Cook
                                        </span>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="ml-2 size-5 text-gray-400"
                                        />
                                    </span>
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                                            >
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
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