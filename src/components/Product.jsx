import React, { useState } from "react";
import products from "../../public/product.json";

const Product = () => {
  const [items, setItems] = useState(products);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-5 md:gap-6 p-2">
      {items.map((item, i) => {
        return (
          <div key={i} className="max-w-xs rounded-md shadow-xl hover:scale-105 transition-all ease-in dark:bg-gray-50 dark:text-gray-800">
            <img
              src={item.image}
              alt=""
              className="object-cover object-center w-full rounded-t-md md:h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-md md:text-3xl  font-semibold tracking-wide">
                  {item.name.length > 90
                    ? item.name.slice(0, 90) + "..."
                    : item.name}
                </h2>
                <p className="dark:text-gray-800">
                  {item.description.slice(0, 100)}....
                </p>
              </div>
              <a href={item.link}>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 cursor-pointer
                  hover:shadow-md
                  hover:shadow-violet-300
                  "
                >
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
