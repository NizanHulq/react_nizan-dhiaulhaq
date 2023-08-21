# (02) Version Control and Branch Management (Git)

**Versioning** tugasnya adalah untuk mengatur versi dari project yang kita buat.

**Version Control System (VCS)** adalah sebuah sistem yang merekam perubahan-perubahan dari sebuah file atau sekumpulan file dari waktu ke waktu sehingga kita dapat melihat kembali setiap perubahannya.

**Git** merupakan salag satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-sama. Git itu terdistribusi bukan tersentralisasi.

Komputer komputer yang berkolaborasi memiliki penyimpanan sendiri sendiri terhadap project sehingga jika server mati masing-masing komputer masih memiliki salinan lengkap dari repository.

**Commit** adalah seperti kita melakukan save pada setiap version yang kita buat.

Untuk melakukan setting uo git pertama kali, kita harus mengisi nama dan email kita terlebih dahulu. Kita bisa menggunakan perintah berikut:

```bash
git config --global user.name "Nama"
git config --global user.email "Email"
```

Jika sudah berhasil bisa dengan mengeceknya menggunakan perintah berikut:

```bash
git config --list
```

Jika masih awal bisa membuat repository baru di github.

**gitignore** berfungsi untuk mencegah file atau folder yang tidak ingin diupload ke github.

Untuk melakukan **git clone** dapat menggunakan https pada repository yang ingin di clone.

**Working directory** adalah tempat kita melakukan perubahan pada file.

Jika kita melakukan **git add** maka akan masuk kedalam **staging area**.

Jika kita melakukan **git commit** maka akan masuk kedalam **local repository**.

cara penulisan git commit adalah sebagai berikut :
    
    ```bash
    git commit -m "pesan"
    ```

Jika kita melakukan **git push** maka akan masuk kedalam **remote repository**.

penulisan git push adalah sebagai berikut :

    ```bash
    git push origin master
    ```

**Untuk message** perlu membuat pesan yang spesifik dan dengan jelas menjelaskan apa yang kita kerjakan pada commit tersebut.

**Git diff** untuk mengetahui apa saja perubahan yang telah kita lakukan.

**Git stash** adalah untuk menyimpan perubahan sementara.
 
**Git log** adalah untuk melihat history dari commit yang telah kita lakukan.

**Git checkout** adalah untuk berpindah branch atau berpindah ke commit sebelumnya.

**Git reset** adalah untuk menghapus commit yang telah kita lakukan.

**Git reset soft** akan mereset atau mengembalikan ke commit sebelumnya dan akan menghapus commit yang terakhir.

**Git reset hard** akan mereset atau mengembalikan ke commit sebelumnya dan akan menghapus commit yang terakhir dan juga menghapus perubahan yang telah kita lakukan.

**Git remote** adalah untuk melihat remote repository yang telah kita buat.

**Git pull** adalah untuk mengambil perubahan yang ada di remote repository.

**Branch** itu berfungsi untuk melindungi main project yang telajh kita buat.

untuk mengetahui branch yang telah kita buat dapat menggunakan perintah berikut :

    ```bash
    git branch --list
    ```

untuk membuat branch baru dapat menggunakan perintah berikut :

    ```bash
    git branch nama-branch
    ```

Untuk melakukan merge branch dapat menggunakan perintah berikut :

    ```bash
    git merge nama-branch
    ```

**Pull Request** digunakan untuk kita bisa berkontribusi terhadap repository yang telah ada.

Jalan terbaik dalam menggunakan git untuk berkolaborasi adalah dengan menggunakan beberapa branch dengan git flow yang jelas. memiliki setidaknya branch main, development, dan beberapa branch feature.


