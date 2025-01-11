import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return (
    <div className=" flex justify-center shadow-md ">
      <div className="container">
        <div className="flex justify-between items-center ">
          <input
            type="text"
            placeholder="Enter your search"
            className="bg-zinc-100 rounded-lg p-2"
          />
          <div className="inline-flex gap-4 text-2xl text-zinc-500">
            <a href="#">
              <FiHeart className="hover:text-red-600" />
            </a>
            <a href="#">
              <AiOutlineShoppingCart />
            </a>
            <a href="#">
              <AiOutlineUserAdd />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
