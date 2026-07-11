import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://nutrition-assistant-8mcc.onrender.com/api/auth/register",
        formData
      );

      alert("Registration Successful!");
      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "420px",
          padding: "30px",
          background: "#1e1e1e",
          borderRadius: "15px",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          🥗 Register
        </h1>

        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="age"
          placeholder="Age"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="height"
          placeholder="Height (cm)"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="weight"
          placeholder="Weight (kg)"
          onChange={handleChange}
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Register
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Register;