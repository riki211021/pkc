import { useEffect, useState } from "react";
import api from "../../api/axios";
import SidebarAdmin from "../../components/SidebarAdmin";

export default function UmkmAdmin() {
  const [umkm, setUmkm] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    alamat: "",
    kontak: "",
    foto: null,
    katalog: "",
  });

  const fetchUmkm = async () => {
    try {
      const res = await api.get("/umkm");
      setUmkm(res.data);
    } catch (error) {
      console.error("Gagal fetch UMKM:", error);
    }
  };

  useEffect(() => {
    fetchUmkm();
  }, []);

  // handle input text
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "foto") {
      setForm({ ...form, foto: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // submit create / update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nama", form.nama);
    data.append("kategori", form.kategori);
    data.append("alamat", form.alamat);
    data.append("kontak", form.kontak);

    if (form.foto) {
      data.append("foto", form.foto);
    }

    // katalog dikirim sebagai array JSON (string)
    if (form.katalog) {
      try {
        const katalogArray = JSON.parse(form.katalog);
        data.append("katalog", JSON.stringify(katalogArray));
      } catch (err) {
        alert("Format katalog harus berupa JSON array!");
        return;
      }
    }

    try {
      if (editing) {
        await api.post(`/umkm/${editing.id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post("/umkm", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchUmkm();
      setModalOpen(false);
      setEditing(null);
      setForm({
        nama: "",
        kategori: "",
        alamat: "",
        kontak: "",
        foto: null,
        katalog: "",
      });

    } catch (error) {
      console.error("Gagal simpan UMKM:", error);
    }
  };

  // delete
  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin hapus?")) return;

    try {
      await api.delete(`/umkm/${id}`);
      fetchUmkm();
    } catch (error) {
      console.error("Gagal hapus:", error);
    }
  };

  const openEdit = (item) => {
    setEditing(item);
    setForm({
      nama: item.nama,
      kategori: item.kategori,
      alamat: item.alamat,
      kontak: item.kontak,
      foto: null,
      katalog: JSON.stringify(item.katalog ?? []),
    });
    setModalOpen(true);
  };

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold mb-4">Manajemen UMKM</h1>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Tambah UMKM
        </button>

        <div className="mt-4 bg-white shadow p-4 rounded">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Kategori</th>
                <th className="p-2 border">Alamat</th>
                <th className="p-2 border">Kontak</th>
                <th className="p-2 border">Foto</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {umkm.map((item) => (
                <tr key={item.id} className="border">
                  <td className="p-2 border">{item.nama}</td>
                  <td className="p-2 border">{item.kategori}</td>
                  <td className="p-2 border">{item.alamat}</td>
                  <td className="p-2 border">{item.kontak}</td>

                  <td className="p-2 border">
                    {item.foto ? (
                      <img
                        src={`http://localhost:8000/storage/${item.foto}`}
                        className="w-16 h-16 object-cover"
                      />
                    ) : "Tidak ada"}
                  </td>

                  <td className="p-2 border">
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

              {umkm.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    Tidak ada data UMKM.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded w-96">

              <h2 className="text-xl font-bold mb-3">
                {editing ? "Edit UMKM" : "Tambah UMKM"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3">

                <input name="nama" value={form.nama} onChange={handleChange}
                  placeholder="Nama UMKM" className="w-full p-2 border rounded" />

                <input name="kategori" value={form.kategori} onChange={handleChange}
                  placeholder="Kategori" className="w-full p-2 border rounded" />

                <input name="alamat" value={form.alamat} onChange={handleChange}
                  placeholder="Alamat" className="w-full p-2 border rounded" />

                <input name="kontak" value={form.kontak} onChange={handleChange}
                  placeholder="Kontak" className="w-full p-2 border rounded" />

                <input type="file" name="foto" onChange={handleChange}
                  className="w-full p-2 border rounded" />

                <textarea
                  name="katalog"
                  value={form.katalog}
                  onChange={handleChange}
                  placeholder='Masukkan katalog JSON (contoh: ["produk1", "produk2"])'
                  className="w-full p-2 border rounded h-24"
                />

                <div className="flex justify-end gap-3">
                  <button type="button" onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded">
                    Batal
                  </button>

                  <button type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded">
                    Simpan
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
