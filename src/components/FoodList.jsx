import { useState } from "react";

import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";

function FoodList() {
  const [allFoods, setAllFoods] = useState(foodsJson);

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />

      {allFoods.map((oneFood) => {
        return (
          <FoodBox
            food={oneFood}
            allFoods={allFoods}
            setAllFoods={setAllFoods}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
