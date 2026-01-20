import { useEffect, useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";
import axios from "axios";

export default function PendidikanAdmin() {
  const [pendidikan, setPendidikan] = useState([]);
  const [kategori, setKategori] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [editId, setEditId] = useState(null);

  // Fetch data
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/pendidikan");
      setPendidikan(res.data); // pastikan API return array
    } catch (error) {
      console.error("Gagal fetch:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Create / Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // UPDATE
        await axios.put(`http://localhost:8000/api/pendidikan/${editId}`, {
          kategori,
          jumlah,
        });
      } else {
        // CREATE
        await axios.post("http://localhost:8000/api/pendidikan", {
          kategori,
          jumlah,
        });
      }

      setKategori("");
      setJumlah(0);
      setEditId(null);
      getData();

    } catch (err) {
      console.error("Gagal menyimpan:", err);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/pendidikan/${id}`);
      getData();
    } catch (err) {
      console.error("Gagal hapus:", err);
    }
  };

  // Set data ke form untuk edit
  const handleEdit = (item) => {
    setEditId(item.id);
    setKategori(item.kategori);
    setJumlah(item.jumlah);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <SidebarAdmin />

      {/* CONTENT */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">Pendidikan — Admin</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-lg shadow-md mb-6"
        >
          <h2 className="text-xl font-bold mb-3">
            {editId ? "Edit Data Pendidikan" : "Tambah Data Pendidikan"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Kategori"
              className="border px-3 py-2 rounded"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Jumlah"
              className="border px-3 py-2 rounded"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              required
            />
          </div>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            {editId ? "Update" : "Simpan"}
          </button>
        </form>

        {/* TABLE */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Daftar Data Pendidikan</h2>

          <table className="w-full border text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Kategori</th>
                <th className="p-2 border">Jumlah</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {Array.isArray(pendidikan) && pendidikan.length > 0 ? (
                pendidikan.map((item, index) => (
                  <tr key={item.id}>
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{item.kategori}</td>
                    <td className="p-2 border">{item.jumlah}</td>
                    <td className="p-2 border flex gap-2">
                      <button
                        className="px-3 py-1 bg-yellow-500 text-white rounded"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="px-3 py-1 bg-red-600 text-white rounded"
                        onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 border text-center" colSpan="4">
                    Belum ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
