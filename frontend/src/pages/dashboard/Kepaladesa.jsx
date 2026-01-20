import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import SidebarAdmin from "../../components/SidebarAdmin";

export default function KepalaDesa() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ nama: "", foto: null, jabatan: "Kepala Desa", periode: "" });
  const [editingId, setEditingId] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await api.get("/kepala-desa");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setForm({ ...form, foto: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", form.nama);
    formData.append("jabatan", form.jabatan);
    formData.append("periode", form.periode);
    if (form.foto) formData.append("foto", form.foto);

    try {
      if (editingId) {
        await api.post(`/kepaladesa/${editingId}?_method=PUT`, formData);
      } else {
        await api.post("/kepaladesa", formData);
      }
      resetForm();
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setForm({ nama: "", foto: null, jabatan: "Kepala Desa", periode: "" });
    setEditingId(null);
    setPreview(null);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({ nama: item.nama, jabatan: item.jabatan, periode: item.periode, foto: null });
    setPreview(item.foto ? `http://localhost:8000/storage/${item.foto}` : null);
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus data ini?")) return;
    try {
      await api.delete(`/kepaladesa/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">Manajemen Kepala Desa</h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Nama</label>
              <input name="nama" value={form.nama} onChange={handleChange} className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1">Periode</label>
              <input name="periode" value={form.periode} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Foto</label>
              <input type="file" name="foto" onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
          </div>

          {preview && (
            <img src={preview} alt="Preview" className="w-32 h-32 rounded-full mt-4 object-cover" />
          )}

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow">
            {editingId ? "Update" : "Tambah"}
          </button>
        </form>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Foto</th>
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Jabatan</th>
                <th className="p-2 border">Periode</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 border text-center">
                    <img
                      src={item.foto ? `http://localhost:8000/storage/${item.foto}` : "https://via.placeholder.com/80"}
                      className="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                  </td>
                  <td className="p-2 border">{item.nama}</td>
                  <td className="p-2 border">{item.jabatan}</td>
                  <td className="p-2 border">{item.periode}</td>
                  <td className="p-2 border text-center space-x-2">
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded" onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={() => handleDelete(item.id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
