import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import './styles.scss';

const ProductCard = (props) => {
  const { product } = props;
  const [linkGone, setLinkGone] = useState(false);

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
      {!linkGone ? (
        <div className="ProductCard__countdown">
          <Countdown
            date={Date.now() + (Math.random() * (9 - 1) + 1) * 10000}
            renderer={renderer}
            onComplete={() => setLinkGone(true)}
            className="ProductCard__countdown__active"
          />
          <Link to={`/detalle/${product.id}`} key={product.id}>
            <button
              type="button"
              id={product.id}
              className="ProductCard__button"
            >
              Details
            </button>
          </Link>
        </div>
      ) : (
        <p className="ProductCard__countdown__finished">Out of stock!</p>
      )}
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
