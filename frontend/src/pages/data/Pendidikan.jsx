import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Pie, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register chart.js modules
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function Pendidikan() {
  // ====== DATA (bisa diganti API Laravel) ======
  const pendidikan = {
    tidakSekolah: 120,
    sd: 850,
    smp: 900,
    sma: 700,
    kuliah: 180,
  };

  const total =
    pendidikan.tidakSekolah +
    pendidikan.sd +
    pendidikan.smp +
    pendidikan.sma +
    pendidikan.kuliah;

  // ====== PIE CHART ======
  const pieData = {
    labels: ["Tidak Sekolah", "SD", "SMP", "SMA", "Kuliah"],
    datasets: [
      {
        data: [
          pendidikan.tidakSekolah,
          pendidikan.sd,
          pendidikan.smp,
          pendidikan.sma,
          pendidikan.kuliah,
        ],
        backgroundColor: [
          "#dc2626", // merah
          "#16a34a", // hijau
          "#2563eb", // biru
          "#d97706", // orange
          "#9333ea", // ungu
        ],
      },
    ],
  };

  // ====== BAR CHART ======
  const barData = {
    labels: ["Tidak Sekolah", "SD", "SMP", "SMA", "Kuliah"],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [
          pendidikan.tidakSekolah,
          pendidikan.sd,
          pendidikan.smp,
          pendidikan.sma,
          pendidikan.kuliah,
        ],
        backgroundColor: "#16a34a",
      },
    ],
  };

  return (
    <div className="pt-20">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          Data Pendidikan Penduduk Desa
        </h1>

        {/* ===== KARTU TOTAL ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Total Penduduk</h2>
            <p className="text-3xl font-bold text-green-700">{total}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Tidak Sekolah</h2>
            <p className="text-2xl font-bold text-red-600">{pendidikan.tidakSekolah}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">SD</h2>
            <p className="text-2xl font-bold text-green-600">{pendidikan.sd}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">SMP</h2>
            <p className="text-2xl font-bold text-blue-600">{pendidikan.smp}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">SMA / Kuliah</h2>
            <p className="text-2xl font-bold text-purple-600">
              {pendidikan.sma + pendidikan.kuliah}
            </p>
          </div>
        </div>

        {/* ===== DIAGRAM ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PIE CHART */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Diagram Pendidikan (Pie)
            </h3>
            <Pie data={pieData} />
          </div>

          {/* BAR CHART */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Diagram Pendidikan (Bar)
            </h3>
            <Bar data={barData} />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
