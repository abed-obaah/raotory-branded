import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

const initialProducts = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  quantityStocked: Math.floor(Math.random() * 5000) + 1,
  quantitySold: Math.floor(Math.random() * 5000) + 1,
  expiringDate: "15/10/2025",
  totalCostPrice: `NGN${(Math.random() * 100000).toFixed(2)}`,
  totalRevenue: `NGN${(Math.random() * 500000).toFixed(2)}`,
}));

export default function Inventory() {
  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [editingProduct, setEditingProduct] = useState(null);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

  const openEditModal = (product) => setEditingProduct(product);
  const closeEditModal = () => setEditingProduct(null);

  return (
    <div>
      {/* Total products and search section */}
      <div className="flex gap-20 mb-10">
        <div>
          <p className="text-gray-757575 text-sm font-medium">Total Products</p>
          <h4 id="total-products" className="text-gray-757575 text-4xl font-semibold">
            {products.length}
          </h4>
        </div>
      </div>

      {/* Products table */}
      <div className="relative overflow-x-auto border border-black-10-percent mb-10">
        <table id="products-table" className="w-full text-base text-left">
          <thead className="text-sm text-white bg-blue-001b2a">
            <tr>
              <th className="px-2.5 py-3 border-r">S/N</th>
              <th className="px-2.5 py-3 border-r">Product Name</th>
              <th className="px-2.5 py-3 border-r">Quantity Stocked</th>
              <th className="px-2.5 py-3 border-r">Quantity Sold</th>
              <th className="px-2.5 py-3 border-r">Expiring Date</th>
              <th className="px-2.5 py-3 border-r">Total Cost Price</th>
              <th className="px-2.5 py-3">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product, index) => (
              <tr key={product.id} className="bg-white hover:bg-gray-100">
                <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{startIndex + index + 1}</td>
                <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.name}</td>
                <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.quantityStocked}</td>
                <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.quantitySold}</td>
                <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.expiringDate}</td>
                <td className="px-2.5 py-2 border-r border-black-10-percent text-gray-757575">{product.totalCostPrice}</td>
                <td className="px-2.5 py-2 flex items-center text-gray-757575">
                  <p>{product.totalRevenue}</p>
                  <button
                    className="ml-10 bg-blue-500 text-white px-4 py-1 rounded"
                    onClick={() => openEditModal(product)}
                  >
                    Modify
                  </button>
                  <div className="ml-4 p-2 bg-red-100 rounded-full">
                    <RiDeleteBin6Line className="text-red-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          ◀
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          ▶
        </button>
      </div>

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 w-96 rounded-lg">
            <IoIosArrowBack className="cursor-pointer" onClick={closeEditModal} />
            <h2 className="text-xl font-semibold">Edit Product</h2>
            <div className="mt-4">
              <label className="block text-sm">Product Name</label>
              <input
                type="text"
                value={editingProduct.name}
                className="w-full p-2 border rounded mt-1"
                readOnly
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Quantity Stocked</label>
              <input
                type="number"
                value={editingProduct.quantityStocked}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Quantity Sold</label>
              <input
                type="number"
                value={editingProduct.quantitySold}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Expiring Date</label>
              <input
                type="number"
                value={editingProduct.expiringDate}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Total Cost Price</label>
              <input
                type="text"
                value={editingProduct.totalCostPrice}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Total Revenue</label>
              <input
                type="text"
                value={editingProduct.totalRevenue}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="mt-6 flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={closeEditModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
