<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Berita;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    public function index()
    {
        $berita = Berita::latest()->get();

        return $berita->map(function ($item) {
            return [
                'id' => $item->id,
                'judul' => $item->judul,
                'tanggal' => $item->tanggal,
                'isi' => $item->isi,
                'gambar' => $item->gambar,
                'gambar_url' => $item->gambar
                    ? asset('storage/' . $item->gambar)
                    : null,
            ];
        });
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string',
            'tanggal' => 'required|date',
            'isi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $path = null;

        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('berita', 'public');
        }

        $berita = Berita::create([
            'judul' => $request->judul,
            'tanggal' => $request->tanggal,
            'isi' => $request->isi,
            'gambar' => $path, // contoh: berita/abc.jpg
        ]);

        return response()->json($berita, 201);
    }

    public function update(Request $request, $id)
    {
        $berita = Berita::findOrFail($id);

        $path = $berita->gambar;

        if ($request->hasFile('gambar')) {
            // hapus gambar lama
            if ($path && Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }

            $path = $request->file('gambar')->store('berita', 'public');
        }

        $berita->update([
            'judul' => $request->judul,
            'tanggal' => $request->tanggal,
            'isi' => $request->isi,
            'gambar' => $path,
        ]);

        return response()->json($berita);
    }

    public function destroy($id)
    {
        $berita = Berita::findOrFail($id);

        if ($berita->gambar && Storage::disk('public')->exists($berita->gambar)) {
            Storage::disk('public')->delete($berita->gambar);
        }

        $berita->delete();

        return response()->json([
            'message' => 'Berita berhasil dihapus'
        ]);
    }
}
