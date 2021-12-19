import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;
const ProductCard = (props) => {
  const { product } = props;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    }
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };

  return (
    <div className="ProductCard">
      <h1 className="ProductCard_title">{product.title}</h1>
      <img
        className="ProductCard_title_img"
        src={product.image}
        alt={product.title}
      />
      <p className="ProductCard_rating">
        Rating: {product.rating.rate} from {product.rating.count} persons
      </p>
      <div className="ProductCard_countdown">
        <Countdown
          date={Date.now() + (Math.random() * (9 - 1) + 1) * 10000}
          renderer={renderer}
        />
      </div>
      <div className="ProductCard_Link">
        <Link to={`/detalle/${product.id}`} key={product.id}>
          Detail of {product.title}
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
};

ProductCard.defaultProps = {
  product: {},
};

export default ProductCard;
