import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // CAPTCHA
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");

  const navigate = useNavigate();

  // Generate captcha
  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10)); // angka 0 - 9
    setNum2(Math.floor(Math.random() * 10));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDASI CAPTCHA
    if (parseInt(captchaInput) !== num1 + num2) {
      alert("Jawaban CAPTCHA salah!");
      return;
    }

    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login gagal");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        
        {/* Tombol Kembali */}
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          ⬅ Kembali
        </button>

        <h2 style={styles.title}>Login Sistem Desa</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Email */}
          <input
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          {/* Password */}
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          {/* CAPTCHA */}
          <label style={styles.captchaLabel}>
            Berapa hasil dari: <b>{num1} + {num2}</b> ?
          </label>
          <input
            style={styles.input}
            type="number"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            placeholder="Masukkan jawaban"
            required
          />

          {/* Tombol Login */}
          <button type="submit" style={styles.loginBtn}>Login</button>
        </form>
      </div>
    </div>
  );
}

/* ============================ STYLE ============================ */
const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4ade80, #16a34a)",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    background: "#fff",
    padding: "2rem",
    borderRadius: 12,
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: 15,
    left: 15,
    background: "transparent",
    border: "none",
    color: "#16a34a",
    cursor: "pointer",
    fontSize: "14px",
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#16a34a",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "12px",
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  loginBtn: {
    background: "#16a34a",
    padding: "12px",
    borderRadius: 8,
    border: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  captchaLabel: {
    fontSize: "14px",
    marginBottom: "-8px",
    fontWeight: "bold",
  },
};
