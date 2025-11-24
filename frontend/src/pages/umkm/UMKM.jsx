import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Umkm() {
  const [selected, setSelected] = useState(null);

  // Data Dummy
  const dataUMKM = [
    {
      id: 1,
      nama: "Warung Sembako Bu Siti",
      kategori: "Perdagangan",
      alamat: "RT 02 / RW 01, Desa Purworejo",
      kontak: "0812-3344-5566",
      foto: "https://source.unsplash.com/400x300/?store",
      katalog: ["Beras", "Gula", "Telur", "Minyak Goreng"],
    },
    {
      id: 2,
      nama: "Toko Kerajinan Pak Budi",
      kategori: "Kerajinan",
      alamat: "RT 04 / RW 02, Desa Purworejo",
      kontak: "0857-9988-2211",
      foto: "https://source.unsplash.com/400x300/?craft",
      katalog: ["Kerajinan Kayu", "Ukiran", "Miniatur Rumah"],
    },
    {
      id: 3,
      nama: "Produksi Kue Bu Rani",
      kategori: "Kuliner",
      alamat: "RT 01 / RW 03, Desa Purworejo",
      kontak: "0822-1122-3344",
      foto: "https://source.unsplash.com/400x300/?cake",
      katalog: ["Kue Kering", "Roti Basah", "Brownies"],
    },
  ];

  const kategoriUMKM = [...new Set(dataUMKM.map((item) => item.kategori))];

  return (
    <div className="w-full">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TITLE SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-3">UMKM Desa</h1>
          <p className="text-gray-700 text-lg">
            Total UMKM Terdaftar:{" "}
            <span className="font-bold">{dataUMKM.length}</span>
          </p>
        </div>

        {/* KATEGORI */}
        <div className="mb-14">
          <h2 className="text-3xl font-semibold text-green-700 mb-5">
            Kategori UMKM
          </h2>

          <div className="flex flex-wrap gap-3">
            {kategoriUMKM.map((kat, index) => (
              <span
                key={index}
                className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm shadow"
              >
                {kat}
              </span>
            ))}
          </div>
        </div>

        {/* DAFTAR UMKM */}
        <h2 className="text-3xl font-semibold text-green-700 mb-6">
          Daftar UMKM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dataUMKM.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelected(item)}
            >
              <img
                src={item.foto}
                alt={item.nama}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold">{item.nama}</h3>
                <p className="text-green-700 font-medium mt-1">
                  {item.kategori}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DETAIL */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 transition">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-xl shadow-2xl p-8 relative animate-fadeIn">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-red-600 font-bold text-xl hover:text-red-800 transition"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-4">{selected.nama}</h2>

            <p><strong>Kategori:</strong> {selected.kategori}</p>
            <p><strong>Alamat:</strong> {selected.alamat}</p>
            <p><strong>Kontak:</strong> {selected.kontak}</p>

            <h3 className="font-semibold mt-6 mb-2">Katalog Dagangan:</h3>
            <ul className="list-disc ml-5 text-gray-700">
              {selected.katalog.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <img
              src={selected.foto}
              alt={selected.nama}
              className="rounded-lg mt-6 w-full h-60 object-cover shadow"
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
