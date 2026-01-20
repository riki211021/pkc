import { useEffect, useState } from "react";
import api from "../../api/axios";
import SidebarAdmin from "../../components/SidebarAdmin";

export default function PerangkatDesaAdmin() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    nama: "",
    jabatan: "",
    foto: null,
  });

  // GET DATA
  const fetchData = async () => {
    try {
      const res = await api.get("/perangkat-desa");
      const result = Array.isArray(res.data) ? res.data : res.data.data;
      setData(result);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "foto") {
      setForm({ ...form, foto: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = new FormData();
    sendData.append("nama", form.nama);
    sendData.append("jabatan", form.jabatan);
    if (form.foto) sendData.append("foto", form.foto);

    try {
      if (editId) {
        // UPDATE
        await api.post(`/perangkat-desa/${editId}`, sendData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // CREATE
        await api.post("/perangkat-desa", sendData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchData();
      setModalOpen(false);
      setEditId(null);
      setForm({ nama: "", jabatan: "", foto: null });
    } catch (error) {
      console.error("Gagal submit:", error);
    }
  };

  // DELETE DATA
  const handleDelete = async (id) => {
    if (!confirm("Hapus data ini?")) return;

    try {
      await api.delete(`/perangkat-desa/${id}`);
      fetchData();
    } catch (error) {
      console.error("Gagal hapus:", error);
    }
  };

  // OPEN EDIT
  const openEdit = (item) => {
    setEditId(item.id);
    setForm({
      nama: item.nama,
      jabatan: item.jabatan,
      foto: null,
    });
    setModalOpen(true);
  };

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold mb-5">Perangkat Desa</h1>

        <button
          onClick={() => {
            setModalOpen(true);
            setEditId(null);
            setForm({ nama: "", jabatan: "", foto: null });
          }}
          className="mb-5 bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Tambah Perangkat
        </button>

        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Nama</th>
                <th className="p-3">Jabatan</th>
                <th className="p-3">Foto</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">{item.nama}</td>
                  <td className="p-3">{item.jabatan}</td>
                  <td className="p-3">
                    {item.foto ? (
                      <img
                        src={`http://localhost:8000/storage/${item.foto}`}
                        className="w-16 rounded"
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => openEdit(item)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
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
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 w-96 rounded shadow">
              <h2 className="text-xl font-bold mb-4">
                {editId ? "Edit Perangkat Desa" : "Tambah Perangkat Desa"}
              </h2>

              <form onSubmit={handleSubmit}>
                <label>Nama</label>
                <input
                  type="text"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-3"
                  required
                />

                <label>Jabatan</label>
                <input
                  type="text"
                  name="jabatan"
                  value={form.jabatan}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-3"
                  required
                />

                <label>Foto</label>
                <input
                  type="file"
                  name="foto"
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-3"
                />

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    {editId ? "Update" : "Tambah"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
