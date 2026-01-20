<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FasilitasKesehatan extends Model
{
    protected $table = 'fasilitas_kesehatan';
    protected $fillable = ['nama','alamat','layanan','foto'];

    protected $casts = [
        'layanan' => 'array'
    ];
}

