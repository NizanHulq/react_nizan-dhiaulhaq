# (17)React Form

## Penerapan Form

Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.

### Macam - macam form

- Element <input> biasanya digunakan inputan yang tidak terlalu panjang.
- Element <textarea> biasanya digunakan inputan yang cukup panjang. Semisal deskripsi.
- Element <select> biasanya digunakan untuk inputan yang pilihannya sudah ditentukan.
- Radiobutton merupakan salah satu type di elemen <input>. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton.
- Checkbox merupakan salah satu type di elemen <input>. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.
dan masih banyak yang lainnya

## Controlled Component

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. Sebuah elemen masukan form yang nilainya dikontrol Oleh React melalui cara seperti ini disebut sebagai "controlled component".

Di React, <textarea> menggunakan atribut value. Dengan cara ini, sebuah form yang menggunakan <textarea> dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris.

Di React, alih-alih menggunakan atribut selected, kita menggunakan atribut value di **tag select**. Hal ini lebih mudah karena hanya perlu diubah di satu tempat saja.

Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani Oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM. Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.

Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. IJntuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.

Pada HTML, sebuah <input type="file"> memungkinkan pengguna untuk memilih satu atau beberapa flle dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan javaScript lewat File API. Dalam React, sebuah <input /> merupakan uncontrolled component karena nilainya hanya bisa disetel Oleh pengguna, bukan Oleh kode program.

## Mengapa Validasi form diperlukan

- Mencari input data yang benar dan sesuai format
- Melindungi akun pengguna
- Melindungi sistem/aplikasi

## Tipe validasi data formulir

- Client side validation (validasi di sisi client). Validasi dilakukan agar data input sesuai dengan kebutuhan form sebelum data form di kirimkan ke server.

- Server side validation (validasi di sisi server). Validasi dilakukan agar data input sesuai dengan kebutuhan form setelah data form dikirimkan ke server.

