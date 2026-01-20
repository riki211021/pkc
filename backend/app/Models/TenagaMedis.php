<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TenagaMedis extends Model
{
    protected $table = 'tenaga_medis';

    protected $fillable = [
        'nama',
        'jabatan',
        'foto',
    ];
}
