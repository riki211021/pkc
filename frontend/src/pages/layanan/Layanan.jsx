import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn, FileText, UserCheck, ClipboardList } from "lucide-react";

export default function Layanan() {
  const navigate = useNavigate();

  const layananOnline = [
    {
      id: 1,
      nama: "Pengajuan Surat Keterangan",
      icon: <FileText size={32} className="text-green-700" />,
      deskripsi: "Layanan surat menyurat secara online.",
    },
    {
      id: 2,
      nama: "Pelayanan Kependudukan",
      icon: <UserCheck size={32} className="text-green-700" />,
      deskripsi: "Pembuatan KK, KTP, dan perubahan data.",
    },
    {
      id: 3,
      nama: "Permohonan Bantuan Sosial",
      icon: <ClipboardList size={32} className="text-green-700" />,
      deskripsi: "Pengajuan bantuan sosial desa.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-10">

      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-green-700 font-semibold hover:text-green-900"
      >
        <ArrowLeft size={22} />
        Kembali
      </button>

      {/* Judul Halaman */}
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Layanan Online Desa
      </h1>

      {/* Daftar Layanan */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {layananOnline.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <div>
                <h2 className="text-xl font-semibold">{item.nama}</h2>
                <p className="text-gray-600 text-sm mt-1">{item.deskripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Login */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-800 transition"
        >
          <LogIn size={22} />
          Login untuk Mengakses Layanan
        </button>
      </div>
    </div>
  );
}
