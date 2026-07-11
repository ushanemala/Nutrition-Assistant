import { Link } from "react-router-dom";

function Sidebar() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const menuStyle = {
  display: "block",
  padding: "16px",
  color: "white",
  textDecoration: "none",
  marginBottom: "12px",
  borderRadius: "14px",
  background: "linear-gradient(135deg,#232323,#2f2f2f)",
  textAlign: "center",
  fontSize: "18px",
  transition: "0.3s",
};

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#181818",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
        overflowY: "auto",
      }}
    >
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        🥗 Nutrition Assistant
      </h2>

      <hr style={{ marginBottom: "20px" }} />

      <Link to="/dashboard" style={menuStyle}>🏠 Dashboard</Link>
      <Link to="/profile" style={menuStyle}>👤 Profile</Link>
      <Link to="/bmi" style={menuStyle}>⚖ BMI Calculator</Link>
      <Link to="/water" style={menuStyle}>💧 Water Tracker</Link>
      <Link to="/meals" style={menuStyle}>🍽 Meals</Link>
      <Link to="/nutrition" style={menuStyle}>🥦 Nutrition</Link>
      <Link to="/progress" style={menuStyle}>📈 Progress</Link>
      <Link to="/dietitian" style={menuStyle}>👨‍⚕️ Dietitian</Link>
      <Link to="/admin" style={menuStyle}>👨‍💼 Admin</Link>

      <button
        onClick={logout}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px",
          background: "#e53935",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        🚪 Logout
      </button>
    </div>
  );
}

export default Sidebar;