

import Image from 'next/image';

export default function Home() {
  const products = [
    { id: 1, name: 'Product 1', price: '$25', image: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$35', image: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$45', image: '/product3.jpg' },
    { id: 4, name: 'Product 4', price: '$55', image: '/product4.jpg' },
    // Ko'proq mahsulotlar qo'shishingiz mumkin
  ];

  return (
    <div className="min-h-screen p-8 pb-20 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Mahsulotlar</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs w-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors">
                Sotib olish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
