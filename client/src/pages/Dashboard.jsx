import Sidebar from "../components/Sidebar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const cards = [
    { title: "🔥 Calories", value: "1850 kcal" },
    { title: "💧 Water Intake", value: "2.5 L" },
    { title: "⚖ BMI", value: "22.8" },
    { title: "📈 Progress", value: "74%" },
    { title: "🍽 Meals Today", value: "4" },
    { title: "🎯 Goal", value: "Weight Loss" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          padding: "30px",
          width: "100%",
          minHeight: "100vh",
          background: "#121212",
          color: "white",
        }}
      >
        <h1>🏠 Dashboard</h1>
        <h2>Welcome back, {user?.fullName} 👋</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                background: "#1e1e1e",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            >
              <h3>{card.title}</h3>
              <h1>{card.value}</h1>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            background: "#1e1e1e",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h2>📋 Today's Recommendations</h2>

          <ul>
            <li>🥗 Increase protein intake by 20g.</li>
            <li>💧 Drink 2 more glasses of water.</li>
            <li>🚶 Walk for 30 minutes today.</li>
            <li>🍎 Add fruits to your evening snack.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;