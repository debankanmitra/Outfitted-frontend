import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom' // Import useParams for dynamic routing
import ReviewSection from '../assets/components/Reviews'

const ProductDetails = () => {
  const [favourite, setFavourite] = useState(false)
  const [showReviews, setReviews] = useState(false)
  const [product, setProduct] = useState(null)
  const { productId } = useParams() // Extract product ID from URL

  if (!localStorage.getItem('wishlist')) {
    localStorage.setItem('wishlist', JSON.stringify([])) // Initialize the wishlist in local storage
  }

  const toggleFavourite = () => { //TODO: Do a patch request in user model to update the wishlist and also save it to the local storage after fetch from server
   const prodObj = { id: product.productid, name: product.name, price: product.price, imageSrc: product.Images }
    setFavourite(!favourite) // It just helps to render the component to update the red heart icon
    if (localStorage.getItem('wishlist')) { // if wishlist array already present 
      const retrievedArray = JSON.parse(localStorage.getItem('wishlist'))
      if (hasID(productId)) {
        retrievedArray.splice(retrievedArray.indexOf(prodObj), 1) // Remove the product id from the array
        localStorage.setItem('wishlist', JSON.stringify(retrievedArray)) // Update the local storage
      } else {
        retrievedArray.push(prodObj) // if id is new Add the product id to the array
        localStorage.setItem('wishlist', JSON.stringify(retrievedArray)) // Update the local storage
      }
    }else{ // if wishlist array not present
      localStorage.setItem('wishlist', JSON.stringify([prodObj])) // Add the first product id to the array
    }
  }

  function hasID(id) {
    const retrievedArray = JSON.parse(localStorage.getItem('wishlist'))
     for (const obj of retrievedArray) {
    if (obj.id === id) {
      return true; // Name found, exit the loop
    }
  }
  return false; // Name not found
  }

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://outfitted-backend.vercel.app/products/${productId}`,
        ) // Replace with your API endpoint
        const data = await response.json()
        setProduct(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProductDetails()
  }, [productId]) // Re-fetch data when productId changes

  const containerRef = useRef(null)
  const scrollToBottom = () => {
    setReviews(true) // Fetch the data , implement fetching from server
  }

  useEffect(() => {
    // Scroll to the bottom only when reviews are loaded
    containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [showReviews]) // Run the effect when reviews change
  return (
    <section className="py-10 font-poppins">
      <div className="max-w-6xl px-4 mx-auto">
        {product ? (
          <div className="flex flex-wrap mb-24 -mx-4 ">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0 ">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10">
                  {/* <a
                  className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-500 bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    ></path>
                  </svg>
                </a> */}
                  <img
                    className="object-contain w-full lg:h-full"
                    src={`https://res.cloudinary.com/dzxhegeed/image/upload/v1709181506/${product.Images}.jpg`}
                    alt=""
                  />
                  {/* <a
                  className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-500 bi bi-chevron-right "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </a> */}
                </div>
                {/* <div className="flex-wrap hidden -mx-2 md:flex"> */}
                {/* <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400"
                    href="/"
                  >
                    <img
                      className="object-contain w-full lg:h-28"
                      src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div> */}
                {/* <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400"
                    href="/"
                  >
                    <img
                      className="object-contain w-full lg:h-28"
                      src="https://i.postimg.cc/8kJBrw03/download-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div> */}
                {/* <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400"
                    href="/"
                  >
                    <img
                      className="object-contain w-full lg:h-28"
                      src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div> */}
                {/* <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400"
                    href="/"
                  >
                    <img
                      className="object-contain w-full lg:h-28"
                      src="https://i.postimg.cc/0N4Kk1PN/black-microprocessors-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div> */}
                {/* </div> */}
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 rounded-xl ">
                    New Arrival
                  </span>
                  <h1 className="mt-6 text-xl font-semibold leading-loose tracking-wide text-pink-600">
                    {product.name}
                  </h1>
                  <h2 className="max-w-xl mt-2 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
                    {product.title}
                  </h2>

                  <div className="flex items-center mb-6">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ms-2 text-sm font-bold text-gray-900">
                      {product.ratings}
                    </p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                    <a
                      href="/"
                      className="text-sm font-medium text-gray-900 underline hover:no-underline"
                    >
                      {product.buys} Ratings
                    </a>
                    <span
                      className="text-md mx-4 font-semibold text-purple-900 hover:underline"
                      onClick={scrollToBottom}
                    >
                      See all Reviews
                    </span>
                  </div>

                  <p className="inline-block text-2xl font-semibold text-gray-70 ">
                    <span>$ {product.price}</span>
                    <span className="ml-3 text-base font-normal text-gray-500 line-through">
                      $ {product.mrp}
                    </span>
                    <span className="ml-3 text-base font-normal text-gray-500">
                      ({product.discount}% off)
                    </span>
                  </p>
                </div>
                {/* start */}
                {/* color start */}
                <div className="mb-4">
                  <span className="font-bold text-gray-700">Select Color:</span>
                  <div className="flex items-center mt-2">
                    <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                  </div>
                </div>
                {/* color end */}
                {/* size start */}
                <div className="mb-4">
                  <span className="font-bold text-gray-700">Select Size:</span>
                  <div className="flex items-center mt-2">
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      {' '}
                      S{' '}
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      {' '}
                      M{' '}
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      {' '}
                      L{' '}
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      {' '}
                      XL{' '}
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      {' '}
                      XXL{' '}
                    </button>
                  </div>
                </div>
                {/* size end */}
                {/* prod strt */}
                <div>
                  <span className="mt-2 font-bold text-gray-700">
                    Product Description:
                  </span>
                  <p className="text-gray-600 text-sm mt-2">
                    {product.description}
                  </p>
                  <span className="mt-2 font-bold text-gray-700">Seller:</span>
                  <p className="text-gray-600 text-sm mt-2">{product.seller}</p>
                  <span className="mt-2 font-bold text-gray-700">
                    Product code:
                  </span>
                  <p className="text-gray-600 text-sm mt-2">
                    {product.product_code}
                  </p>
                </div>

                {/* prod end */}
                {/* end */}
                <div className="py-6 mb-6 border-t border-b border-gray-200">
                  <span className="text-base text-gray-60">In Stock</span>
                  <p className="mt-2 text-sm text-blue-500 ">
                    {' '}
                    Ships from china.&nbsp;{' '}
                    <span className="text-gray-60">
                      Most customers receive within 3-31 days.
                    </span>{' '}
                  </p>
                </div>
                <div className="mb-6 "></div>
                <div className="flex flex-wrap items-center mb-6">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-28">
                      <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                          type="number"
                          className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-non focus:outline-none text-md hover:text-black"
                          placeholder="1"
                        />
                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 lg:mb-0">
                    <button className="flex items-center justify-center w-full h-10 p-2 mr-4 lg:w-11">
                      <svg
                        width="55"
                        height="55"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={toggleFavourite}
                      >
                        <path
                          fill={hasID(productId) ? '#e74c3c' : 'grey'} className='hover:fill-[#e74c3c]'
                          d="M4.03553 1C1.80677 1 0 2.80677 0 5.03553C0 6.10582 0.42517 7.13228 1.18198 7.88909L7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L13.818 7.88909C14.5748 7.13228 15 6.10582 15 5.03553C15 2.80677 13.1932 1 10.9645 1C9.89418 1 8.86772 1.42517 8.11091 2.18198L7.5 2.79289L6.88909 2.18198C6.13228 1.42517 5.10582 1 4.03553 1Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <a
                    href="/"
                    className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                  >
                    Add to cart
                  </a>
                </div>
                <div className="flex gap-4 mb-6">
                  <a
                    href="/"
                    className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent hover:border-blue-500 hover:text-blue-700 hover:bg-blue-10  rounded-xl"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
      <div ref={containerRef}>{showReviews && <ReviewSection />}</div>
    </section>
  )
}

export default ProductDetails
