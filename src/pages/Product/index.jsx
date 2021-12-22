import { useEffect } from 'react';
import ProductDetail from '../../components/ProductDetail';

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <ProductDetail />;
};

export default Product;
