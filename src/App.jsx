import "./App.css";
import { useState } from "react";

import FoodList from "./components/FoodList";

function App() {
  return (
    <div className="App">
      {/* <FoodBox food={ {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
    } } 
    /> */}

      <FoodList />
    </div>
  );
}

export default App;
