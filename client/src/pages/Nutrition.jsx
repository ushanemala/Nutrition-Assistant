import PageLayout from "../components/PageLayout";

function Nutrition() {
  return (
    <PageLayout title="🥦 Nutrition Analysis">
      <div style={cardStyle}>
        <h2>Calories</h2>
        <h1>1850 kcal</h1>
      </div>

      <div style={cardStyle}>
        <h2>Protein</h2>
        <h1>120 g</h1>
      </div>

      <div style={cardStyle}>
        <h2>Carbohydrates</h2>
        <h1>230 g</h1>
      </div>

      <div style={cardStyle}>
        <h2>Fat</h2>
        <h1>55 g</h1>
      </div>
    </PageLayout>
  );
}

const cardStyle = {
  background: "#1e1e1e",
  padding: "25px",
  marginBottom: "20px",
  borderRadius: "12px",
};

export default Nutrition;