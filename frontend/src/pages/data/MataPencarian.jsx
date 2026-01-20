import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api/axios";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function MataPencarian() {
  // Default data agar chart tidak error
  const [dataPekerjaan, setDataPekerjaan] = useState({
    "Belum Ada Data": 0,
  });

useEffect(() => {
  api
    .get("/pekerjaan")
    .then((res) => {
      const pekerjaan = res.data.data; // <-- DATA ASLINYA DI SINI

      if (pekerjaan && pekerjaan.length > 0) {
        const formatted = {};
        pekerjaan.forEach((item) => {
          formatted[item.nama_pekerjaan] = item.jumlah;
        });

        setDataPekerjaan(formatted);
      }
    })
    .catch((err) => console.log(err));
}, []);


  // Total penduduk bekerja
  const totalPenduduk = Object.values(dataPekerjaan).reduce(
    (a, b) => a + b,
    0
  );

  // Pie chart data
  const pieData = {
    labels: Object.keys(dataPekerjaan),
    datasets: [
      {
        data: Object.values(dataPekerjaan),
        backgroundColor: [
          "#16a34a",
          "#2563eb",
          "#f59e0b",
          "#dc2626",
          "#7c3aed",
          "#059669",
          "#ea580c",
          "#6b7280",
        ],
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: Object.keys(dataPekerjaan),
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: Object.values(dataPekerjaan),
        backgroundColor: "#16a34a",
      },
    ],
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">
          Data Mata Pencaharian Desa
        </h1>

        {/* STATISTIK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Total Penduduk Bekerja</h2>
            <p className="text-3xl font-bold text-green-700">
              {totalPenduduk}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Pekerjaan Terbanyak</h2>
            <p className="text-xl font-bold text-blue-700">
              {
                Object.keys(dataPekerjaan).reduce((a, b) =>
                  dataPekerjaan[a] > dataPekerjaan[b] ? a : b
                )
              }
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Kategori Pekerjaan</h2>
            <p className="text-3xl font-bold text-orange-600">
              {Object.keys(dataPekerjaan).length}
            </p>
          </div>
        </div>

        {/* CHART */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-center mb-4">
              Persentase Mata Pencaharian
            </h3>
            <Pie data={pieData} />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-center mb-4">
              Jumlah Penduduk per Pekerjaan
            </h3>
            <Bar data={barData} />
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white shadow-md rounded-xl p-6 my-12">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Tabel Detail Mata Pencaharian
          </h3>

          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="p-3">No</th>
                <th className="p-3">Jenis Pekerjaan</th>
                <th className="p-3">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(dataPekerjaan).map(
                ([pekerjaan, jumlah], idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-center">{idx + 1}</td>
                    <td className="p-3">{pekerjaan}</td>
                    <td className="p-3 text-center font-semibold">
                      {jumlah}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
