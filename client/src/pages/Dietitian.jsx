import PageLayout from "../components/PageLayout";

function Dietitian() {
  const clients = [
    "Usha",
    "Rahul",
    "Ananya",
    "Sai"
  ];

  return (
    <PageLayout title="👨‍⚕ Dietitian Dashboard">
      <div
        style={{
          background: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px"
        }}
      >
        <h2>Assigned Clients</h2>

        <ul>
          {clients.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>

        <button
          style={{
            padding: "12px 20px",
            marginTop: "20px",
            background: "#4CAF50",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer"
          }}
        >
          Create Meal Plan
        </button>
      </div>
    </PageLayout>
  );
}

export default Dietitian;