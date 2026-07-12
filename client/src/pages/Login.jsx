import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
  "https://nutrition-assistant-8mcc.onrender.com/api/auth/login",
  {
    email,
    password,
  }
);

      // Save token
      localStorage.setItem("token", response.data.token);

      // Save user details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful!");

      // Redirect to dashboard
      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
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
          background: "#1e1e1e",
          padding: "40px",
          borderRadius: "15px",
          width: "380px",
          color: "white",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        }}
      >
        <h1
  style={{
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "52px",
    lineHeight: "1.3",
    letterSpacing: "2px",
  }}
>
  🥗 Nutrition <br />
  Assistant
</h1>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#ccc",
          }}
        >
          Login to Continue
        </h3>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "16px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "16px",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#ccc",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#4CAF50",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;