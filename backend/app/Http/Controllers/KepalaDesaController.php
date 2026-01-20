<?php

namespace App\Http\Controllers;

use App\Models\KepalaDesa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class KepalaDesaController extends Controller
{
    public function index()
    {
        return KepalaDesa::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'jabatan' => 'required',
            'periode' => 'nullable',
            'foto' => 'nullable|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        $filename = null;

        if ($request->hasFile('foto')) {
            $filename = $request->file('foto')->store('kepaladesa1', 'public');
        }

        return KepalaDesa::create([
            'nama' => $request->nama,
            'jabatan' => $request->jabatan,
            'periode' => $request->periode,
            'foto' => $filename
        ]);
    }

    public function update(Request $request, $id)
    {
        $kepala = KepalaDesa::findOrFail($id);

        $request->validate([
            'nama' => 'required',
            'jabatan' => 'required',
            'periode' => 'nullable',
            'foto' => 'nullable|image|mimes:jpg,jpeg,png|max:2048'
        ]);

        if ($request->hasFile('foto')) {
            // hapus foto lama
            if ($kepala->foto && Storage::disk('public')->exists($kepala->foto)) {
                Storage::disk('public')->delete($kepala->foto);
            }

            $kepala->foto = $request->file('foto')->store('kepaladesa', 'public');
        }

        $kepala->update([
            'nama' => $request->nama,
            'jabatan' => $request->jabatan,
            'periode' => $request->periode,
        ]);

        return $kepala;
    }

    public function destroy($id)
    {
        $kepala = KepalaDesa::findOrFail($id);

        if ($kepala->foto && Storage::disk('public')->exists($kepala->foto)) {
            Storage::disk('public')->delete($kepala->foto);
        }

        $kepala->delete();

        return response()->json(['message' => 'deleted']);
    }
}
