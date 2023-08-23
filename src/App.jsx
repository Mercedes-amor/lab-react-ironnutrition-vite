import "./App.css";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [allFoods, setAllFoods] = useState(foodsJson);
  console.log("allFoods", allFoods);
  return (
    <div className="App">
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

      {/* <FoodBox food={ {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
    } } 
    /> */}
    </div>
  );
}

export default App;
