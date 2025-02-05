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

const components = {
  "Overview": () => <div>Overview Content</div>,
  "Input Order": () => <InputOrder />,
  "Create Customers": () => <div>Create Customers Content</div>,
  "Stock Products": () => <div>Stock Products Content</div>,
  "Returned Products": () => <div>Returned Products Content</div>,
  "Inventory": () => <div>Inventory Content</div>,
  "Invoice": () => <div>Invoice Content</div>,
  "Settings": () => <div>Settings Content</div>,
  "Help Center": () => <div>Help Center Content</div>,
};

export default function DashboardLayout() {
  const [selectedComponent, setSelectedComponent] = useState("Overview");
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <>
        <div>
        {/* Sidebar */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-white border-r border-black-10-percent px-6 pb-4">
                <div className="flex h-16 items-center">
                <a href="/">
                    <img src={RaotoryLogoAndNameBlue} alt="Raotory logo" className="h-5" />
                </a>
                </div>

                {/* Sidebar menu */}
                <nav className="flex flex-1 flex-col">
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
                </nav>
            </div>

            {/* Main Content */}
            <div className="lg:pl-72 py-10 px-4 sm:px-6 lg:px-8">
                <div id="main-content-area">
                {components[selectedComponent] ? components[selectedComponent]() : <div>Not Found</div>}
                </div>
            </div>
        </div>
    </>
  );
}