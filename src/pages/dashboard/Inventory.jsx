import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

export default function Inventory() {
    return (
        <>
            {/* Main wrapper */}
            <div>
                {/* Total products and search section */}
                <div className="flex gap-20 mb-10">
                    {/* Total products */}
                    <div>
                        <p className="text-gray-757575 text-sm font-medium whitespace-nowrap">Total Products</p>
                        <h4 className="text-gray-757575 text-4xl font-semibold">5,000</h4>
                    </div>
                    {/* Search */}
                    <form class="flex items-center w-full">   
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 me-2 text-[#C9C6C6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="voice-search" class="bg-white border border-black-10-percent text-gray-757575 text-sm rounded-lg focus:outline-none focus-within:ring-4 focus:ring-blue-300 block w-full ps-10 p-2.5  dark:bg-white dark:border-black-10-percent dark:placeholder-[#C9C6C6] dark:text-gray-757575" placeholder="Search by Product" required />
                            <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                                <svg class="w-4.5 h-4.5 text-[#C9C6C6] dark:text-[#C9C6C6] hover:text-dark-text-primary dark:hover:text-dark-text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                    <path d="M4 8V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V8M4 8H20M4 8L9.28632 14.728C9.42475 14.9042 9.5 15.1218 9.5 15.3459V18.4612C9.5 19.1849 10.2449 19.669 10.9061 19.375L13.4061 18.2639C13.7673 18.1034 14 17.7453 14 17.3501V15.3699C14 15.1312 14.0854 14.9004 14.2407 14.7191L20 8" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                {/* Products table */}
                <div class="relative overflow-x-auto border border-black-10-percent mb-10">
                    <table class="w-full text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a border-collapse">
                        <caption className="hidden text-left text-black text-xl font-medium p-6"></caption>
                        <thead class="text-sm text-white bg-dark-text-primary border-b border-black-10-percent dark:text-blue-001b2a">
                            <tr>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">S/N</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Product Name</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Quantity Stocked</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Quantity Sold</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Expiring Date</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Total Cost Price</th>
                                <th scope="col" class="px-2.5 py-3">Total Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white hover:bg-black-10-percent">
                                <td class="px-2.5 py-2 border-r border-black-10-percent">01</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">Paracetamol</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">5,000</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">12,000</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">15/10/2025</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">NGN100,000</td>
                                <td class="px-2.5 py-2">
                                    <div class="flex items-center">
                                        <p>NGN1,000,000</p>
                                        <button className="ml-10 mr-6 bg-blue-primary hover:bg-blue-0e90da px-4.5 py-1 rounded">Modify</button>
                                        <div className="bg-[#CA00001F] p-2 rounded-full">
                                            <RiDeleteBin6Line className="size-4 text-red-ca0000" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-black-10-percent">
                                <td class="px-2.5 py-2 border-r border-black-10-percent">01</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">Paracetamol</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">5,000</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">12,000</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">15/10/2025</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">NGN100,000</td>
                                <td class="px-2.5 py-2">
                                    <div class="flex items-center">
                                        <p>NGN1,000,000</p>
                                        <button className="ml-10 mr-6 bg-blue-primary hover:bg-blue-0e90da px-4.5 py-1 rounded">Modify</button>
                                        <div className="bg-[#CA00001F] p-2 rounded-full">
                                            <RiDeleteBin6Line className="size-4 text-red-ca0000" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-black-10-percent">
                                <td class="px-2.5 py-2 border-r border-black-10-percent">01</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">Paracetamol</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">5,000</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">12,000</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">15/10/2025</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">NGN100,000</td>
                                <td class="px-2.5 py-2">
                                    <div class="flex items-center">
                                        <p>NGN1,000,000</p>
                                        <button className="ml-10 mr-6 bg-blue-primary hover:bg-blue-0e90da px-4.5 py-1 rounded">Modify</button>
                                        <div className="bg-[#CA00001F] p-2 rounded-full">
                                            <RiDeleteBin6Line className="size-4 text-red-ca0000" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Edit product modal */}
                <div className="bg-[#F8FDFF] p-8 max-w-[648px] mx-auto">
                    {/* Title */}
                    <a href="" className="flex items-center gap-2 text-blue-001b2a hover:text-blue-0e90da">
                        <IoIosArrowBack className="size-5" />
                        <span className="text-xl font-semibold">Edit Product</span>
                    </a>

                    {/* Product name */}
                    <div className="sm:col-span-3 mt-7.5">
                        <label htmlFor="product-name" className="block text-sm/6 font-normal text-gray-757575">
                            Product name
                        </label>
                        <div className="mt-2">
                            <input
                                id="product-name"
                                name="product-name"
                                type="text"
                                className="bg-white border border-black-10-percent text-blue-001b2a text-sm rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-3 dark:bg-white dark:border-black-10-percent dark:text-blue-001b2a"
                            />
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-between mt-10">
                        <button
                            className="max-6-[168px] text-white text-base bg-blue-29a8f1 hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-[10px] px-11 py-2.5"
                        >
                            Save
                        </button>
                        <button
                            className="max-6-[168px] text-red-ca0000 text-base bg-red-ca00001f hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-[10px] px-11 py-2.5"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}