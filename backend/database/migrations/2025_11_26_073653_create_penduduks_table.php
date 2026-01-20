<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up()
{
    Schema::create('penduduks', function (Blueprint $table) {
        $table->id();
        $table->integer('total_penduduk');
        $table->integer('laki_laki');
        $table->integer('perempuan');
        $table->integer('usia_anak');        // 0–12
        $table->integer('usia_remaja');      // 13–25
        $table->integer('usia_dewasa');      // 26–45
        $table->integer('usia_lansia_awal'); // 46–60
        $table->integer('usia_lansia');      // >60
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penduduks');
    }
};
