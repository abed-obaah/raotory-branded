import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { RiDeleteBin6Line } from "react-icons/ri";

export default function InputOrder() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    const products = [
        { id: 1, name: 'Paracetamol', cost: 10000, price: 15000, quantity: 1 },
        { id: 2, name: 'Paracetamol', cost: 10000, price: 15000, quantity: 1 },
        { id: 3, name: 'Paracetamol', cost: 10000, price: 15000, quantity: 1 },
        { id: 4, name: 'Ibuprofen', cost: 12000, price: 18000, quantity: 1 },
        { id: 5, name: 'Amoxicillin', cost: 9000, price: 14000, quantity: 1 }
    ];

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query) {
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const addProductToTable = (product) => {
        setSelectedProducts(prev => [...prev, { ...product }]);
        setSearchQuery('');
        setFilteredProducts([]);
    };

    const updateProduct = (index, key, value) => {
        const updatedProducts = [...selectedProducts];
        updatedProducts[index][key] = value;
        if (key === 'quantity' || key === 'price') {
            updatedProducts[index].total = updatedProducts[index].quantity * updatedProducts[index].price;
        }
        setSelectedProducts(updatedProducts);
    };

    const deleteProduct = (index) => {
        setSelectedProducts(prev => prev.filter((_, i) => i !== index));
    };

    const totalCost = selectedProducts.reduce((sum, p) => sum + (p.total || (p.price * p.quantity)), 0);

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

                {/* Product search / Price type */}
                <div className='flex gap-x-6.5 mb-10'>
                    {/* Product Search */}
                    <div className='relative mb-4 w-[70%]'>
                        <input 
                            type='text' 
                            value={searchQuery} 
                            onChange={handleSearch} 
                            placeholder='Select Product' 
                            className='block w-full p-4 ps-4 text-base text-blue-001b2a border border-black-10-percent rounded-[10px] bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575'
                        />
                        {filteredProducts.length > 0 && (
                            <ul className='absolute w-full bg-white border border-black-10-percent p-3 mt-3 z-1 rounded-[15px] max-w-[596px]'>
                                {filteredProducts.map((product) => (
                                    <li key={product.id} 
                                        onClick={() => addProductToTable(product)} 
                                        className='cursor-pointer p-2 hover:bg-[#E5E5E5] rounded flex justify-between'>
                                        <span>{product.name}</span>
                                        <span className='border-l border-black-10-percent pl-2'>NGN {product.price}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* Price type */}
                    <div className="grid grid-cols-1 w-[30%] h-max">
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
                <div id='product-table' class="relative overflow-x-auto border border-black-10-percent mb-6">
                    <table id="products-table" class="w-full text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a border-collapse bg-amber-200">
                        <caption className="hidden text-left text-black text-xl font-medium p-6"></caption>
                        <thead class="text-sm text-white bg-dark-text-primary border-b border-black-10-percent dark:text-blue-001b2a">
                            <tr>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>S/N</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575 min-w-[240px]'>Product Name</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Cost Price</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Selling Price</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Quantity</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Total</th>
                                <th className='px-2.5 py-3 border-r border-gray-757575'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedProducts.map((product, index) => (
                                <tr key={index} className='bg-white text-gray-757575 text-base'>
                                    {/* Serial number */}
                                    <td className='px-2.5 py-2 border-r border-b border-black-10-percent'>{index + 1}</td>
                                    {/* Product name */}
                                    <td className='px-2.5 py-2 border-r border-b border-black-10-percent'>{product.name}</td>
                                    {/* Cost price */}
                                    <td className='px-2.5 py-2 border-r border-b border-black-10-percent'>NGN {product.cost}</td>
                                    {/* Selling price */}
                                    <td className='px-2.5 py-2 border-r border-b border-black-10-percent text-blue-001b2a'>
                                        <input 
                                            type='number' 
                                            value={product.price} 
                                            onChange={(e) => updateProduct(index, 'price', parseFloat(e.target.value) || 0)}
                                            className='p-1 w-20'
                                        />
                                    </td>
                                    {/* Quantity */}
                                    <td className='border-r border-b border-black-10-percent p-2'>
                                        <input 
                                            type='number' 
                                            value={product.quantity} 
                                            onChange={(e) => updateProduct(index, 'quantity', parseInt(e.target.value) || 1)}
                                            className='p-1 w-20'
                                        />
                                    </td>
                                    {/* Total */}
                                    <td className='border-r border-b border-black-10-percent p-2'>NGN {product.total || product.price * product.quantity}</td>
                                    {/* Action */}
                                    <td className='border-r border-b border-black-10-percent p-2'>
                                        <button onClick={() => deleteProduct(index)} className='bg-[#CA00001F] p-2 rounded-full'>
                                            <RiDeleteBin6Line size={20} className='size-4 text-red-ca0000' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
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
                        <h4 id='total-cost' className='text-[#E5E5E5] text-2xl font-bold'>
                            NGN {totalCost}
                        </h4>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex items-center gap-6'>
                    <button type="" class="w-[30%] text-white bg-blue-primary hover:bg-blue-0e90da focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-[10px] text-base font-semibold px-5 py-3.5 min-w-[] dark:bg-blue-primary dark:hover:bg-blue-0e90da">
                        Place On Hold
                    </button>
                    <button onClick={() => setShowModal(true)} className='mt-4 bg-blue-500 text-white p-2 rounded'>
                        Save & Issue Receipt
                    </button>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                        <div className='bg-white p-4 rounded shadow-lg'>
                            <h2 className='text-lg font-bold'>Success</h2>
                            <p>Order has been saved successfully.</p>
                            <button onClick={() => setShowModal(false)} className='mt-4 bg-blue-500 text-white p-2 rounded'>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}