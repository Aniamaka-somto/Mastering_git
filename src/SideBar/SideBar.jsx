import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import Categories from "./Categories/Categories";

const SideBar = () => {
  return (
    <div className="nav shadow-xl bg-white h-screen w-52 p-5 pt-7 flex flex-col gap-2">
      <AiOutlineShoppingCart className="text-3xl" />
      <div className="pt-5">
        <Categories />
      </div>
    </div>
  );
};

export default SideBar;
