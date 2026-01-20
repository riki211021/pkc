import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api/axios"; // axios instance

export default function Kesehatan() {
  const [fasilitas, setFasilitas] = useState([]);
  const [tenagaMedis, setTenagaMedis] = useState([]);

  useEffect(() => {
    api.get("/kesehatan/fasilitas").then((res) => setFasilitas(res.data));
    api.get("/kesehatan/tenaga-medis").then((res) => setTenagaMedis(res.data));
  }, []);

  return (
    <div className="pt-20 pb-10 bg-gray-50 min-h-screen">
      <Navbar />

      <div className="text-center mb-12 px-6">
        <h1 className="text-4xl font-bold text-green-700">Kesehatan Desa</h1>
        <p className="text-gray-700 text-lg mt-2">
          Informasi fasilitas kesehatan dan tenaga medis di desa.
        </p>
      </div>

      {/* ================== FASILITAS KESEHATAN ================== */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Fasilitas Kesehatan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fasilitas.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={item.foto}
                alt={item.nama}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{item.nama}</h3>
                <p className="text-gray-600 mb-3">{item.alamat}</p>

                <h4 className="font-semibold text-green-700 mb-2">Layanan:</h4>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  {item.layanan?.map((lay, index) => (
                    <li key={index}>{lay}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================== TENAGA MEDIS ================== */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Tenaga Medis Desa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {tenagaMedis.map((tm) => (
            <div
              key={tm.id}
              className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition"
            >
              <img
                src={tm.foto}
                alt={tm.nama}
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
              />
              <h4 className="text-xl font-semibold mt-4">{tm.nama}</h4>
              <p className="text-green-700 font-medium">{tm.jabatan}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
