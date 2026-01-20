import { useEffect, useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";
import api from "../../api/axios";

export default function LayananAdmin() {
  const [layanan, setLayanan] = useState([]);
  const [form, setForm] = useState({ nama: "", icon: "", deskripsi: "" });
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const API = "/layanan";

  // Fetch data
  const getLayanan = async () => {
    try {
      const res = await api.get(API);
      setLayanan(res.data);
    } catch (err) {
      console.error("Error fetching layanan:", err);
    }
  };

  useEffect(() => {
    getLayanan();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Tambah / Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await api.put(`${API}/${editId}`, form);
      } else {
        await api.post(API, form);
      }

      setForm({ nama: "", icon: "", deskripsi: "" });
      setEditId(null);
      setShowForm(false);
      getLayanan();
    } catch (err) {
      console.error("Error saving layanan:", err);
    }
  };

  // Edit data
  const handleEdit = (item) => {
    setForm({
      nama: item.nama,
      icon: item.icon || "",
      deskripsi: item.deskripsi || "",
    });
    setEditId(item.id);
    setShowForm(true);
  };

  // Hapus
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus?")) return;

    try {
      await api.delete(`${API}/${id}`);
      getLayanan();
    } catch (err) {
      console.error("Error deleting layanan:", err);
    }
  };

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Manajemen Layanan</h1>

        {/* Tombol */}
        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
            setForm({ nama: "", icon: "", deskripsi: "" });
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          + Tambah Layanan
        </button>

        {/* Form Popup */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                {editId ? "Edit Layanan" : "Tambah Layanan"}
              </h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama layanan"
                  value={form.nama}
                  onChange={handleChange}
                  className="w-full border p-2 mb-3"
                  required
                />

                <input
                  type="text"
                  name="icon"
                  placeholder="Icon (URL atau nama ikon)"
                  value={form.icon}
                  onChange={handleChange}
                  className="w-full border p-2 mb-3"
                />

                <textarea
                  name="deskripsi"
                  placeholder="Deskripsi"
                  value={form.deskripsi}
                  onChange={handleChange}
                  className="w-full border p-2 mb-3"
                />

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-400 px-4 py-2 rounded text-white"
                  >
                    Batal
                  </button>

                  <button
                    type="submit"
                    className="bg-green-600 px-4 py-2 rounded text-white"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TABLE */}
        <table className="w-full bg-white shadow mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Nama</th>
              <th className="p-3 border">Icon</th>
              <th className="p-3 border">Deskripsi</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {layanan.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Tidak ada data
                </td>
              </tr>
            ) : (
              layanan.map((item) => (
                <tr key={item.id}>
                  <td className="p-3 border">{item.id}</td>
                  <td className="p-3 border">{item.nama}</td>
                  <td className="p-3 border">{item.icon}</td>
                  <td className="p-3 border">{item.deskripsi}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
