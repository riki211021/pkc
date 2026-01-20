<?php

namespace App\Http\Controllers;

use App\Models\Pekerjaan;
use Illuminate\Http\Request;

class PekerjaanController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => true,
            'data' => Pekerjaan::all()
        ]);
    }

    public function indexadmin()
{
    return Pekerjaan::all();
}


     public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_pekerjaan' => 'required|string|max:255',
            'jumlah' => 'required|integer'
        ]);

        $data = Pekerjaan::create($validated);

        return response()->json([
            'message' => 'Pekerjaan berhasil ditambahkan',
            'data' => $data
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nama_pekerjaan' => 'required|string|max:255',
            'jumlah' => 'required|integer'
        ]);

        $data = Pekerjaan::findOrFail($id);
        $data->update($validated);

        return response()->json([
            'message' => 'Pekerjaan berhasil diupdate',
            'data' => $data
        ]);
    }

    public function destroy($id)
    {
        $data = Pekerjaan::findOrFail($id);
        $data->delete();

        return response()->json([
            'message' => 'Pekerjaan berhasil dihapus'
        ]);
    }
}
