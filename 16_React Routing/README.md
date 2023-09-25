# (16)React Router

Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)

Multi page application (MPA) disebut juga dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.

Single page application (SPA) adalah salah satu jenis aplikasi web dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

## Keunggulan SPA

- Waktu loading website yang cepat
- Tidak ada query tambahan ke server
- Front-end yang cepat dan responsive
- Meningkatkan pengalaman pengguna {User Experience}

## Keunggulan MPA

- SEO Website akan lebih mudah di optimasi
- Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
- Menggunakan tools analisis seperti google analytics yang dapat terintegrasi langsung dengan website

## Kekurangan SPA

- Tidak bagus dalam hal SEO
- Berat saat di load pertama kali
- Kurang aman dibandingkan dengan website biasa
- Masalah kompatibilitas browser

## Kekurangan MPA

- Kecepatan download website jauh lebih lama dibandingkan dengan SPA
- Perlu mengintegrasikan antara front-end dan back-end
- Lebih sering maintenance dan update
- Mungkin akan lebih sering menemui masalah performa pada website

BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan Ul dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

Route digunakan sebagai pengarah jalan nya lalu lintas suatu aplikasi web

Attribute path merupakan url pada browser pada proses routing

Attribute component merupakan suatu komponen yang akan ditampilkan kepada user mengakses path yang didefinisikan saat.

Switch digunakan untuk membungkus kumpulan beberapa component Route

Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, jika tidak ada yang cocokmaka route yang akan di-render yaitu route terakhir dengan Notfound component

Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju.
Element kosong <></> tersebut adalah shorthand dari yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.

Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis URL halaman.

## perbedaan link dan redirect

### Link

- Dapat digunakan pada kondisi apapun
- Memberikan history baru pada browser
- Bereaksi dengan klik seperti a href

### Redirect

- Lebih sering digunakan pada halaman 404 not found
- Menimpa history pada browser
- Bereaksi dengan suatu kondisi

## Hook pada react router

- useHistory() digunakan untuk mengakses history instance
- useLocation() digunakan untuk mengakses location instance
- useParams() digunakan untuk mengakses parameter yang ada di URL
- useRouteMatch() digunakan untuk mengakses informasi tentang bagaimana suatu route cocok dengan URL

## Fitur baru pada react router v6

- Penanganan routing berbasis hook
- penanganan error lebih baik
- pengelolaan routing yang lebih terpusat
- perubahan pada konsep penggunaan URL

Kita menggunakan komponen Route untuk mendefinisikan dua rute, yaitu '/home' dan '/about'. Ketika path sesuai dengan salah satu rute, komponen terkait (Home atau About) akan ditampilkan di dalam aplikasi.

Dengan menggunakan parameter, kita dapat membuat rute yang dapat menyesuaikan diri dengan nilai-nilai yang berbeda dan men akses nilai-nilai tersebut di dalam kom onen terkait.

Dengan menggunakan nested route, kita dapat membuat tampilan yang terstruktur secara hierarkis dalam aplikasi React.

Dengan menggunakan Link kita dapat membuat pengguna melakukan navigasi ke halaman yang Iain dengan melakukan click atau tap.

