import React from "react";

const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
}) => {
  return (
    <div className="flex justify-center w-full relative hover:scale-105 transition-transform">
      <div className=" w-full max-w-xs p-4 ring-1 shadow-lg ring-zinc-300 flex flex-col aspect-[3/4] rounded-md">
        <div className="flex items-center justify-center w-full mb-2 pt-4">
          <figure className="aspect-square w-24">
            <img
              src={img}
              alt={title}
              className="object-contain"
              width={95}
              height={95}
            />
          </figure>
        </div>
        <div className="">
          <p className="text-xs">{title}</p>
          <h1 className="text-lg font-semibold">
            ${newPrice} <del className="text-sm">{prevPrice}</del>
          </h1>
        </div>
        <button
          className="bg-orange-500 rounded-sm text-white "
          onClick={"#add"}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
