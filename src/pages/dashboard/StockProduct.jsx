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
                    className='border p-2 w-full rounded'
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
            <table className='w-full border-collapse border'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='border p-2'>S/N</th>
                        <th className='border p-2'>Product Name</th>
                        <th className='border p-2'>Cost Price</th>
                        <th className='border p-2'>Selling Price</th>
                        <th className='border p-2'>Quantity</th>
                        <th className='border p-2'>Total</th>
                        <th className='border p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedProducts.map((product, index) => (
                        <tr key={index}>
                            <td className='border p-2'>{index + 1}</td>
                            <td className='border p-2'>{product.name}</td>
                            <td className='border p-2'>NGN {product.cost}</td>
                            <td className='border p-2'>
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
                                <button onClick={() => deleteProduct(index)} className='text-red-500'>
                                    <RiDeleteBin6Line size={20} />
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