function FoodBox(props) {
  const { id, name, calories, image, servings } = props.food;

  const handleDelete = (id) => {
    const allNotDeletedFood = props.allFoods.filter((oneFood) => {
      return id === oneFood.id ? false : true;
    });

    props.setAllFoods(allNotDeletedFood);
  };
  return (
    <div key={id}>
      <p>{name}</p>

      <img src={image} width="150px" />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories:{servings * calories} </b> kcal
      </p>

      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default FoodBox;
