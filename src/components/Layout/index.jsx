import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import Header from '../Header';
/* import './styles.scss'; */

const Layout = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
