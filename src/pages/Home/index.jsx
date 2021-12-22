import { useEffect } from 'react';
import Products from '../../components/Products';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Products />;
};

export default Home;
