import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import LandingPage from './pages/landingpage/LandingPage';

import ProtectedRoute from './components/ProtectedRoute';
import Tentang from './pages/tentang/Tentang';
import Umkm from './pages/umkm/UMKM';
import DataPenduduk from './pages/data/DataPenduduk';
import LuasWilayah from './pages/data/LuasWilayah';
import MataPencarian from './pages/data/MataPencarian';
import Pendidikan from './pages/data/Pendidikan';
import Kesehatan from './pages/data/Kesehatan';
import BatasWilayah from './pages/data/BatasWilayah';
import Orbitasi from './pages/data/Orbitasi';
import Layanan from './pages/layanan/Layanan';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/penduduk" element={<DataPenduduk />} />
        <Route path="/luas" element={<LuasWilayah />} />
        <Route path="/pekerjaan" element={<MataPencarian />} />
        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/kesehatan" element={<Kesehatan />} />
        <Route path="/batas" element={<BatasWilayah />} />
        <Route path="/orbitasi" element={<Orbitasi />} />
        <Route path="/layanan" element={<Layanan />} />

        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard (terproteksi) */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

