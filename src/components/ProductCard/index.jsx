import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import './styles.scss';

const ProductCard = (props) => {
  const { product } = props;
  const [count, setCount] = useState(Number(localStorage.getItem(product.id)));

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours > 9 ? null : 0}
        {hours}:{minutes > 9 ? null : 0}
        {minutes}:{seconds > 9 ? null : 0}
        {seconds}
      </span>
    );
  };

  return (
    <div className="ProductCard">
      <div className="ProductCard__photo">
        <img
          className="ProductCard__img"
          src={product.image}
          alt={product.title}
        />
      </div>
      <h3 className="ProductCard__title">{product.title}</h3>
      <div className="ProductCard__countdown">
        <Countdown
          date={Date.now() + count * 1000}
          renderer={renderer}
          onComplete={() => setCount(0)}
        />
        {count === 0 ? (
          <p className="ProductCard__countdown__finished">Out of stock!</p>
        ) : (
          <Link
            className="ProductCard__button"
            id={product.id}
            to={`/detalle/${product.id}`}
          >
            Details
          </Link>
        )}
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
