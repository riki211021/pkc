<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KepalaDesa extends Model
{
    protected $fillable = [
        'nama',
        'foto',
        'jabatan',
        'periode'
    ];
}
