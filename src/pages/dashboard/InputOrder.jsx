import { ChevronDownIcon } from '@heroicons/react/16/solid'


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
                <div className='flex gap-6.5'>
                        {/* Select product */}
                        <div className="mt-2 grid grid-cols-1 w-[70%]">
                            <select
                                id=""
                                name=""
                                defaultValue=""
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white p-4 pr-10 pl-4 text-base text-gray-757575 outline-1 -outline-offset-1 outline-gray-300"
                                >
                                    <option selected>Select Product</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                            </select>
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-4 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                        {/* Price type */}
                        <div className="mt-2 grid grid-cols-1 w-[30%]">
                            <select
                                id=""
                                name=""
                                defaultValue=""
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white p-4 pr-10 pl-4 text-base text-gray-757575 outline-1 -outline-offset-1 outline-gray-300"
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


            </div>
        </>
    )
}