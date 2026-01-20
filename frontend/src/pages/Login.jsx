import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import pesilatIcon from "../assets/img/kampung-pesilat.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // CAPTCHA
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        {/* KEMBALI */}
        <button style={styles.backBtn} onClick={() => navigate("/")}>
          ⬅ Kembali
        </button>

        <h2 style={styles.title}>Login Sistem Desa</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />

          <input type="password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />

          <label style={styles.captchaLabel}>
            Berapa hasil dari:{" "}
            <b>
              {num1} + {num2}
            </b>{" "}
            ?
          </label>

          <input style={styles.input} type="number" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} placeholder="Masukkan jawaban" required />

          <button type="submit" style={styles.loginBtn}>
            Login
          </button>
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
    padding: 20,

    backgroundImage: `
    linear-gradient(
      135deg,
      rgba(37,99,235,0.95),
      rgba(30,64,175,0.95),
      rgba(14,165,233,0.95)
    ),
    url(${pesilatIcon})
  `,
    backgroundRepeat: "repeat",
    backgroundSize: "auto, 180px 180px",
    backgroundPosition: "center",
  },

  card: {
    width: "100%",
    maxWidth: 420,
    background: "#ffffff",
    padding: "2.2rem",
    borderRadius: 16,
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: 16,
    left: 16,
    background: "transparent",
    border: "none",
    color: "#2563eb",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
  },
  title: {
    textAlign: "center",
    marginBottom: "1.8rem",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1e3a8a",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "12px",
    borderRadius: 10,
    border: "1px solid #c7d2fe",
    fontSize: "16px",
    outline: "none",
  },
  loginBtn: {
    background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
    padding: "12px",
    borderRadius: 10,
    border: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "0.8rem",
  },
  captchaLabel: {
    fontSize: "14px",
    marginBottom: "-6px",
    fontWeight: "600",
    color: "#1e40af",
  },
};
