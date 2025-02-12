import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { IoMdMore } from "react-icons/io";

    export default function StockProducts() {
        const [selectedDate, setSelectedDate] = useState(null);

        return (
            <>
                {/* Stock products - main */}
                <div className="flex gap-x-5">
                    {/* Left section */}
                    <div className="w-[65%]">
                        <form action="#" method="" className="space-y-6">
                            {/* Product name */}
                            <div>
                                <input
                                    type="text"
                                    name=""
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                    placeholder="Product name"
                                />
                            </div>
                            {/* Quantity */}
                            <div>
                                <input
                                    type="number"
                                    name=""
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                    placeholder="Quantity"
                                />
                            </div>
                            {/* Purchase price */}
                            <div>
                                <input
                                    type="text"
                                    name=""
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                    placeholder="Purchase price per item"
                                />
                            </div>
                            {/* Retail price / Wholesale price */}
                            <div className="flex gap-5">
                                {/* Retail price */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        name=""
                                        className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                        placeholder="Retail price"
                                    />
                                </div>
                                {/* Wholesale price */}
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        name=""
                                        className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                        placeholder="Wholesale price"
                                    />
                                </div>
                            </div>
                            {/* Batch number */}
                            <div>
                                <input
                                    type="text"
                                    name=""
                                    className="bg-white border border-black-10-percent text-blue-001b2a text-base rounded-[10px] focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-4"
                                    placeholder="Batch number"
                                />
                            </div>
                            {/* Expiration date */}
                            <div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 block w-full p-2.5"
                                    wrapperClassName="w-full" // Ensures the wrapper takes full width
                                    placeholderText="Expiration date"
                                />
                            </div>

                            {/* Button */}
                            <button className="bg-gray-e5e5e5 hover:bg-gray-e5e5e5 text-dark-primary px-11 py-1.5 rounded w-full">
                                Add Product
                            </button>
                        </form>
                    </div>
                    {/* Right section */}
                    <div className="w-[35%]">
                        <div class="relative overflow-x-auto sm:rounded-[20px] border border-black-10-percent">
                            <table class="w-full text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a">
                                <caption>
                                    <div className="text-left p-4">
                                        <h3 className="font-bold">Selected Products</h3>
                                        <p>Selected products displays here</p>
                                    </div>
                                </caption>
                                <thead class="hidden text-sm text-blue-001b2a bg-black-10-percent border-b border-black-10-percent dark:text-blue-001b2a">
                                    <tr>
                                        <th scope="col" class="px-6 py-3"></th>
                                        <th scope="col" class="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <td class="px-4 py-2">
                                            <div>
                                                <p>Sardine <span>x2000</span></p>
                                                <p className="text-xs">Expires: <span>11 Sept, 2027</span></p>
                                            </div>
                                        </td>
                                        <td class="px-4 py-2 text-right">
                                            <div className="flex items-center justify-end">
                                                <p>NGN <span>20,000</span></p>
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <td class="px-4 py-2">
                                            <div>
                                                <p>Sardine <span>x2000</span></p>
                                                <p className="text-xs">Expires: <span>11 Sept, 2027</span></p>
                                            </div>
                                        </td>
                                        <td class="px-4 py-2 text-right">
                                            <div className="flex items-center justify-end">
                                                <p>NGN <span>20,000</span></p>
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <td class="px-4 py-2">
                                            <div>
                                                <p>Sardine <span>x2000</span></p>
                                                <p className="text-xs">Expires: <span>11 Sept, 2027</span></p>
                                            </div>
                                        </td>
                                        <td class="px-4 py-2 text-right">
                                            <div className="flex items-center justify-end">
                                                <p>NGN <span>20,000</span></p>
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <td class="px-4 py-2">
                                            <div>
                                                <p>Sardine <span>x2000</span></p>
                                                <p className="text-xs">Expires: <span>11 Sept, 2027</span></p>
                                            </div>
                                        </td>
                                        <td class="px-4 py-2 text-right">
                                            <div className="flex items-center justify-end">
                                                <p>NGN <span>20,000</span></p>
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <td class="px-4 py-2">
                                            <div>
                                                <p>Sardine <span>x2000</span></p>
                                                <p className="text-xs">Expires: <span>11 Sept, 2027</span></p>
                                            </div>
                                        </td>
                                        <td class="px-4 py-2 text-right">
                                            <div className="flex items-center justify-end">
                                                <p>NGN <span>20,000</span></p>
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b border-black-10-percent hover:bg-black-10-percent">
                                        <td class="px-4 py-2">
                                            <div>
                                                <p>Sardine <span>x2000</span></p>
                                                <p className="text-xs">Expires: <span>11 Sept, 2027</span></p>
                                            </div>
                                        </td>
                                        <td class="px-4 py-2 text-right">
                                            <div className="flex items-center justify-end">
                                                <p>NGN <span>20,000</span></p>
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Stock products - modify */}
                <div></div>
            </>

        );
    }