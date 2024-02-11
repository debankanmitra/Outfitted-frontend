

const Category = () => {
    return (
        <div className="pb-16">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full ">
                    <div className="flex flex-col jusitfy-center items-center space-y-10 ">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9">Shop By Category</h1>
                        </div>
                        {/* GRID */}
                        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full ">
                            {/* PHOTO 1 */}
                            <div className="relative group flex justify-center items-center md:h-full ">
                                <img className="object-center object-cover w-full h-60 md:h-96 lg:h-full rounded-xl" src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="girl" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                            {/* PHOTO 2 */}
                            <div className="relative group flex justify-center items-center ">
                                <img className="object-center object-cover h-60 md:h-96 lg:h-full w-full rounded-xl" src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="shoe" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Men</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                            {/* PHOTO 3 */}
                            <div className="relative group justify-center items-center hidden lg:flex ">
                                <img className="object-center object-cover md:h-full w-full rounded-xl" src="https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="girl" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Kids</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                            <div className="relative group flex justify-center items-center mt-4 md:hidden md:mt-8 lg:hidden">
                                <img className="object-center object-cover h-full w-full hidden md:block rounded-xl" src="https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="girl" />
                                <img className="object-center object-cover h-60 w-full md:hidden rounded-xl" src="https://images.pexels.com/photos/3036405/pexels-photo-3036405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Kids</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                        </div>
                        <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                            <img className="object-center object-cover h-96 w-full hidden md:block rounded-xl" src="https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="girl" />
                            <img className="object-center object-cover h-full w-full sm:hidden rounded-xl" src="https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Kids</button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
