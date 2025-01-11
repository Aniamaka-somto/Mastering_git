import React, { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Meals from "./components/Meals";
import Form from "./components/Form";
import Nav from "./Naviation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommendend/Recommended";
import ProductData from "./db/ProductData";
import Card from "./components/Card";
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Form /> */}
      <Nav />
      <SideBar />
      <Products />
      <Recommended />
    </>
  );
}

export default App;
