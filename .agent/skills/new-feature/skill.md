# Skill: new-feature

## Deskripsi
Digunakan saat memulai pengerjaan fitur baru dari awal.
Skill ini memastikan setiap fitur dimulai dengan dokumentasi yang benar
dan dipecah menjadi langkah-langkah kecil sebelum menulis kode apapun.

## Trigger
Gunakan skill ini saat prompt mengandung kata seperti:
- "buat fitur"
- "tambah halaman"
- "implementasi"
- "setup"
- "buat komponen"

## Langkah yang Harus Diikuti

### Langkah 1: Analisis (BACA DULU, JANGAN KODE)
1. Baca `docs/` — cek apakah ada dokumentasi fitur yang mirip
2. Baca file yang relevan di `src/` untuk memahami pola yang sudah ada
3. Identifikasi semua file yang perlu dibuat atau diubah

### Langkah 2: Buat Dokumentasi Terlebih Dahulu
Buat file `docs/[nama-fitur].md` dengan format:
```markdown
# [Nama Fitur]

## Tujuan
[Apa yang ingin dicapai]

## File yang Akan Dibuat/Diubah
- `path/file` — [peran]

## Rencana Langkah
- [ ] Langkah 1: [deskripsi]
- [ ] Langkah 2: [deskripsi]
- [ ] Langkah 3: [deskripsi]

## Catatan Teknis
[Pertimbangan arsitektur, ketergantungan, dll]
```

### Langkah 3: Tampilkan Rencana dan Minta Persetujuan
Setelah membuat file dokumentasi, tampilkan rencana lengkap kepada Wahid:

```
📋 Rencana fitur: [nama fitur]

File dokumentasi: docs/[nama-fitur].md

Langkah yang direncanakan:
1. [langkah 1]
2. [langkah 2]
3. [langkah 3]

Apakah rencana ini sudah sesuai? Boleh mulai langkah 1?
```

### Langkah 4: Kerjakan Satu Langkah
Setelah mendapat persetujuan, kerjakan HANYA langkah pertama.
Setelah selesai, update dokumentasi dan buat commit, lalu minta persetujuan lagi.

## Pola Commit
```
feat([nama-fitur]): [deskripsi singkat]
```
