import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import { getProducts } from '../../services/products';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <nav>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <h1>Loading ...</h1>
        )}
      </nav>
    </div>
  );
};
export default Products;
