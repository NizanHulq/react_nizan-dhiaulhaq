# (14)React Hook

React Hooks adalah fitur baru di react 16.8 . Dengan react hooks, kita dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas.

### Kenapa perlu menggunakan react hooks :

- Kesulitan untuk menggunakan kembali statfull logic antar componnent
- Komponen kompleks akan menjadi sulit dimengerti
- Kelas membingungkan manusia dan mesin

### Hooks dasar :

- useState
- useEffect
- useContext

### Hooks Tambahan :

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

### Rules of Hooks :

- Hanya panggil hooks di tingkat atas (jangan panggil di dalam loop, kondisi, atau nested function)
- Hanya panggil hooks dari function react (atau custom hooks yang dibuat sendiri)

Yang terjadi ketika kita memanggil useState adalah dengan kita memanggil useState kita akan menyimpan suatu state di dalam satu variable
Yang dikembalikan oleh useState adalah sepasang nilai yaitu state saat ini dan fungsi pembaruan

useEffect Hook adalah memungkinkan kita melakukan efek samping di dalam function component

Custom hook adalah hook yang kita buat sendiri yang memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan kembali.

