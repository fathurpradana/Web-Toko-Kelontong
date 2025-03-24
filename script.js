// Logika untuk menambahkan data produk
document.getElementById('form-produk').addEventListener('submit', function (e) {
    e.preventDefault();

    const namaProduk = document.getElementById('nama-produk').value;
    const stokProduk = document.getElementById('stok-produk').value;
    const hargaProduk = document.getElementById('harga-produk').value;

    if (namaProduk && stokProduk && hargaProduk) {
        const daftarProduk = document.getElementById('daftar-produk');
        const produkBaru = document.createElement('div');
        produkBaru.textContent = `${namaProduk} - Stok: ${stokProduk} - Harga: Rp${hargaProduk}`;
        daftarProduk.appendChild(produkBaru);

        // Reset form
        document.getElementById('form-produk').reset();
    } else {
        alert('Harap isi semua data produk!');
    }
});

// Logika untuk menambahkan data pelanggan
document.getElementById('form-pelanggan').addEventListener('submit', function (e) {
    e.preventDefault();

    const namaPelanggan = document.getElementById('nama-pelanggan').value;
    const alamatPelanggan = document.getElementById('alamat-pelanggan').value;
    const teleponPelanggan = document.getElementById('telepon-pelanggan').value;

    if (namaPelanggan && alamatPelanggan && teleponPelanggan) {
        const daftarPelanggan = document.getElementById('daftar-pelanggan');
        const pelangganBaru = document.createElement('div');
        pelangganBaru.textContent = `Nama: ${namaPelanggan}, Alamat: ${alamatPelanggan}, Telepon: ${teleponPelanggan}`;
        daftarPelanggan.appendChild(pelangganBaru);

        // Reset form
        document.getElementById('form-pelanggan').reset();
    } else {
        alert('Harap isi semua data pelanggan!');
    }
});

// Logika untuk menambahkan transaksi penjualan
document.getElementById('form-transaksi').addEventListener('submit', function (e) {
    e.preventDefault();

    const namaBarang = document.getElementById('nama-barang').value;
    const jumlahBarang = document.getElementById('jumlah-barang').value;
    const hargaBarang = document.getElementById('harga-barang').value;
    const namaPembeli = document.getElementById('nama-pembeli').value;

    if (namaBarang && jumlahBarang && hargaBarang && namaPembeli) {
        const daftarTransaksi = document.getElementById('daftar-transaksi');
        const transaksiBaru = document.createElement('div');
        const totalHarga = jumlahBarang * hargaBarang;
        transaksiBaru.textContent = `Barang: ${namaBarang}, Jumlah: ${jumlahBarang}, Harga Satuan: Rp${hargaBarang}, Pembeli: ${namaPembeli}, Total: Rp${totalHarga}`;
        daftarTransaksi.appendChild(transaksiBaru);

        // Reset form
        document.getElementById('form-transaksi').reset();
    } else {
        alert('Harap isi semua data transaksi!');
    }
});