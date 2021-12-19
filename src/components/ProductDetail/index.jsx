import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../services/products';

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
        <div>
          <h2>Price: ${product.price}</h2>
          <img src={product.image} alt={product.title} />
          <p>
            {product.title}: {product.id}
          </p>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </main>
  );
};
export default ProductDetail;
