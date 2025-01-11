import React from "react";

const Categories = () => {
  return (
    <section className="w-full flex flex-col gap-2 p-4 justify-center pl-10 ">
      <h1 className="text-xl font-semibold">Categories</h1>
      <div className="flex gap-2">
        <input
          type="radio"
          name="sneakers"
          className="checked:bg-orange-400 select-none"
        />
        <label htmlFor="sneakers">Sneakers</label>
      </div>
      <div className="flex gap-2">
        <input
          type="radio"
          name="heels"
          className="checked:bg-orange-400 select-none"
        />
        <label htmlFor="heels">Heels</label>
      </div>
      <div className="flex gap-2">
        <input type="radio" name="flats" />
        <label htmlFor="flats">Flats</label>
      </div>
      <div className="flex gap-2">
        <input type="radio" name="sandals" />
        <label htmlFor="flats">Sandals</label>
      </div>
    </section>
  );
};

export default Categories;
