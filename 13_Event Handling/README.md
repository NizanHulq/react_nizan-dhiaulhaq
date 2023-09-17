# (13) Event Handling

State pada react adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses di component lain.

State :

- Hanya bisa diakses oleh component itu sendiri
- Data bisa dimodifikasi menggunakan setState()
- Setiap terjadi modifikasi akan terjadi render ulang
- Bersifat asynchronous
- Dipakai didalam class

### Perbedaan State dan Props :

- Props tidak dapat diubah, sedangkan state dapat diubah dengan cara asynchronus

Statefull component adalah component yang memiliki state. Component ini dibuat dengan menggunakan class. Kelebihan dari class component adalah memiliki lifecycle method.

Stateless component adalah component yang tidak memiliki state atau hanya memiliki props. Component ini dibuat dengan menggunakan function. Kelebihan dari function component adalah lebih mudah dibuat dan performanya lebih cepat.

## Perbedaan dari komponen statefull dan stateless :

### Statefull Component

- Mengerti tentang aplikasi
- Melakukan data fetching
- Berinteraksi dengan aplikasi
- Tidak dapat digunakan kembali
- Meneruskan status dan data ke anak-anaknya

### Stateless Component

- Tidak tahu aplikasi
- Tidak melakukan data fetching
- Tujuan utamanya adalah visualisasi
- Dapat digunakan kembali
- Hanya berkomunikasi dengan props atau dengan induknya langsung

Handling event adalah suatu metode untuk menangani sebuah event atau aksi yang diberikan pengguna kepada suatu komponen.
Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu component, misalnya ketika tombol tekan.

### Contoh event di react :

- Clipboard Events
- Form events
- Mouse Event
- Generic Events
