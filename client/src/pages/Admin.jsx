import PageLayout from "../components/PageLayout";

function Admin() {
  const users = 24;
  const dietitians = 5;
  const activePlans = 18;

  return (
    <PageLayout title="👨‍💼 Admin Dashboard">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >
        <div style={card}>
          <h2>Total Users</h2>
          <h1>{users}</h1>
        </div>

        <div style={card}>
          <h2>Dietitians</h2>
          <h1>{dietitians}</h1>
        </div>

        <div style={card}>
          <h2>Active Plans</h2>
          <h1>{activePlans}</h1>
        </div>
      </div>
    </PageLayout>
  );
}

const card = {
  background: "#1e1e1e",
  padding: "30px",
  borderRadius: "12px",
  color: "white"
};

export default Admin;