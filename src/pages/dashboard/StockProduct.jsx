import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function StockProduct() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    const products = [
        { id: 1, name: 'Paracetamol', cost: 10000, price: 15000, quantity: 1 },
        { id: 2, name: 'Ibuprofen', cost: 12000, price: 18000, quantity: 1 },
        { id: 3, name: 'Amoxicillin', cost: 9000, price: 14000, quantity: 1 }
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
        <div>
            {/* Product Search */}
            <div className='relative mb-4'>
                <input 
                    type='text' 
                    value={searchQuery} 
                    onChange={handleSearch} 
                    placeholder='Select Product' 
                    className='block w-full p-4 ps-4 text-base text-blue-001b2a border border-black-10-percent rounded-[10px] bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-white dark:border-black-10-percent dark:placeholder-gray-757575'
                />
                {filteredProducts.length > 0 && (
                    <ul className='absolute w-full bg-white border mt-1'>
                        {filteredProducts.map((product) => (
                            <li key={product.id} 
                                onClick={() => addProductToTable(product)} 
                                className='cursor-pointer p-2 hover:bg-gray-100 flex justify-between'>
                                <span>{product.name}</span>
                                <span>NGN {product.price}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
            {/* Product Table */}
            <table className='w-auto text-base text-left rtl:text-right text-blue-001b2a dark:text-blue-001b2a border-collapse'>
                <thead class="text-sm text-white bg-dark-text-primary border-b border-black-10-percent dark:text-blue-001b2a">
                    <tr>
                        <th className='px-2.5 py-3 border-r border-gray-757575'>S/N</th>
                        <th className='px-2.5 py-3 border-r border-gray-757575'>Product Name</th>
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
                            <td className='px-2.5 py-2 border-r border-black-10-percent'>{index + 1}</td>
                            <td className='px-2.5 py-2 border-r border-black-10-percent'>{product.name}</td>
                            <td className='px-2.5 py-2 border-r border-black-10-percent'>NGN {product.cost}</td>
                            <td className='px-2.5 py-2 border-r border-black-10-percent text-blue-001b2a'>
                                <input 
                                    type='number' 
                                    value={product.price} 
                                    onChange={(e) => updateProduct(index, 'price', parseFloat(e.target.value) || 0)}
                                    className='border p-1 w-20'
                                />
                            </td>
                            <td className='border p-2'>
                                <input 
                                    type='number' 
                                    value={product.quantity} 
                                    onChange={(e) => updateProduct(index, 'quantity', parseInt(e.target.value) || 1)}
                                    className='border p-1 w-20'
                                />
                            </td>
                            <td className='border p-2'>NGN {product.total || product.price * product.quantity}</td>
                            <td className='border p-2'>
                                <button onClick={() => deleteProduct(index)} className='bg-[#CA00001F] p-2 rounded-full'>
                                    <RiDeleteBin6Line size={20} className='size-4 text-red-ca0000' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {/* Total Cost */}
            <div className='mt-4 text-right'>
                <strong>Total Cost: NGN {totalCost}</strong>
            </div>
            
            {/* Save & Issue Receipt */}
            <button onClick={() => setShowModal(true)} className='mt-4 bg-blue-500 text-white p-2 rounded'>
                Save & Issue Receipt
            </button>
            
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
    );
}