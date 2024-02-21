import PropTypes from "prop-types";


const Product = ({image, name, description, price}) => {
  return(
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    <img src={image} alt="product" className="w-full rounded-lg sm:w-40" />
    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
      <div className="mt-5 sm:mt-0">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="mt-1 text-xs text-gray-700">{description}</p>
      </div>
      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
        <div className="flex items-center border-gray-100">
          <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
          <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
          <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm">{price} ₭</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  )
};
Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export const CartSection = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Nike Air Max 2019",
      description: "36EU - 4US",
      price: 259.110,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
      name: "Nike Air Max 2019",
      description: "36EU - 4US",
      price: 259.000,
    },
    {
      id: 3,
      image: "https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg",
      name: "Nike Air Max 2019",
      description: "36EU - 4US",
      price: 259.110,
    },
    {
      id: 4,
      image: "https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg",
      name: "Nike Air Max 2019",
      description: "36EU - 4US",
      price: 259.110,
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Nike Air Max 2019",
      description: "36EU - 4US",
      price: 259.110,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
      name: "Nike Air Max 2019",
      description: "36EU - 4US",
      price: 259.000,
    },
    {
      id: 3,
      image: "https://i.postimg.cc/kGjz3dpD/pexels-cottonbro-3296434.jpg",
      name: "Nike Air Max 2019",
      description: "36EU - 4US",
      price: 259.110,
    },
    {
      id: 4,
      image: "https://i.postimg.cc/CLWkvq6f/pexels-markus-spiske-1002638.jpg",
      name: "Nike Air Max 2019",
      description: "36EU - 4US",
      price: 259.110,
    }
  ];
  return (
    <body>
    <div className="h-screen pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3 h-screen overflow-y-scroll">
        {products.map((product) => (
              <Product key={product.id} image={product.image} name={product.name} description={product.description} price={product.price} />
            ))}
        </div>
        {/* <!-- Sub total --> */}
        <div id="order summary" className="mt-6 h-full rounded-lg border border-blue-100 bg-blue-50 p-6 shadow-md md:mt-0 md:w-1/3">
          <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">Order Summary</h2>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <h2 className="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
          <div className="flex items-center mb-4 ">
            <a href="/">
              <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
            </a>
            <a href="/">
              <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
            </a>
            <a href="/">
              <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
            </a>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
      </div>
    </div>
  </body>
     
  );
};


export default CartSection;
// https://tailgrail.com/tailwind/cart
// https://tailwindcomponents.com/component/shopping-cart-responsive