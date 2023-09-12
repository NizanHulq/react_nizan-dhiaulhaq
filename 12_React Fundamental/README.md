# (12) React Fundamental

JSX adalah singkatan dari javascript xml atau ekstensi syntax pada javascript yang penggunaanya sangat disarankan di react karena memudahkan dalam pembuatan komponen.

## Kenapa JSX sangat disarankan di react?

- JSX dibuat berdasarkan fakta bahwa logika rendering sangat terikat dengan logika UI.
- Separation of concern atau pemisahan antara logika dan tampilan tidak selalu baik sehingga pemisahan hanya dilakukan sesuai dengan kepentingannya.

JSX vs React.createElement

- Kita tidak perlu menggunakan jsx, hanya saja jsx memudahkan kita menulis aplikasi react
- jsx membuatkan syntactic sugar untuk memanggil React.createElement

Spesifikasi jenis elemen react 

- kapitalisasi untuk komponen react
- huruf kecil untuk elemen html atau komponen bawaan react

JSX adalah expression, setelah dikompilasi ekspresi JSX akan menjadi panggilan fungsi javascript biasa dan menjadi objek javascript.

ReactDOM menggunakan camelCase sebagai konvensi penamaan

### Menspesifikasikan element anak dengan JSX

- Jika tag bersifat kosong, kita bisa menutupnya langsung dengan />
- Tag JSX dimungkinkan untuk memiliki element anak

Komponen React adalah bagian kode yang dapat digunakan kembali untuk menentukan tampilan, behavior, dan state sebagian UI.

Apa itu props :

- Singkatan dari properties, yang membuat kita dapat memberikan argumen / data pada component
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Prop dioper ke component sama seperti memberikan atribut pada tag html
- Props pada component adalah read-only dan tidak dapat diubah 

React lifecycle adalah serangkaian metode yang dipanggil pada saat komponen di render ke DOM. Lifecycle method dapat digunakan untuk mengeksekusi kode pada titik tertentu dalam proses lifecycle komponen.

Render() adalah fungsi yang paling sering digunakan, required pada class component, dan pure function atau tidak boleh ada setState() di dalamnya.

ComponentDidMount() adalah fungsi yang digunakan untuk memanggil API atau mengambil data dari server, dipanggil ketika component sudah dirender untuk pertama kali.

ComponentDidUpdate() dipanggil ketika terjadi update props atau state berubah.

ComponentWillUnmount() dipanggil ketika component akan dihapus dari DOM dan cocok untuk clean up actions.

### Render bersyarat

Pada react kita dapat membuat komponen yang berbeda mencakup dari perilaku yang dibutuhkan. lalu kita dapat merender beberapa bagian saja berdasarkan state dari aplikasi kita

- Menggunakan if statement
- Inline if dengan operator &&
- Inline if-else dengan operator ternary
- Mencegah komponen untuk rendering

Key membantu react untuk mengidentifikasi item mana yang diubah, ditambahkan, atau dihilangkan.

Struktur direktori react tidak memiliki pendapat tentang bagaimana memasukkan file ke folder, sehingga kita dapat mengatur struktur direktori sesuai keinginan.

Styling pada react dapat dilakukan dengan cara berikut :

- Inline styling 
- atribut style
- CSS module



