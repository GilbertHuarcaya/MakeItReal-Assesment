import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="ProductCard">
      <h1 className="ProductCard_title">{}</h1>
      <img src={} alt={} />
      <div className="ProductCard_Link">
        <Link to="detalle/{}" className="Menu_navbar_button">
          Product Detail
        </Link>
      </div>
    </div>
  );
};

export default Menu;
