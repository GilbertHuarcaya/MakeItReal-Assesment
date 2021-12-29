import ProductCard from '../ProductCard';
import { useStateProduct } from './Context';
import './styles.scss';
import Spinner from '../../imgs/Spin.svg';

const Products = () => {
  const { products } = useStateProduct();

  if (!localStorage.length && products) {
    products.forEach((product) => {
      localStorage.setItem(product.id, Math.floor(Math.random() * 100) + 60);
    });
  }

  return (
    <div className="Products">
      <h1 className="Products__title">Products</h1>
      <div className="Products__cards">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <img src={Spinner} alt="Spinner" className="Products__loading" />
        )}
      </div>
    </div>
  );
};
export default Products;
