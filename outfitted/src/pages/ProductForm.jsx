import { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
 const [formData, setFormData] = useState({
    category: '',
    Images: '',
    name: '',
    description: '',
    price: 0,
    ratings: 0,
    buys: 0,
    mrp: 0,
    title: '',
    size: '',
    product_code: '',
    color: '',
    seller: '',
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    const discount = ((formData.mrp - formData.price) / formData.mrp) * 100;
    const updatedFormData = { ...formData, discount };

    try {
      const response = await axios.post('http://127.0.0.1:8000/products/', updatedFormData);
      console.log(response.data);
      // Handle success (e.g., show a success message, redirect)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an error message)
    }
 };

 return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
       <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-md m-4 p-6 bg-gray-800 rounded-lg shadow-xl'>
         <label className="block mb-2 text-black-300">
           Category:
           <select name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
             <option value="">Select</option>
             <option value="Women">Women</option>
             <option value="Men">Men</option>
             <option value="Kids">Kids</option>
           </select>
         </label>
         <label className="block mb-2 text-black-300">
           Images:
           <input type="text" name="Images" value={formData.Images} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           Name:
           <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           Description:
           <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           Price:
           <input type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           Ratings:
           <input type="number" name="ratings" value={formData.ratings} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           Buys:
           <input type="number" name="buys" value={formData.buys} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           MRP:
           <input type="number" name="mrp" value={formData.mrp} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           Title:
           <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           Size:
           <select name="size" value={formData.size} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
             <option value="">Select</option>
             <option value="S">S</option>
             <option value="M">M</option>
             <option value="L">L</option>
             <option value="XL">XL</option>
           </select>
         </label>
         <label className="block mb-2 text-black-300">
           Product Code:
           <input type="text" name="product_code" value={formData.product_code} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <label className="block mb-2 text-black-300">
           Color:
           <select name="color" value={formData.color} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500">
             <option value="">Select</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
           </select>
         </label>
         <label className="block mb-2 text-black-300">
           Seller:
           <input type="text" name="seller" value={formData.seller} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-700 text-black-300 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500" />
         </label>
         <button type="submit" className="mt-4 bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700">Submit</button>
       </form>
    </div>
   );
   
};

export default ProductForm;
