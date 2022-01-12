import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard';
import getAllProducts from '../../store/actions';
import './styles.scss';
import Spinner from '../../imgs/Spin.svg';

const Products = () => {
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      localStorage.clear();
      getAllProducts(dispatch);
    };
    fetchProducts();
  }, []);

  return (
    <div className="Products">
      <h1 className="Products__title">Products</h1>
      <div className="Products__cards">
        {!loading ? (
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
