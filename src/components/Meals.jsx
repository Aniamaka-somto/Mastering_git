import axios from "axios";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mealList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div key={idMeal}>
        <h1>{strMeal}</h1>
        <img src={strMealThumb} alt={strMeal} height={50} width={50} />
        <p>{idMeal}</p>
      </div>
    );
  });
  return <div>{mealList}</div>;
};

export default Meals;
