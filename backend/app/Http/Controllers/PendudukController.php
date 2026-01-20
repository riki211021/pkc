<?php

namespace App\Http\Controllers;

use App\Models\Penduduk;
use Illuminate\Http\Request;

class PendudukController extends Controller
{
public function index()
{
    $data = Penduduk::first();

    return response()->json([
        'totalPenduduk' => $data->total_penduduk,
        'laki' => $data->laki_laki,
        'perempuan' => $data->perempuan,
        'usia' => [
            'anak' => $data->usia_anak,
            'remaja' => $data->usia_remaja,
            'dewasa' => $data->usia_dewasa,
            'lansiaAwal' => $data->usia_lansia_awal, // pakai ini
            'lansia' => $data->usia_lansia, // pakai ini
        ]
    ]);
}

public function getadmin()
{
    return Penduduk::first();
}

    public function store(Request $request)
    {
        $validated = $request->validate([
            'total_penduduk' => 'required|integer',
            'laki_laki' => 'required|integer',
            'perempuan' => 'required|integer',
            'usia_anak' => 'required|integer',
            'usia_remaja' => 'required|integer',
            'usia_dewasa' => 'required|integer',
            'usia_lansia_awal' => 'required|integer',
            'usia_lansia' => 'required|integer',
        ]);

        // Jika sudah ada data → update
        $data = Penduduk::first();

        if ($data) {
            $data->update($validated);
        } else {
            $data = Penduduk::create($validated);
        }

        return response()->json([
            'message' => 'Data penduduk berhasil disimpan',
            'data' => $data
        ]);
    }

    /**
     * Update berdasarkan ID
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'total_penduduk' => 'required|integer',
            'laki_laki' => 'required|integer',
            'perempuan' => 'required|integer',
            'usia_anak' => 'required|integer',
            'usia_remaja' => 'required|integer',
            'usia_dewasa' => 'required|integer',
            'usia_lansia_awal' => 'required|integer',
            'usia_lansia' => 'required|integer',
        ]);

        $data = Penduduk::findOrFail($id);
        $data->update($validated);

        return response()->json([
            'message' => 'Data penduduk berhasil diupdate',
            'data' => $data
        ]);
    }

    /**
     * Hapus data penduduk
     */
    public function destroy($id)
    {
        $data = Penduduk::findOrFail($id);
        $data->delete();

        return response()->json([
            'message' => 'Data penduduk berhasil dihapus'
        ]);
    }
}