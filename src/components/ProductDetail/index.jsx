import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../services/products';
import './styles.scss';
import Spinner from '../../imgs/Spin.svg';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const oneproduct = await getProduct(productId);
      setProduct(oneproduct);
    };
    fetchProduct();
  }, []);

  return (
    <main className="ProductDetail">
      {product ? (
        <div className="ProductDetail__card">
          <h3 className="ProductDetail__card__subtitle">
            Category: {product.category}
          </h3>

          <h2 className="ProductDetail__card__name">{product.title}</h2>

          <div className="ProductDetail__card__photo">
            <img
              className="ProductDetail__card__img"
              src={product.image}
              alt={product.title}
            />
          </div>
          <h2 className="ProductDetail__card__price">
            Price: ${product.price}
          </h2>
          <h3 className="ProductDetail__card__subtitle">Description:</h3>
          <p className="ProductDetail__card__description">
            {product.description}
          </p>
          <h3 className="ProductDetail__card__subtitle">Rating:</h3>
          <p className="ProductDetail__card__description">
            {product.rating.rate} stars from {product.rating.count} votes
          </p>
        </div>
      ) : (
        <img src={Spinner} alt="Spinner" className="Products__loading" />
      )}
    </main>
  );
};
export default ProductDetail;
