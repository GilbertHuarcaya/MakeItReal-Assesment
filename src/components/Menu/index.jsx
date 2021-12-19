import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu">
      <h1 className="Menu_title">Menu</h1>
      <div className="Menu_navbar">
        <Link to="/" className="Menu_navbar_button">
          Home
        </Link>
        <Link to={`detalle/${1}`} className="Menu_navbar_button">
          OneProduct
        </Link>
        <Link to="/About" className="Menu_navbar_button">
          About
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Menu;
