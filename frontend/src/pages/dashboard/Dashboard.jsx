import AdminDashboard from "./AdminDashboard";
import DriverDashboard from "./DriverDashboard";
import UserDashboard from "./UserDashboard";

export default function Dashboard() {
  // Nanti ganti ini dengan data dari backend atau localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Anda belum login</h1>
      </div>
    );
  }

  switch (user.role) {
    case "admin":
      return <AdminDashboard />;
    case "driver":
      return <DriverDashboard />;
    case "user":
      return <UserDashboard />;
    default:
      return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Role tidak dikenal</h1>
        </div>
      );
  }
}
