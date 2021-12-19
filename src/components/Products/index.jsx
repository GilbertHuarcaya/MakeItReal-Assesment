import ProductCard from '../ProductCard';
import { useStateProduct } from './Context';

const Products = () => {
  const { products } = useStateProduct();

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};
export default Products;
