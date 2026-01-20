<?php

namespace App\Http\Controllers;

use App\Models\Umkm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UmkmController extends Controller
{
    public function index()
    {
        return Umkm::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'kategori' => 'required',
            'alamat' => 'required',
            'kontak' => 'required',
            'foto' => 'nullable|image',
            'katalog' => 'nullable',
        ]);

        $data = $request->except(['foto']);

        if ($request->hasFile('foto')) {
            $data['foto'] = $request->file('foto')->store('umkm', 'public');
        }

        if ($request->katalog) {
            $data['katalog'] = json_encode($request->katalog);
        }

        return Umkm::create($data);
    }

    public function update(Request $request, $id)
    {
        $umkm = Umkm::findOrFail($id);

        $data = $request->except(['foto']);

        if ($request->hasFile('foto')) {
            if ($umkm->foto) {
                Storage::disk('public')->delete($umkm->foto);
            }
            $data['foto'] = $request->file('foto')->store('umkm', 'public');
        }

        if ($request->katalog) {
            $data['katalog'] = json_encode($request->katalog);
        }

        $umkm->update($data);

        return $umkm;
    }

    public function destroy($id)
    {
        $umkm = Umkm::findOrFail($id);

        if ($umkm->foto) {
            Storage::disk('public')->delete($umkm->foto);
        }

        $umkm->delete();

        return response()->json(['message' => 'UMKM berhasil dihapus']);
    }
}
