import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
  // ===== DATA DUMMY (nanti bisa diganti dari API) =====
const dataPekerjaan = {
  "Belum/Tidak Bekerja": 643,
  "Mengurus Rumah Tangga": 351,
  "Pelajar/Mahasiswa": 297,
  "Pensiunan": 8,
  "Pegawai Negeri Sipil": 27,
  "Tentara Nasional Indonesia": 10,
  "Kepolisian RI": 7,
  "Perdagangan": 9,
  "Petani/Pekebun": 531,
  "Transportasi": 1,
  "Karyawan Swasta": 439,
  "Karyawan BUMN": 4,
  "Karyawan BUMD": 1,
  "Karyawan Honorer": 14,
  "Buruh Harian Lepas": 11,
  "Buruh Tani/Perkebunan": 29,
  "Pembantu Rumah Tangga": 2,
  "Tukang Jahit": 1,
  "Dosen": 1,
  "Guru": 24,
  "Sopir": 1,
  "Pedagang": 20,
  "Perangkat Desa": 3,
  "Kepala Desa": 1,
  "Wiraswasta": 227,
  "Lainnya": 2,
};


  const totalPenduduk = Object.values(dataPekerjaan).reduce((a, b) => a + b, 0);

  // ===== PIE CHART (persentase pekerjaan) =====
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

  // ===== BAR CHART =====
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

      {/* ================== TITLE ================== */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-6">
          Data Mata Pencaharian Desa
        </h1>

        {/* ================== STATISTIK ================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Total Penduduk Bekerja</h2>
            <p className="text-3xl font-bold text-green-700">{totalPenduduk}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Pekerjaan Terbanyak</h2>
            <p className="text-xl font-bold text-blue-700">
              {Object.keys(dataPekerjaan).reduce((a, b) =>
                dataPekerjaan[a] > dataPekerjaan[b] ? a : b
              )}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Kategori Pekerjaan</h2>
            <p className="text-3xl font-bold text-orange-600">
              {Object.keys(dataPekerjaan).length}
            </p>
          </div>
        </div>

        {/* ================== CHART ================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PIE CHART */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-center mb-4">
              Persentase Mata Pencaharian
            </h3>
            <Pie data={pieData} />
          </div>

          {/* BAR CHART */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-center mb-4">
              Jumlah Penduduk per Pekerjaan
            </h3>
            <Bar data={barData} />
          </div>

        </div>

        {/* ================== TABEL DETAIL ================== */}
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
              {Object.entries(dataPekerjaan).map(([pekerjaan, jumlah], idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-center">{idx + 1}</td>
                  <td className="p-3">{pekerjaan}</td>
                  <td className="p-3 text-center font-semibold">
                    {jumlah}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </div>
  );
}
