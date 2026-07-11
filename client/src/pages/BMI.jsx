import PageLayout from "../components/PageLayout";

function BMI() {
  const user = JSON.parse(localStorage.getItem("user"));

  const height = user?.height / 100;
  const bmi = (
    user?.weight /
    (height * height)
  ).toFixed(1);

  return (
    <PageLayout title="⚖ BMI Calculator">
      <div
        style={{
          background: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          width: "300px",
        }}
      >
        <h2>Your BMI: {bmi}</h2>

        <h3>
          {bmi < 18.5
            ? "Underweight"
            : bmi < 25
            ? "Normal"
            : bmi < 30
            ? "Overweight"
            : "Obese"}
        </h3>
      </div>
    </PageLayout>
  );
}

export default BMI;