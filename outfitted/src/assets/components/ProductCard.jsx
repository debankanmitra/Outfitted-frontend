
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};


function ProductCard({ product }) {

  const navigate = useNavigate();

  const handleCardClick = () => {
    // navigate(`/product/${product.id}`);
    navigate(`/product/id`);
  };

  return (
  <a key={product.id} href={product.href} className="group" onClick={handleCardClick} >
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
    <img
    src={product.imageSrc}
    alt={product.imageAlt}
    className="h-full w-full object-cover object-center group-hover:opacity-75"
    />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
 </a>
  );
}

export default ProductCard;
