import { useState , useEffect} from "react";
import { useParams } from 'react-router-dom'; // Import useParams for dynamic routing
import ReviewSection from "../assets/components/Reviews";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams(); // Extract product ID from URL

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`); // Replace with your API endpoint
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [productId]); // Re-fetch data when productId changes
  return (
    <section className="py-10 font-poppins">
      <div className="max-w-6xl px-4 mx-auto">
        {product && (<div className="flex flex-wrap mb-24 -mx-4 border-4 border-pink-500">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0 border-4 border-pink-500">
            <div className="sticky top-0 overflow-hidden border-4 border-green-500">
              <div className="relative mb-6 lg:mb-10 border-4 border-red-500">
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
                  className="object-contain w-full lg:h-full border-4 border-sky-500"
                  src="https://res.cloudinary.com/dzxhegeed/image/upload/v1709181506/womens/tenm8bkxpz2tzbx3zqo8.jpg"
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
                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
                  Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60 GHz)
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
                  <p className="ms-2 text-sm font-bold text-gray-900">4.95</p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                  <a
                    href="/"
                    className="text-sm font-medium text-gray-900 underline hover:no-underline"
                  >
                    73 reviews
                  </a>
                </div>

                <p className="inline-block text-2xl font-semibold text-gray-70 ">
                  <span>Rs.7,000.00</span>
                  <span className="ml-3 text-base font-normal text-gray-500 line-through">
                    Rs.10,000.00
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
                    {" "}
                    S{" "}
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    {" "}
                    M{" "}
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    {" "}
                    L{" "}
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    {" "}
                    XL{" "}
                  </button>
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                    {" "}
                    XXL{" "}
                  </button>
                </div>
              </div>
              {/* size end */}
              {/* prod strt */}
              <div>
                <span className="font-bold text-gray-700">
                  Product Description:
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
              {/* prod end */}
              {/* end */}
              <div className="py-6 mb-6 border-t border-b border-gray-200">
                <span className="text-base text-gray-60">In Stock</span>
                <p className="mt-2 text-sm text-blue-500 ">
                  {" "}
                  Ships from china.&nbsp;{" "}
                  <span className="text-gray-60">
                    Most customers receive within 3-31 days.
                  </span>{" "}
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
                  <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50  hover:bg-blue-600 hover:border-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className=" bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
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
        </div>)}
      </div>
      <ReviewSection/>
    </section>
  );
};

export default ProductDetails;
