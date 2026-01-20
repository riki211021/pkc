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
    Schema::create('kepala_desas', function (Blueprint $table) {
        $table->id();
        $table->string('nama');
        $table->string('foto')->nullable();
        $table->string('jabatan')->default('Kepala Desa');
        $table->string('periode')->nullable(); // contoh: 2023 - 2029
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kepala_desas');
    }
};
