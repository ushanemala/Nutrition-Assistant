import PageLayout from "../components/PageLayout";

function Progress() {
  const progressData = [
    { title: "Weight Progress", value: "68 kg → 65 kg" },
    { title: "BMI Progress", value: "24.2 → 22.8" },
    { title: "Calories Burned", value: "12500 kcal" },
    { title: "Workout Completion", value: "78%" }
  ];

  return (
    <PageLayout title="📈 Progress Tracking">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >
        {progressData.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1e1e1e",
              padding: "25px",
              borderRadius: "12px",
              color: "white"
            }}
          >
            <h3>{item.title}</h3>
            <h2>{item.value}</h2>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default Progress;