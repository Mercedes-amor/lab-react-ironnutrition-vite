import { Card, Col, Button } from "antd";
// import "../test/App.css";

function FoodBox(props) {
  const { id, name, calories, image, servings } = props.food;

  const handleDelete = (id) => {
    const allNotDeletedFood = props.allFoods.filter((oneFood) => {
      return id === oneFood.id ? false : true;
    });

    props.setAllFoods(allNotDeletedFood);
  };
  return (
    <Col className="FoodBoxCol" key={id}>
      <Card
        style={{ width: 300, height: 400, margin: "auto", textAlign: "left" }}
      >
        <h2>{name}</h2>
        <hr />
        <img src={image} width="150px" />

        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>

        <p>
          <b>Total Calories:{servings * calories} </b> kcal
        </p>

        <Button
          type="primary"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </Button>
        <br />
      </Card>
    </Col>
  );
}

export default FoodBox;
