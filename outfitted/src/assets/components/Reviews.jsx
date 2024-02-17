import PropTypes from "prop-types";

const Star = ({ filled }) => {
  const fillColor = filled ? "gold" : "gray";
  return (
    // Replace the content with your SVG code or use an SVG library
    <svg
      width="30"
      height="30"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};
Star.propTypes = {
  filled: PropTypes.bool.isRequired,
};

const Reviews = ({ reviews }) => {
  return (
    <>
      <div className="mx-auto grid max-w-sm grid-cols-12 sm:max-w-full">
        <div className="col-span-12 lg:col-span-10">
          <div className="gap-6 sm:flex">
            <img src={reviews.imageSrc} alt="Robert" className="h-32 w-32" />
            <div className="text">
              <p className="mb-2 text-lg font-medium leading-8 text-gray-900">
                {reviews.name}
              </p>
              <div className="mb-5 flex w-full items-center gap-2 lg:hidden lg:justify-between">
                {/* each key is unique and less likely to cause issues with React's reconciliation process. The keys include a prefix (filled or unfilled) along with the index to ensure uniqueness. */}
                {Array.from({ length: reviews.rating }).map((_, index) => (
                  <Star key={index} filled={true} />
                ))}
                {Array.from({ length: 5 - reviews.rating }).map((_, index) => (
                  <Star key={index + reviews.rating} filled={false} />
                ))}
              </div>
              <p className="mb-4 text-base font-normal leading-7 text-gray-400 lg:pr-8">
                {reviews.message}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href="/"
                    className="cursor-pointer whitespace-nowrap text-lg font-semibold leading-8 text-indigo-600"
                  >
                    {" "}
                    View & Reply
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                      stroke="#4F46E5"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="whitespace-nowrap text-sm font-medium leading-7 text-gray-400 lg:hidden lg:text-center">
                  {reviews.date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex flex-row justify-center max-lg:hidden max-lg:pt-6 lg:col-span-2 lg:flex-col lg:items-center">
          <div className="mb-5 flex w-full items-center gap-2 lg:justify-between">
            {Array.from({ length: reviews.rating }).map((_, index) => (
              <Star key={index} filled={true} />
            ))}
            {Array.from({ length: 5 - reviews.rating }).map((_, index) => (
              <Star key={index + reviews.rating} filled={false} />
            ))}
          </div>
          <p className="whitespace-nowrap text-lg font-medium leading-8 text-gray-400 lg:text-center">
            {reviews.date}
          </p>
        </div>
      </div>
      <div className="w-full border-b border-gray-100 pb-8"></div>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Earthen Bottle",
      imageSrc: "https://pagedone.io/asset/uploads/1704364459.png",
      message:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.",
      rating: 5,
      date: "Nov 01, 2023",
    },
    {
      id: 2,
      name: "Silver Desk Lamp",
      imageSrc: "https://pagedone.io/asset/uploads/1704364533.png",
      message:
        "The Silver Desk Lamp is not only aesthetically pleasing but also highly functional. It provides excellent lighting for work or reading, and its modern design complements any workspace. I highly recommend it!",
      rating: 4,
      date: "Dec 15, 2023",
    },
    {
      id: 3,
      name: "Cozy Throw Blanket",
      imageSrc: "https://pagedone.io/asset/uploads/1704364459.png",
      message:
        "The Cozy Throw Blanket is a must-have for chilly nights. It is incredibly soft and warm, providing the perfect comfort for relaxation. The quality is outstanding, and it adds a touch of coziness to any living space.",
      rating: 5,
      date: "Jan 22, 2024",
    },
    {
      id: 4,
      name: "Vintage Leather Chair",
      imageSrc: "https://pagedone.io/asset/uploads/1704364549.png",
      message:
        "I love my Vintage Leather Chair! The craftsmanship is superb, and the leather has a rich, luxurious feel. It is not only a stylish addition to my home but also very comfortable. The attention to detail in the design is impressive.",
      rating: 4,
      date: "Feb 10, 2024",
    },
    {
      id: 5,
      name: "Retro Record Player",
      imageSrc: "https://pagedone.io/asset/uploads/1704364459.png",
      message:
        "The Retro Record Player is a fantastic addition to any music lover’s collection. It combines vintage aesthetics with modern functionality, delivering a high-quality audio experience. I am thrilled with this purchase!",
      rating: 5,
      date: "Mar 05, 2024",
    },
  ];
  return (
    <section className="py-24 relative">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <h2 className="font-manrope mb-11 text-center text-4xl font-bold text-black">
          People Love Us
        </h2>
        <div className="mb-11 grid grid-cols-12 border-y border-gray-200 py-6">
          <div className="col-span-12 lg:col-span-10">
            <h5 className="font-manrope text-center text-2xl font-semibold leading-9 text-black">
              Reviews{" "}
              <span className="font-manrope text-center text-2xl font-semibold leading-9 text-black lg:hidden">
                {" "}
                & Rating
              </span>
            </h5>
          </div>
          <div className="col-span-12 max-lg:hidden lg:col-span-2">
            <h5 className="font-manrope text-center text-2xl font-semibold leading-9 text-black">
              Rating
            </h5>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {reviews.map((review) => (
            <Reviews key={review.id} reviews={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
