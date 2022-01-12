import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard';
import { getAllProducts, setInitialTimes } from '../../store/actions';
import './styles.scss';
import Spinner from '../../imgs/Spin.svg';

const Products = () => {
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  if (!localStorage.length && products) {
    products.forEach((product) => {
      localStorage.setItem(product.id, Math.floor(Math.random() * 100) + 60);
    });
  }
  useEffect(() => {
    const fetchProducts = async () => {
      if (products.length < 1) {
        localStorage.clear();
        getAllProducts(dispatch);
      }
    };
    fetchProducts();
  }, []);

  if (products.length > 1) {
    setInitialTimes(dispatch, products);
  }

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
