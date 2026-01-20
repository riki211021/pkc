import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../api/axios"; // axios instance
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
  const [pendidikan, setPendidikan] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===== Ambil DATA dari API Laravel =====
  useEffect(() => {
    api
      .get("/pendidikan")
      .then((res) => {
        setPendidikan(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching pendidikan:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  // ==========================================
  //  DATA DINAMIS DARI DATABASE
  // ==========================================
  const labels = pendidikan.map((item) => item.kategori);
  const values = pendidikan.map((item) => item.jumlah);

  const total = values.reduce((a, b) => a + b, 0);

  // ===== PIE CHART =====
  const pieData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#dc2626", // merah
          "#16a34a", // hijau
          "#2563eb", // biru
          "#d97706", // orange
          "#9333ea", // ungu
          "#0891b2", // cyan (untuk kategori lebih banyak)
          "#7c3aed", // violet
        ],
      },
    ],
  };

  // ===== BAR CHART =====
  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: values,
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

          {pendidikan.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center">
              <h2 className="text-lg font-semibold">{item.kategori}</h2>
              <p className="text-2xl font-bold text-green-700">{item.jumlah}</p>
            </div>
          ))}
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
