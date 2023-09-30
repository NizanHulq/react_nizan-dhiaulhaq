# (20) React Testing

Testing adalah proses memverifikasi bahwa test assertion kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

## Manfaat testing

- Ketika coverage yang baik, kita dapat mengubah kode kita dengan percaya diri
- Mengurangi bug pada aplikasi.

## Cara Testing pada React

- Rendering component trees
- Menjalankan aplikasi dengan lengkap

## Rekomendasi Tools

- Jest (testing framework)
- React Testing Library (testing utilities)

## Render dan Debug

Fungsi **render RTL** akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.

**React Testing Library** digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

**React Testing Library** menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL.

**Handle Asynchronous** digunakan ketika hendak mengetes fetch sebuah API. Pada kasus ini kita perlu membuat mock untuk axios (atau yang lain). Selanjutnya kita perlu membuat mock promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.

Untuk mengetes **custom hook**, kita menggunakan **React Hooks Testing Library**. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.

