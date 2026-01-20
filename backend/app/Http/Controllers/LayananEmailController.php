<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class LayananEmailController extends Controller
{
    public function kirim(Request $request)
    {
        // Email tujuan (ISI EMAIL DESA ANDA DI SINI)
        $emailTujuan = "kandangmudakenari@gmail.com";

        Mail::raw("
Nama Pemohon : {$request->nama}
NIK          : {$request->nik}
WhatsApp     : {$request->wa}
Judul Layanan: {$request->judul}

Pesan:
{$request->pesan}
        ", function ($msg) use ($emailTujuan) {
            $msg->to($emailTujuan)
                ->subject("Pengajuan Layanan Desa");
        });

        return response()->json([
            "success" => true,
            "message" => "Email berhasil dikirim"
        ]);
    }
}
