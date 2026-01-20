<?php

namespace App\Http\Controllers;

use App\Models\Pendidikan;
use Illuminate\Http\Request;

class PendidikanController extends Controller
{
    public function index()
    {
        return Pendidikan::all();
    }

    public function store(Request $request)
    {
        return Pendidikan::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $pend = Pendidikan::findOrFail($id);
        $pend->update($request->all());
        return $pend;
    }

    public function destroy($id)
    {
        $pend = Pendidikan::findOrFail($id);
        $pend->delete();
        return response()->json(['message' => 'deleted']);
    }
}

