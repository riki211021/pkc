import { useEffect, useState } from "react";
import api from "../../api/axios";
import SidebarAdmin from "../../components/SidebarAdmin";

export default function Berita() {
  const [berita, setBerita] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    judul: "",
    tanggal: "",
    gambar: null,
    isi: "",
  });

  const fetchBerita = async () => {
    const res = await api.get("/berita");
    setBerita(res.data);
  };

  useEffect(() => {
    fetchBerita();
  }, []);

  const handleOpen = (item = null) => {
    setEditing(item);

    if (item) {
      setForm({
        judul: item.judul,
        tanggal: item.tanggal,
        gambar: null,
        isi: item.isi,
      });
    } else {
      setForm({
        judul: "",
        tanggal: "",
        gambar: null,
        isi: "",
      });
    }

    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("judul", form.judul);
    formData.append("tanggal", form.tanggal);
    formData.append("isi", form.isi);
    if (form.gambar) formData.append("gambar", form.gambar);

    if (editing) {
      // Update
      await api.post(`/berita/${editing.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      // Create
      await api.post(`/berita`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }

    setModalOpen(false);
    fetchBerita();
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus berita ini?")) return;

    await api.delete(`/berita/${id}`);
    fetchBerita();
  };

  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <SidebarAdmin />

      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Manajemen Berita</h1>
          <button onClick={() => handleOpen()} className="bg-blue-600 text-white px-4 py-2 rounded">
            + Tambah Berita
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Judul</th>
                <th className="p-3 border">Tanggal</th>
                <th className="p-3 border">Gambar</th>
                <th className="p-3 border">Isi</th>
                <th className="p-3 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {berita.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border">{item.judul}</td>
                  <td className="p-3 border">{item.tanggal}</td>
                  <td className="p-3 border">
                    <img src={item.gambar_url} alt={item.judul} className="w-full h-64 object-cover" />
                  </td>
                  <td className="p-3 border">{item.isi.substring(0, 50)}...</td>
                  <td className="p-3 border">
                    <button onClick={() => handleOpen(item)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="bg-red-600 text-white px-3 py-1 rounded">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4">{editing ? "Edit Berita" : "Tambah Berita"}</h2>

              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Judul" className="w-full p-2 border rounded mb-3" value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} required />

                <input type="date" className="w-full p-2 border rounded mb-3" value={form.tanggal} onChange={(e) => setForm({ ...form, tanggal: e.target.value })} required />

                <input type="file" className="w-full p-2 border rounded mb-3" onChange={(e) => setForm({ ...form, gambar: e.target.files[0] })} />

                <textarea placeholder="Isi berita..." className="w-full p-2 border rounded mb-3 h-32" value={form.isi} onChange={(e) => setForm({ ...form, isi: e.target.value })}></textarea>

                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded">
                    Batal
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Simpan</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
