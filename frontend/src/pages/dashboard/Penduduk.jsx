import { useEffect, useState } from "react";
import api from "../../api/axios";
import SidebarAdmin from "../../components/SidebarAdmin";

export default function Penduduk() {
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    total_penduduk: "",
    laki_laki: "",
    perempuan: "",
    usia_anak: "",
    usia_remaja: "",
    usia_dewasa: "",
    usia_lansia_awal: "",
    usia_lansia: ""
  });
  const [editId, setEditId] = useState(null);

  // Load Data
  const getPenduduk = async () => {
    try {
      const res = await api.get("/data-pendudukadmin");
      setData(res.data);
    } catch (err) {
      console.error("Gagal load data penduduk:", err);
    }
  };

  useEffect(() => {
    getPenduduk();
  }, []);

  // Input Handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await api.put(`/penduduk/${editId}`, form);
      } else {
        await api.post("/penduduk", form);
      }

      setForm({
        total_penduduk: "",
        laki_laki: "",
        perempuan: "",
        usia_anak: "",
        usia_remaja: "",
        usia_dewasa: "",
        usia_lansia_awal: "",
        usia_lansia: ""
      });

      setEditId(null);
      getPenduduk();
    } catch (err) {
      console.error("Gagal submit:", err);
    }
  };

  // Edit Data
  const handleEdit = (item) => {
    setEditId(item.id);
    setForm({
      total_penduduk: item.total_penduduk,
      laki_laki: item.laki_laki,
      perempuan: item.perempuan,
      usia_anak: item.usia_anak,
      usia_remaja: item.usia_remaja,
      usia_dewasa: item.usia_dewasa,
      usia_lansia_awal: item.usia_lansia_awal,
      usia_lansia: item.usia_lansia
    });
  };

  // Delete Data
  const handleDelete = async (id) => {
    if (confirm("Hapus data?")) {
      try {
        await api.delete(`/penduduk/${id}`);
        getPenduduk();
      } catch (err) {
        console.error("Gagal hapus:", err);
      }
    }
  };

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-5">Data Penduduk</h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 bg-white p-6 shadow rounded mb-8">

          {Object.keys(form).map((field, i) => (
            <div key={i}>
              <label className="font-semibold capitalize">{field.replace(/_/g, " ")}</label>
              <input
                type="number"
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded"
              />
            </div>
          ))}

          <button className="col-span-2 bg-blue-600 text-white py-2 rounded mt-3">
            {editId ? "Update Data" : "Tambah Data"}
          </button>
        </form>

        {/* TABLE */}
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">Total</th>
              <th className="p-2">Laki</th>
              <th className="p-2">Perempuan</th>
              <th className="p-2">Anak</th>
              <th className="p-2">Remaja</th>
              <th className="p-2">Dewasa</th>
              <th className="p-2">Lansia Awal</th>
              <th className="p-2">Lansia Akhir</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data && data.id ? (
              <tr className="text-center border-b">
                <td className="p-2">1</td>
                <td>{data.total_penduduk}</td>
                <td>{data.laki_laki}</td>
                <td>{data.perempuan}</td>
                <td>{data.usia_anak}</td>
                <td>{data.usia_remaja}</td>
                <td>{data.usia_dewasa}</td>
                <td>{data.usia_lansia_awal}</td>
                <td>{data.usia_lansia}</td>

                <td className="p-2">
                  <button
                    onClick={() => handleEdit(data)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan="10" className="text-center p-4">
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
