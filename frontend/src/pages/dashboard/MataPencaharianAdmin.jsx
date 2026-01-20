import { useEffect, useState } from "react";
import api from "../../api/axios";
import SidebarAdmin from "../../components/SidebarAdmin";

export default function MataPencaharianAdmin() {
  const [pekerjaan, setPekerjaan] = useState([]);
  const [namaPekerjaan, setNamaPekerjaan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [editId, setEditId] = useState(null);

  // Load Data
  const getPekerjaan = async () => {
    try {
      const res = await api.get("/pekerjaanadmin");
      setPekerjaan(res.data);
    } catch (err) {
      console.error("Gagal load data:", err);
    }
  };

  useEffect(() => {
    getPekerjaan();
  }, []);

  // Submit Create / Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nama_pekerjaan: namaPekerjaan,
      jumlah: jumlah
    };

    try {
      if (editId) {
        await api.put(`/pekerjaan/${editId}`, payload);
      } else {
        await api.post("/pekerjaan", payload);
      }

      setNamaPekerjaan("");
      setJumlah("");
      setEditId(null);
      getPekerjaan();
    } catch (err) {
      console.error("Gagal submit:", err);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setEditId(item.id);
    setNamaPekerjaan(item.nama_pekerjaan);
    setJumlah(item.jumlah);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Hapus data ini?")) return;

    try {
      await api.delete(`/pekerjaan/${id}`);
      getPekerjaan();
    } catch (err) {
      console.error("Gagal hapus:", err);
    }
  };

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-5">Data Mata Pencaharian</h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded mb-8">
          <div className="mb-4">
            <label className="font-semibold">Nama Pekerjaan</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              value={namaPekerjaan}
              onChange={(e) => setNamaPekerjaan(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="font-semibold">Jumlah</label>
            <input
              type="number"
              className="w-full p-2 border rounded mt-1"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              required
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            {editId ? "Update Data" : "Tambah Data"}
          </button>
        </form>

        {/* TABLE */}
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">Nama Pekerjaan</th>
              <th className="p-2">Jumlah</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {pekerjaan.length > 0 ? (
              pekerjaan.map((item, index) => (
                <tr key={item.id} className="text-center border-b">
                  <td className="p-2">{index + 1}</td>
                  <td>{item.nama_pekerjaan}</td>
                  <td>{item.jumlah}</td>
                  <td className="p-2">
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
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}
