import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api/axios";

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
  // STATE untuk data dari API
  const [totalPenduduk, setTotalPenduduk] = useState(0);
  const [laki, setLaki] = useState(0);
  const [perempuan, setPerempuan] = useState(0);
  const [usia, setUsia] = useState({
    anak: 0,
    remaja: 0,
    dewasa: 0,
    lansiaAwal: 0,
    lansia: 0,
  });

  // Ambil data dari API saat halaman dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/data-penduduk");
        setTotalPenduduk(res.data.totalPenduduk);
        setLaki(res.data.laki);
        setPerempuan(res.data.perempuan);
        setUsia(res.data.usia);
      } catch (error) {
        console.error("Gagal mengambil data penduduk:", error);
      }
    };

    fetchData();
  }, []);

  // PIE CHART
  const genderChart = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        data: [laki, perempuan],
        backgroundColor: ["#1e40af", "#db2777"],
      },
    ],
  };

  // BAR CHART
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
