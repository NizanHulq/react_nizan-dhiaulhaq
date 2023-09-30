# (21) Deployment

**REACT BUILD APP**

Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi.

Tujuan melakukan build agar **aplikasi kita menjadi versi production**, sehingga performanya lebih ringan cepat.

Deploment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh orang banyak, tidak hanya oleh kita sendiri.

## Deployment menggunakan SURGE

Surge adalah layanan penerbit website statik gratis untuk front end developers. Website statik yang menggunakan surge akan memiliki domain yang berakhiran surge.sh.

**Teardown surge** terkadang kita tidak ingin mempublikasikan sebagian domain atau subdomain. Untuk itu kita bisa teardown sebuah project melalui surge CLI. Ini efektif untuk membuat proyek kita offline.

## Deployment menggunakan NETLIFY

Netlify adalah layanan hosting gratis untuk website statik. Netlify juga menyediakan fitur Continuous Deployment (CD) yang memungkinkan kita untuk melakukan deploy secara otomatis setiap kali kita melakukan push ke repository.

**Continuous Deployment** adalah proses otomatisasi yang memungkinkan kita untuk melakukan deploy setiap kali kita melakukan push ke repository.

## Deployment menggunakan Vercel

Vercel adalah end to end platform untuk para developer yang memungkingkan membuat sebuah deployment pada web application

