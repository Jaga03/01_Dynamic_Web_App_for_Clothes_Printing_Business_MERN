// servises/productService.js
import axios from 'axios';

export const fetchProducts = async () => {
  const res = await axios.get('/api/products');
  return res.data;
};

export const createProduct = async (data) => {
  const res = await axios.post('/api/products', data);
  return res.data;
};

