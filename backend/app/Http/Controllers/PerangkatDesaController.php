<?php

namespace App\Http\Controllers;

use App\Models\PerangkatDesa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PerangkatDesaController extends Controller
{
    // GET all
    public function index()
    {
        return PerangkatDesa::all();
    }

    // CREATE
    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required',
            'jabatan' => 'required',
            'foto' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('foto')) {
            $data['foto'] = $request->file('foto')->store('perangkat', 'public');
        }

        return PerangkatDesa::create($data);
    }

    // SHOW (optional)
    public function show($id)
    {
        return PerangkatDesa::findOrFail($id);
    }

    // UPDATE
    public function update(Request $request, $id)
    {
        $item = PerangkatDesa::findOrFail($id);

        $data = $request->validate([
            'nama' => 'required',
            'jabatan' => 'required',
            'foto' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('foto')) {
            // delete old photo
            if ($item->foto) {
                Storage::disk('public')->delete($item->foto);
            }
            $data['foto'] = $request->file('foto')->store('perangkat', 'public');
        }

        $item->update($data);

        return $item;
    }

    // DELETE
    public function destroy($id)
    {
        $item = PerangkatDesa::findOrFail($id);

        if ($item->foto) {
            Storage::disk('public')->delete($item->foto);
        }

        $item->delete();

        return response()->json(['message' => 'Deleted']);
    }
}
