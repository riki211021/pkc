<?php

namespace App\Http\Controllers;

use App\Models\Layanan;
use Illuminate\Http\Request;

class LayananController extends Controller
{
    public function index()
    {
        return response()->json(Layanan::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required',
            'icon' => 'nullable|string',
            'deskripsi' => 'nullable|string',
        ]);

        $layanan = Layanan::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Layanan berhasil ditambahkan',
            'data' => $layanan
        ]);
    }

    public function update(Request $request, $id)
    {
        $layanan = Layanan::findOrFail($id);

        $data = $request->validate([
            'nama' => 'required',
            'icon' => 'nullable|string',
            'deskripsi' => 'nullable|string',
        ]);

        $layanan->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Layanan berhasil diperbarui',
            'data' => $layanan
        ]);
    }

    public function destroy($id)
    {
        $layanan = Layanan::findOrFail($id);
        $layanan->delete();

        return response()->json([
            'status' => true,
            'message' => 'Layanan berhasil dihapus'
        ]);
    }
}
