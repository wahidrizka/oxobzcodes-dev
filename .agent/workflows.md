# Workflows — oxobzcodes.dev

Workflows adalah prompt tersimpan yang dipanggil dengan `/nama-workflow` di chat Antigravity.

---

## /new-post

**Deskripsi:** Buat artikel blog baru dengan struktur MDX yang benar.

**Prompt:**
```
Gunakan skill new-blog-post. Tanya saya judul artikel, lalu buat file MDX 
di src/content/blog/ dengan frontmatter yang lengkap sesuai schema di 
content.config.ts. Setelah dibuat, tampilkan isi file dan minta konfirmasi.
```

---

## /new-portfolio

**Deskripsi:** Tambah project baru ke section portfolio.

**Prompt:**
```
Gunakan skill new-portfolio. Tanya saya nama project, lalu buat file MDX 
di src/content/portfolio/ dengan frontmatter yang lengkap sesuai schema di 
content.config.ts. Setelah dibuat, tampilkan isi file dan minta konfirmasi.
```

---

## /new-feature

**Deskripsi:** Mulai pengerjaan fitur baru dengan alur yang benar.

**Prompt:**
```
Gunakan skill new-feature. Sebelum menulis kode apapun:
1. Buat file dokumentasi di docs/[nama-fitur].md
2. Analisis file yang ada untuk memahami pola yang sudah digunakan
3. Buat rencana langkah yang detail
4. Tampilkan rencana dan minta persetujuan saya sebelum mulai langkah pertama
```

---

## /build-check

**Deskripsi:** Verifikasi build sebelum commit.

**Prompt:**
```
Gunakan skill build-check. Jalankan TypeScript check dan Astro build. 
Jika ada perubahan di content.config.ts, jalankan juga astro sync. 
Tampilkan laporan hasil dan status apakah siap commit.
```

---

## /commit

**Deskripsi:** Update dokumentasi dan buat commit setelah satu langkah selesai.

**Prompt:**
```
Lakukan langkah berikut secara berurutan:
1. Jalankan build-check terlebih dahulu
2. Jika build berhasil, update file docs/[nama-fitur-aktif].md:
   - Tandai langkah yang baru selesai dengan [x]
   - Catat nama file yang dibuat/diubah
   - Catat hash commit setelah commit
3. Buat commit dengan format: feat([nama-fitur]): [deskripsi singkat]
4. Tampilkan ringkasan:
   ✅ Langkah [N] selesai: [deskripsi]
   File yang berubah: [daftar file]
   Langkah berikutnya: [deskripsi langkah N+1]
   Boleh lanjut?
```

---

## /status

**Deskripsi:** Tampilkan status progress fitur yang sedang dikerjakan.

**Prompt:**
```
Baca semua file di folder docs/ dan tampilkan:
1. Fitur yang sedang dikerjakan (ada langkah belum selesai)
2. Progress setiap fitur (berapa langkah selesai dari total)
3. Langkah berikutnya yang perlu dikerjakan
Format output dengan jelas dan mudah dibaca.
```
