import ProductCard from "./ProductCard";

const products = [
    {
        productid: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        Images: 'kids/t7ehtldjzce1cmsttj8c',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        productid: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        Images: 'kids/piqlhxfimzyzeihacxca',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        productid: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        Images: 'mens/oerutusp6nysynkbqa1h',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        productid: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        Images: 'mens/zkhdyzo918wh6kfh9a8m',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        productid: 5,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        Images: 'womens/tenm8bkxpz2tzbx3zqo8',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        productid: 6,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        Images: 'womens/kdl8qprcmdsrjzuudpd8',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      }
]
function Featured() {
  return (
<div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-10">Featured Products</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
            // <a key={product.productid} href={product.href} className="group">
            //     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            //     <img
            //     src={product.Images}
            //     alt={product.imageAlt}
            //     className="h-full w-full object-cover object-center group-hover:opacity-75"
            //     />
            //     </div>
            //     <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            //     <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            // </a>
            <ProductCard key={product.productid} product={product}/>
            ))}
        </div>
    </div>
</div>
  );
}

export default Featured;
