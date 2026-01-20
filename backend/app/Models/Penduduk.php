<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penduduk extends Model
{
    protected $fillable = [
        'total_penduduk',
        'laki_laki',
        'perempuan',
        'usia_anak',
        'usia_remaja',
        'usia_dewasa',
        'usia_lansia_awal',
        'usia_lansia',
    ];
}

