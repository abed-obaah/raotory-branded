import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { RiDeleteBin6Line } from "react-icons/ri";

export default function InputOrder() {
    return (
        <>
            {/* Main container */}
            <div>

                {/* Select customer / Create customer */}
                <form className='mb-6.5'>   
                    <label for="" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Select customer</label>
                    <div class="relative">
                        {/* <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div> */}
                        <input 
                            type="" 
                            id="" 
                            class="block w-full p-4 ps-4 text-base text-blue-001b2a border border-black-10-percent rounded-[10px] bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575" 
                            placeholder="Select customer" 
                        />
                        <button type="" class="text-white absolute end-4 bottom-2.5 bg-blue-primary hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[10px] text-base px-5 py-2 min-w-[] dark:bg-blue-primary dark:hover:bg-blue-0e90da">
                            Create customer
                        </button>
                    </div>
                </form>

                {/* Select product / Price type */}
                <div className='flex gap-x-6.5 mb-10'>
                        {/* Select product */}
                        <form className='w-[70%]'>   
                            <div class="relative">
                                {/* <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div> */}
                                <input 
                                    type="" 
                                    id="" 
                                    class="block w-full p-4 ps-4 text-base text-blue-001b2a border border-black-10-percent rounded-[10px] bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575" 
                                    placeholder="Select Product" 
                                />
                            </div>
                        </form>
                        {/* Price type */}
                        <div className="grid grid-cols-1 w-[30%]">
                            <select
                                id=""
                                name=""
                                defaultValue=""
                                className="col-start-1 row-start-1 w-full appearance-none rounded-[10px] bg-white p-4 pr-10 pl-4 text-base text-gray-757575 outline-1 -outline-offset-1 outline-gray-300"
                                >
                                    <option selected>Price Type</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-4 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                </div>

                {/* Product table */}
                <div class="relative overflow-x-auto border border-black-10-percent mb-6">
                    <table id="products-table" class="w-auto text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a border-collapse">
                        <caption className="hidden text-left text-black text-xl font-medium p-6"></caption>
                        <thead class="text-sm text-white bg-dark-text-primary border-b border-black-10-percent dark:text-blue-001b2a">
                            <tr>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">S/N</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575 w-full">Product Name</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Cost Price</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Selling Price</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Quantity</th>
                                <th scope="col" class="px-2.5 py-3 border-r border-gray-757575">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white text-gray-757575 text-base">
                                <td class="px-2.5 py-2 border-r border-black-10-percent">01</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">Paracetamol</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">NGN10,000</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent text-blue-001b2a">NGN15,000</td>
                                <td class="px-2.5 py-2 border-r border-black-10-percent">
                                    <form className=''>
                                        <input 
                                        type="number" 
                                        id="" 
                                        aria-describedby="helper-text-explanation" 
                                        class="bg-[#E5E5E5] text-blue-001b2a text-base rounded-[2px] p-2.5 max-w-[100px] dark:bg-[#E5E5E5] dark:placeholder-gray-757575 dark:text-blue-001b2a" placeholder="000" />
                                    </form>
                                </td>
                                <td class="px-2.5 py-2">
                                    <div class="flex items-center justify-between gap-10">
                                        <p className=''>NGN250,000</p>
                                        <div className="bg-[#CA00001F] p-2 rounded-full">
                                            <RiDeleteBin6Line className="size-4 text-red-ca0000" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Payment type / total cost */}
                <div className='flex items-end justify-between mb-9'>
                    {/* Payment type */}
                    <div className="grid grid-cols-1 w-[30%] h-max">
                        <select
                            id=""
                            name=""
                            defaultValue=""
                            className="col-start-1 row-start-1 w-full appearance-none rounded-[10px] bg-white p-4 pr-10 pl-4 text-base text-gray-757575 outline-1 -outline-offset-1 outline-gray-300"
                            >
                                <option selected>Payment Type</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                        </select>
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-4 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </div>
                    {/* Total cost */}
                    <div className='flex flex-col bg-blue-001b2a p-2.5 w-max'>
                        <p className='text-[#E5E5E5] text-base font-medium'>Total Cost</p>
                        <h4 className='text-[#E5E5E5] text-2xl font-bold'>NGN 238,908.00</h4>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex items-center gap-6'>
                    <button type="" class="w-[30%] text-white bg-blue-primary hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[10px] text-base font-semibold px-5 py-3.5 min-w-[] dark:bg-blue-primary dark:hover:bg-blue-0e90da">
                        Place On Hold
                    </button>
                    <button type="" class="w-[70%] text-white bg-blue-primary hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[10px] text-base font-semibold px-5 py-3.5 min-w-[] dark:bg-blue-primary dark:hover:bg-blue-0e90da">
                        Save & Issue Receipt
                    </button>
                </div>
            </div>
        </>
    )
}