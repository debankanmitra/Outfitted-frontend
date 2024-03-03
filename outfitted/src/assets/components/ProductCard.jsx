import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

ProductCard.propTypes = {
  product: PropTypes.shape({
    productid: PropTypes.string.isRequired,
    // href: PropTypes.string.isRequired,
    Images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
}

function ProductCard({ product }) {
  return (
    <div key={product.productid} className="group">
      <Link to={`/products/${product.productid}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={`https://res.cloudinary.com/dzxhegeed/image/upload/w_473,h_593/q_30,f_auto/v1709181506/${product.Images}.jpg`}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price}
        </p>
      </Link>
    </div>
  )
}

export default ProductCard
