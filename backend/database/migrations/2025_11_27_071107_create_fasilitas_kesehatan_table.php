<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('fasilitas_kesehatan', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('alamat');
            $table->json('layanan'); // array layanan
            $table->string('foto')->nullable(); // boleh kosong
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('fasilitas_kesehatan');
    }
};
