import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn, FileText, UserCheck, ClipboardList } from "lucide-react";
import api from "../../api/axios";

const icons = {
  FileText,
  UserCheck,
  ClipboardList,
};

export default function Layanan() {
  const [layanans, setLayanans] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedLayanan, setSelectedLayanan] = useState(null);

  const [form, setForm] = useState({
    nama: "",
    nik: "",
    wa: "",
    judul: "",
    pesan: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/layanan").then((res) => setLayanans(res.data));
  }, []);

  const openForm = (layanan) => {
    setSelectedLayanan(layanan);
    setForm({ ...form, judul: layanan.nama });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nomorDesa = "6281337224409";

    const pesan = `
*Pengajuan Layanan Desa*

Nama Pemohon : ${form.nama}
NIK          : ${form.nik}
WhatsApp     : ${form.wa}
Jenis Layanan: ${form.judul}

Pesan:
${form.pesan}
    `;

    window.open(
      `https://wa.me/${nomorDesa}?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );

    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 px-6 pt-28 pb-16">

      {/* KEMBALI */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-blue-700 font-semibold hover:text-blue-900 transition"
      >
        <ArrowLeft size={22} />
        Kembali
      </button>

      {/* JUDUL */}
      <h1 className="text-3xl font-bold text-indigo-800 mb-10 text-center">
        Layanan Online Desa
      </h1>

      {/* DAFTAR LAYANAN */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {layanans.map((item) => {
          const Icon = icons[item.icon] || FileText;

          return (
            <div
              key={item.id}
              onClick={() => openForm(item)}
              className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition border border-blue-100"
            >
              <div className="flex items-center gap-4">
                <Icon size={34} className="text-sky-600" />
                <div>
                  <h2 className="text-xl font-semibold text-indigo-800">
                    {item.nama}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LOGIN */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 bg-sky-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-sky-600 transition"
        >
          <LogIn size={22} />
          Login untuk Mengakses Layanan
        </button>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-[9999]">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">
              Ajukan Permohonan
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nama"
                placeholder="Nama Pemohon"
                value={form.nama}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                required
              />

              <input
                type="number"
                name="nik"
                placeholder="NIK"
                value={form.nik}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                required
              />

              <input
                type="text"
                name="wa"
                placeholder="No WhatsApp"
                value={form.wa}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                required
              />

              <input
                type="text"
                name="judul"
                readOnly
                value={form.judul}
                className="w-full p-3 border rounded-lg bg-gray-100"
              />

              <textarea
                name="pesan"
                placeholder="Pesan / Keterangan"
                value={form.pesan}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                required
              />

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition"
                >
                  Kirim ke WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
