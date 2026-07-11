import { useState } from "react";
import PageLayout from "../components/PageLayout";

function WaterTracker() {
  const [water, setWater] = useState(0);

  return (
    <PageLayout title="💧 Water Tracker">
      <div
        style={{
          background: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "500px",
        }}
      >
        <h2>Today's Water Intake</h2>

        <h1>{water} Glasses</h1>

        <button
          onClick={() => setWater(water + 1)}
          style={buttonStyle}
        >
          + Add Glass
        </button>

        <button
          onClick={() => setWater(0)}
          style={{
            ...buttonStyle,
            background: "#ff4d4d",
          }}
        >
          Reset
        </button>

        <div
          style={{
            marginTop: "30px",
          }}
        >
          Goal: 8 Glasses per day
        </div>
      </div>
    </PageLayout>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  marginRight: "10px",
  marginTop: "20px",
  border: "none",
  borderRadius: "8px",
  background: "#4CAF50",
  color: "white",
  cursor: "pointer",
};

export default WaterTracker;