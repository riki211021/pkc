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

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function DataPenduduk() {
  // ---- DATA OTOMATIS (Nanti bisa diambil dari API Laravel) ----
  const totalPenduduk = 2664;
  const laki = 1.319;
  const perempuan = 1.354 ;

  const usia = {
    anak: 400, // 0–12
    remaja: 700, // 13–25
    dewasa: 1200, // 26–45
    lansiaAwal: 600, // 46–60
    lansia: 300, // >60
  };

  // ---- DATA PIE CHART (Laki-laki / Perempuan) ----
  const genderChart = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        data: [laki, perempuan],
        backgroundColor: ["#1e40af", "#db2777"],
      },
    ],
  };

  // ---- DATA BAR CHART (Usia) ----
  const usiaChart = {
    labels: ["0–12", "13–25", "26–45", "46–60", ">60"],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [
          usia.anak,
          usia.remaja,
          usia.dewasa,
          usia.lansiaAwal,
          usia.lansia,
        ],
        backgroundColor: "#16a34a",
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Data Penduduk Desa
        </h1>

        {/* === KARTU DATA === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Total Penduduk</h2>
            <p className="text-3xl font-bold text-green-700">{totalPenduduk}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Laki-laki</h2>
            <p className="text-3xl font-bold text-blue-700">{laki}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold">Perempuan</h2>
            <p className="text-3xl font-bold text-pink-700">{perempuan}</p>
          </div>
        </div>

        {/* === DIAGRAM === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Diagram Jenis Kelamin
            </h3>
            <Pie data={genderChart} />
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Diagram Kelompok Usia
            </h3>
            <Bar data={usiaChart} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
