<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Umkm extends Model
{
    protected $fillable = [
        'nama',
        'kategori',
        'alamat',
        'kontak',
        'foto',
        'katalog',
    ];

    protected $casts = [
        'katalog' => 'array',
    ];
}

