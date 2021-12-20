import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles.scss';

const Menu = () => {
  const [toggleClassBtnMenu, setToggleCLassBtnMenu] = useState('false');
  const [productLink, setProductLnk] = useState();

  const handlerMenu = () => {
    if (!toggleClassBtnMenu) return setToggleCLassBtnMenu(true);
    return setToggleCLassBtnMenu(false);
  };
  const urlactual = useLocation().pathname;
  const pattern = /\/[0-9]+$/;

  useEffect(() => {
    setProductLnk(urlactual.match(pattern));
  }, [useLocation()]);

  return (
    <div className="Menu">
      <nav
        className={
          toggleClassBtnMenu
            ? 'Menu__navbar'
            : 'Menu__navbar is-active-menu-navbar'
        }
      >
        <Link to="/" className="Menu__navbar__a" onClick={handlerMenu}>
          Home
        </Link>
        {!pattern.test(urlactual) ? (
          <p className="Menu__navbar__a" disabled>
            Product
          </p>
        ) : (
          <Link
            to={`/detalle${productLink}`}
            className="Menu__navbar__a"
            hidden={!pattern.test(urlactual)}
            onClick={handlerMenu}
          >
            Product
          </Link>
        )}

        <Link to="/About" className="Menu__navbar__a" onClick={handlerMenu}>
          About
        </Link>
      </nav>
      <div className="Menu__logo">
        <button
          className="Menu__logo__button"
          type="button"
          aria-label="Menu"
          onClick={handlerMenu}
        />
      </div>
    </div>
  );
};

export default Menu;
