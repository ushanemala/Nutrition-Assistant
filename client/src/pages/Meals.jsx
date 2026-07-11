import PageLayout from "../components/PageLayout";

function Meals() {
  const meals = [
    {
      meal: "Breakfast",
      food: "Oats and Fruits",
      calories: 350,
    },
    {
      meal: "Lunch",
      food: "Rice and Curry",
      calories: 650,
    },
    {
      meal: "Snacks",
      food: "Nuts and Juice",
      calories: 250,
    },
    {
      meal: "Dinner",
      food: "Chapati and Vegetables",
      calories: 450,
    },
  ];

  return (
    <PageLayout title="🍽 Meal Planner">
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#1e1e1e",
        }}
      >
        <thead>
          <tr>
            <th>Meal</th>
            <th>Food</th>
            <th>Calories</th>
          </tr>
        </thead>

        <tbody>
          {meals.map((meal, index) => (
            <tr key={index}>
              <td>{meal.meal}</td>
              <td>{meal.food}</td>
              <td>{meal.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageLayout>
  );
}

export default Meals;