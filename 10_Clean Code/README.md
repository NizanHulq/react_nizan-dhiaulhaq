# (10) Clean Code

**Clean Code** adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer.

Clean code **penting** karena untuk mempermudah programmer lain untuk memahami kode yang kita buat. Karena kode yang kita buat bukan hanya untuk kita sendiri, tapi juga untuk programmer lain yang akan mengembangkan kode kita.

## Karakteristik Clean Code

### 1. Bisa Dibaca atau mudah dipahami
### 2. Mudah dieja dan dicari
### 3. Singkat namun mendeskripsikan konteks
### 4. Konsisten
### 5. Hindari penambahakn konteks yang tidak perlu
### 6. Komentar seperlunya saja
### 7. Good Function
### 8. Gunakan konvensi penamaan yang baik
### 9. Formatting yang baik

## Clean Code Principles

### 1. KISS (Keep It So Simple)

Hindari membuat fungsi yang dibuat untuk melakukan A, sekalian memodifikasi B, mengecek fungsi C, dst.

**Tips Untuk Selalu KISS**
- FUngsi atau class harus kecil.
- fungsi dibuat untuk melakukan satu tugas saja.
- Jangan gunakan terlalu banyak argumen dalam satu fungsi
- Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal.

### 2. DRY (Don't Repeat Yourself)

Jangan duplikasi kode, karena akan menyebabkan kode sulit dipelihara. Buatlah fungsi yang bisa digunakan berulang kali.

**Refactoring** adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal dari kode tersebut. Prinsip KISS dan DRY bisa dicapai dengan cara refactoring.

## Teknik Refactoring

### 1. Membuat sebuah abstraksi
### 2. Memecah kdoe dengan fungsi/class
### 3. Perbaiki penamaan dan lokasi kode.
### 4. Deteksi kode yang duplikasi

