import SidebarAdmin from "../../components/SidebarAdmin";

export default function AdminDashboard() {
  return (
    <div className="flex bg-gray-100">

      {/* Sidebar */}
      <SidebarAdmin />

      {/* Content */}
      <div className="flex-1 p-10 ">
        <h1 className="text-3xl font-bold mb-4">Dashboard Admin</h1>
        <p className="text-gray-600">
          Selamat datang di dashboard admin. Silakan pilih menu di sebelah kiri.
        </p>
      </div>

    </div>
  );
}
