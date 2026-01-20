<?php

namespace App\Http\Controllers;

use App\Models\FasilitasKesehatan;
use App\Models\TenagaMedis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class KesehatanController extends Controller
{
public function fasilitas()
{
    return FasilitasKesehatan::all()->map(function ($item) {
        $item->foto = $item->foto ? url('storage/' . $item->foto) : null;
        return $item;
    });
}

public function tenagaMedis()
{
    return TenagaMedis::all()->map(function ($item) {
        $item->foto = $item->foto ? url('storage/' . $item->foto) : null;
        return $item;
    });
}


    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'alamat' => 'required',
            'layanan' => 'required',
            'foto' => 'nullable|image|mimes:jpg,png,jpeg'
        ]);

        $foto = null;
        if ($request->hasFile('foto')) {
            $foto = $request->file('foto')->store('faskes', 'public');
        }

        $data = FasilitasKesehatan::create([
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'layanan' => json_decode($request->layanan, true), // simpan sebagai JSON
            'foto' => $foto,
        ]);

        return response()->json(['success' => true, 'data' => $data]);
    }

    public function update(Request $request, $id)
    {
        $faskes = FasilitasKesehatan::findOrFail($id);

        $foto = $faskes->foto;

        if ($request->hasFile('foto')) {
            if ($foto && Storage::disk('public')->exists($foto)) {
                Storage::disk('public')->delete($foto);
            }
            $foto = $request->file('foto')->store('faskes', 'public');
        }

        $faskes->update([
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'layanan' => json_decode($request->layanan, true),
            'foto' => $foto
        ]);

        return response()->json(['success' => true, 'data' => $faskes]);
    }

    public function destroy($id)
    {
        $faskes = FasilitasKesehatan::findOrFail($id);

        if ($faskes->foto && Storage::disk('public')->exists($faskes->foto)) {
            Storage::disk('public')->delete($faskes->foto);
        }

        $faskes->delete();

        return response()->json(['success' => true]);
    }

//tenaga
    public function storetenaga(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string',
            'jabatan' => 'required|string',
            'foto' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('foto')) {
            $data['foto'] = $request->file('foto')->store('tenaga_medis', 'public');
        }

        return TenagaMedis::create($data);
    }

    // UPDATE DATA
    public function updatetenaga(Request $request, $id)
    {
        $tenaga = TenagaMedis::findOrFail($id);

        $data = $request->validate([
            'nama' => 'required|string',
            'jabatan' => 'required|string',
            'foto' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('foto')) {
            $data['foto'] = $request->file('foto')->store('tenaga_medis', 'public');
        }

        $tenaga->update($data);

        return $tenaga;
    }

    // HAPUS
    public function destroytenaga($id)
    {
        $tenaga = TenagaMedis::findOrFail($id);
        $tenaga->delete();

        return response()->json(['message' => 'Data tenaga medis dihapus']);
    }

}
