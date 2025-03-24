<?php
// filepath: c:\Kuliah\januari - juni 2025\process.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $namaProduk = $_POST['nama_produk'] ?? '';
    $stokProduk = $_POST['stok_produk'] ?? 0;
    $hargaProduk = $_POST['harga_produk'] ?? 0;

    // Simpan data ke database (contoh sederhana)
    $data = [
        'nama_produk' => $namaProduk,
        'stok_produk' => $stokProduk,
        'harga_produk' => $hargaProduk
    ];

    // Simpan ke file JSON sebagai database sementara
    $file = 'data_produk.json';
    $produk = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $produk[] = $data;
    file_put_contents($file, json_encode($produk));

    echo json_encode(['status' => 'success', 'message' => 'Produk berhasil ditambahkan!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Metode tidak valid!']);
}
?>