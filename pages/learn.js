pages.learn = {
    categories: [
        {
            name: 'Bagian 1: Fondasi & Arsitektur',
            items: [
                {
                    id: 'intro-js',
                    title: 'Pertemuan 1: Dasar JavaScript Modern',
                    lines: [
                        'JavaScript adalah motor utama di balik **DonatJS**. Kita akan fokus pada sintaks modern yang efisien.',
                        '---',
                        '### Materi Utama',
                        '1. **Variabel & Scope**: Perbedaan mendalam `let` vs `const`.',
                        '2. **Arrow Functions**: Penulisan fungsi yang ringkas untuk callback.',
                        '3. **DOM Manipulation**: Cara DonatJS berinteraksi dengan elemen HTML tanpa library luar.',
                        '---',
                        'skill:100%:Memahami ES6+ Syntax:Wajib',
                        'skill:100%:Event Listener Handling:Dasar'
                    ]
                },
                {
                    id: 'modul-02',
                    title: 'Pertemuan 2: Arsitektur MVC & Routing',
                    lines: [
                        'Mengenal pola **Model-View-Controller** yang digunakan dalam DonatJS untuk memisahkan data dan tampilan.',
                        '---',
                        '### Materi Utama',
                        '1. **Folder Structure**: Organisasi file di DonatJS.',
                        '2. **State Management**: Bagaimana data dikelola di `dataset.js`.',
                        '3. **Hash-based Routing**: Navigasi SPA (Single Page Application) tanpa reload.',
                        '---',
                        'step:2026:Arsitektur:Memahami alur data dari Dataset ke UI'
                    ]
                }
            ]
        },
        {
            name: 'Bagian 2: UI & UX Implementation',
            items: [
                {
                    id: 'modul-04',
                    title: 'Pertemuan 4: Manipulasi Layout & Komponen',
                    lines: [
                        '**Manipulasi Layout & Komponen Antarmuka Dinamis**',
                        'Komponen yang baik terasa *invisible* — pengguna fokus pada konten, bukan cara menggunakannya.',
                        'Mempelajari teknik manipulasi visual untuk mendukung alur kerja CRUD. Fokus pada Modal, Toast Notification, dan transisi CSS.',
                        '---',
                        '### Mengapa Kita Butuh Komponen Ini?',
                        'card:Modal = Edit Tanpa Pindah Halaman:Mempertahankan konteks pengguna saat melakukan perubahan data.',
                        'card:Toast = Konfirmasi Real-time:Memberikan umpan balik aksi (sukses/gagal) secara elegan tanpa memblokir interaksi.',
                        '---',
                        '### Target Capaian Praktikum',
                        'skill:84%:HTML struktur modal dengan ID sistematis:Wajib',
                        'skill:84%:CSS modal overlay dengan opacity transition:Animasi',
                        'skill:84%:CSS toast dengan auto-hide concept:UX Modern',
                        'skill:84%:Responsivitas modal menggunakan min():Mobile-Safe',
                        '---',
                        '### Aktivitas Praktikum',
                        'table:[{"Aktivitas":"Struktur Modal","Detail Tugas":"Susun HTML modal form edit. Verifikasi ID input."},{"Aktivitas":"CSS Overlay","Detail Tugas":"Implementasi opacity transition dan pointer-events."},{"Aktivitas":"Styling Toast","Detail Tugas":"Desain toast .success (hijau) dan .error (merah)."},{"Aktivitas":"Uji Visual","Detail Tugas":"Toggle class via DevTools Console untuk cek animasi."}]'
                    ]
                }
            ]
        }

    ]
};
