import { useState, useEffect } from "react";
import api from "../../api/axios";
import SidebarAdmin from "../../components/SidebarAdmin";

export default function KesehatanAdmin() {
  const [faskes, setFaskes] = useState([]);
  const [medis, setMedis] = useState([]);

  // STATE FORM FASKES
  const [formFaskes, setFormFaskes] = useState({
    id: null,
    nama: "",
    alamat: "",
    layanan: "",
    foto: null,
  });

  // STATE FORM MEDIS
  const [formMedis, setFormMedis] = useState({
    id: null,
    nama: "",
    jabatan: "",
    foto: null,
  });

  // LOAD DATA
  useEffect(() => {
    fetchFaskes();
    fetchMedis();
  }, []);

  const fetchFaskes = async () => {
    try {
      const res = await api.get("/kesehatan/fasilitas");
      setFaskes(res.data);
    } catch (err) {
      console.error("Gagal load faskes:", err);
    }
  };

  const fetchMedis = async () => {
    try {
      const res = await api.get("/kesehatan/tenaga-medis");
      setMedis(res.data);
    } catch (err) {
      console.error("Gagal load medis:", err);
    }
  };

  // ======================= CRUD FASKES =======================
  const submitFaskes = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nama", formFaskes.nama);
    data.append("alamat", formFaskes.alamat);
    data.append("layanan", formFaskes.layanan);
    if (formFaskes.foto) data.append("foto", formFaskes.foto);

    try {
      if (formFaskes.id === null) {
        await api.post("/faskes", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post(`/faskes/${formFaskes.id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchFaskes();
      setFormFaskes({ id: null, nama: "", alamat: "", layanan: "", foto: null });
    } catch (err) {
      console.error("Gagal submit faskes:", err);
    }
  };

  const editFaskes = (item) => {
    setFormFaskes({
      id: item.id,
      nama: item.nama,
      alamat: item.alamat,
      layanan: JSON.stringify(item.layanan),
      foto: null,
    });
  };

  const deleteFaskes = async (id) => {
    try {
      await api.delete(`/faskes/${id}`);
      fetchFaskes();
    } catch (err) {
      console.error("Gagal hapus faskes:", err);
    }
  };

  // ======================= CRUD MEDIS =======================
  const submitMedis = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nama", formMedis.nama);
    data.append("jabatan", formMedis.jabatan);
    if (formMedis.foto) data.append("foto", formMedis.foto);

    try {
      if (formMedis.id === null) {
        await api.post("/tenaga-medis", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post(`/tenaga-medis/${formMedis.id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchMedis();
      setFormMedis({ id: null, nama: "", jabatan: "", foto: null });
    } catch (err) {
      console.error("Gagal submit medis:", err);
    }
  };

  const editMedis = (item) => {
    setFormMedis({
      id: item.id,
      nama: item.nama,
      jabatan: item.jabatan,
      foto: null,
    });
  };

  const deleteMedis = async (id) => {
    try {
      await api.delete(`/tenaga-medis/${id}`);
      fetchMedis();
    } catch (err) {
      console.error("Gagal hapus tenaga medis:", err);
    }
  };

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="p-6 flex-1">
        <h1 className="text-3xl font-bold mb-6">Admin Kesehatan</h1>

        {/* ====================== FASILITAS KESEHATAN ====================== */}
        <div className="bg-white p-5 rounded-lg shadow mb-10">
          <h2 className="text-xl font-bold mb-4">Fasilitas Kesehatan</h2>

          {/* FORM FASKES */}
          <form onSubmit={submitFaskes} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input className="border p-2 rounded" type="text" placeholder="Nama Fasilitas" value={formFaskes.nama} onChange={(e) => setFormFaskes({ ...formFaskes, nama: e.target.value })} />

            <input className="border p-2 rounded" type="text" placeholder="Alamat" value={formFaskes.alamat} onChange={(e) => setFormFaskes({ ...formFaskes, alamat: e.target.value })} />

            <textarea className="border p-2 rounded col-span-2" placeholder='Layanan (contoh: ["BPJS","UGD","Apotek"])' value={formFaskes.layanan} onChange={(e) => setFormFaskes({ ...formFaskes, layanan: e.target.value })} />

            <input type="file" onChange={(e) => setFormFaskes({ ...formFaskes, foto: e.target.files[0] })} />

            <button className="bg-blue-600 text-white px-4 py-2 rounded col-span-2">{formFaskes.id ? "Update" : "Tambah"} Fasilitas</button>
          </form>

          {/* TABLE FASKES */}
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Alamat</th>
                <th className="p-2 border">Layanan</th>
                <th className="p-2 border">Foto</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {faskes.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.nama}</td>
                  <td className="border p-2">{item.alamat}</td>
                  <td className="border p-2">{JSON.stringify(item.layanan)}</td>
                  <td className="border p-2">{item.foto && <img src={item.foto} className="w-20" />}</td>

                  <td className="border p-2">
                    <button className="bg-yellow-500 text-white px-3 py-1 mr-2" onClick={() => editFaskes(item)}>
                      Edit
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1" onClick={() => deleteFaskes(item.id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ====================== TENAGA MEDIS ====================== */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Tenaga Medis</h2>

          {/* FORM MEDIS */}
          <form onSubmit={submitMedis} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input className="border p-2 rounded" type="text" placeholder="Nama" value={formMedis.nama} onChange={(e) => setFormMedis({ ...formMedis, nama: e.target.value })} />

            <input className="border p-2 rounded" type="text" placeholder="Jabatan" value={formMedis.jabatan} onChange={(e) => setFormMedis({ ...formMedis, jabatan: e.target.value })} />

            <input type="file" onChange={(e) => setFormMedis({ ...formMedis, foto: e.target.files[0] })} />

            <button className="bg-blue-600 text-white px-4 py-2 rounded col-span-2">{formMedis.id ? "Update" : "Tambah"} Tenaga Medis</button>
          </form>

          {/* TABLE MEDIS */}
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Jabatan</th>
                <th className="p-2 border">Foto</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {medis.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.nama}</td>
                  <td className="border p-2">{item.jabatan}</td>
                  <td className="border p-2">{item.foto && <img src={item.foto} className="w-20" />}</td>

                  <td className="border p-2">
                    <button className="bg-yellow-500 text-white px-3 py-1 mr-2" onClick={() => editMedis(item)}>
                      Edit
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1" onClick={() => deleteMedis(item.id)}>
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
