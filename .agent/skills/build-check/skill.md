# Skill: build-check

## Deskripsi
Menjalankan serangkaian pengecekan kualitas kode sebelum commit.
Skill ini wajib dijalankan setelah setiap langkah selesai.

## Trigger
Gunakan skill ini saat prompt mengandung:
- "cek build"
- "build check"
- "verifikasi"
- "sebelum commit"

## Urutan Pengecekan

### 1. TypeScript Check
```bash
npx tsc --noEmit
```
**Tujuan:** Pastikan tidak ada error TypeScript.
Jika ada error, perbaiki dulu sebelum lanjut.

### 2. Astro Build
```bash
npm run build
```
**Tujuan:** Pastikan project bisa di-build tanpa error.
Jika ada error, perbaiki dulu sebelum lanjut.

### 3. Sync Content Collections (jika ada perubahan schema)
```bash
npx astro sync
```
**Tujuan:** Regenerate TypeScript types untuk content collections.
Jalankan ini setiap kali mengubah `src/content.config.ts`.

## Laporan Hasil

Setelah semua pengecekan, tampilkan laporan:

```
🔍 Hasil Build Check:

TypeScript  : ✅ OK / ❌ [deskripsi error]
Astro Build : ✅ OK / ❌ [deskripsi error]
Astro Sync  : ✅ OK / ⏭️ Dilewati (tidak ada perubahan schema)

Status: ✅ Siap commit / ❌ Ada error, perlu diperbaiki dulu
```

## Catatan
- Jangan pernah commit jika ada error TypeScript
- Jangan pernah commit jika `npm run build` gagal
- Jalankan `npx astro sync` setiap mengubah content schema
