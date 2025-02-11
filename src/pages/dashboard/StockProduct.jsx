import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";


export default function StockProduct() {
    return (
        <>
            {/* Main wrapper */}
            <div>
                {/* Products table */}
                <div class="relative overflow-x-auto border border-black-10-percent mb-10">
                    <table id="products-table" class="w-full text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a border-collapse">
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
            </div>
        </>
    )
}