const API_ENDPOINT = 'http://localhost:3000/api/products';

const farmSource = {
  async listProducts() {
    try {
      const response = await fetch(API_ENDPOINT);
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },
};

export default farmSource;
