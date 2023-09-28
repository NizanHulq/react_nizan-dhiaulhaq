# (18)Global State Management and Data fetching

Kita perlu menggunakan global state management untuk menyimpan state yang kita miliki yang sekiranya perlu diakses oleh banyak komponen. Kita akan menggunakan Redux untuk global state management.

### Kapan saat yang tepat untuk menggunakan redux :

1. Banyak state yang perlu ditaruh di banyak tempat 
2. state pada app sering berubah
3. logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang sampai besar, dan perlu dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

## Redux libaries dan tools

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

## Komponen penting di Redux

1. Store
2. Reducer
3. Action

Untuk memakai dan mengubah state kita dapat menggunakan hooks dan juga connect.

1. Redux adalah library untuk manajemen state global
2. Redux menggunkan struktur "one way data flow"
3. Redux menggunakan beberapa tipe code

Redux thunk adalah thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

Menyimpan state kedalam storage dapat dilakukan dengan menggunakan redux-persist.

Data fetching adalah proses mengambil data dari server. Kita dapat menggunakan beberapa cara untuk data fetching di react yaitu dengan fetch API, axios, dan juga menggunakan library react-query.