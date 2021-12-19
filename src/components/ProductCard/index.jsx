import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="ProductCard">
      <h1 className="ProductCard_title">{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>
        Rating: {product.rating.rate} from {product.rating.count} persons
      </p>
      <div className="ProductCard_Link">
        <Link to={`/detalle/${product.id}`} key={product.id}>
          Detail of {product.title}
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.string, PropTypes.integer),
};

ProductCard.defaultProps = {
  product: {},
};

export default ProductCard;
