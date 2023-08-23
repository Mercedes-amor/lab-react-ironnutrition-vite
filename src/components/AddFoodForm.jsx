import { useState } from "react";

function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [servingsInput, setServingsInput] = useState("");

  const handleName = (event) => {
    setNameInput(event.target.value);
  };

  const handleImage = (event) => {
    setImageInput(event.target.value);
  };

  const handleCalories = (event) => {
    setCaloriesInput(event.target.value);
  };

  const handleServings = (event) => {
    setServingsInput(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    let newFood = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput,
    };

    let clone = JSON.parse(JSON.stringify(props.allFoods));

    clone.unshift(newFood);
    props.setAllFoods(clone);
  };

  return (
    <form action="">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" onChange={handleName} value={nameInput} />
      <br />
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        name="image"
        value={imageInput}
        onChange={handleImage}
      />
      <br />
      <label htmlFor="calories">Calories:</label>
      <input
        type="text"
        name="calories"
        value={caloriesInput}
        onChange={handleCalories}
      />
      <br />
      <label htmlFor="servings">Servings:</label>
      <input
        type="number"
        name="servings"
        value={servingsInput}
        onChange={handleServings}
      />
      <br />

      <button onClick={handleAdd}>Create</button>
    </form>
  );
}

export default AddFoodForm;
