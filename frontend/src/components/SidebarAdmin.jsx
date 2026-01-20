import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SidebarAdmin() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const menuList = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Berita", path: "/berita" },
    { name: "Data Penduduk", path: "/pendudukl" },
    { name: "Mata Pencaharian", path: "/matapencarian" },
    { name: "Pendidikan", path: "/pendidikanadmin" },
    { name: "Kesehatan", path: "/kesehatanadmin" },
    { name: "Perangkat Desa", path: "/perangkatadmin" },
    { name: "UMKM", path: "/umkmadmin" },
    { name: "Layanan", path: "/layananadmin" },
    { name: "Kepala Desa", path: "/kepaladesa" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* SIDEBAR */}
      <div
        className={`
          fixed left-0 top-0 
          ${open ? "w-40" : "w-20"} 
          bg-blue-900 text-white 
          transition-all duration-300 
          flex flex-col 
          h-screen
          z-50
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-700">
          <h1 className={`${open ? "text-xl font-bold" : "hidden"}`}>Admin</h1>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 mt-4">
          {menuList.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block py-3 px-5 hover:bg-blue-700 transition"
            >
              {open ? item.name : item.name.charAt(0)}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-blue-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-300 hover:text-red-500 transition"
          >
            <LogOut size={20} />
            <span className={`${open ? "block" : "hidden"}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* SPACER UNTUK MENDORONG KONTEN KE KANAN */}
      <div className={`${open ? "w-40" : "w-20"} transition-all duration-300`} />
    </>
  );
}

