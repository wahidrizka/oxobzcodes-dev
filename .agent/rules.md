# Rules — oxobzcodes.dev

## Konteks Proyek

Portfolio website pribadi Wahid Rizka Fathurrohman, seorang full-stack developer.
Dibangun dengan Astro 5, React 19, Tailwind CSS v4, shadcn/ui, dan dideploy ke VPS via Docker + Nginx.

**Domain:** oxobzcodes.dev
**Repository:** github.com/wahidrizka/oxobzcodes-dev

---

## Tech Stack (TERKUNCI — JANGAN DIUBAH)

```
Framework   : Astro 5.17.x
UI          : React 19.x + shadcn/ui + Tailwind CSS 4.x
Content     : Astro Content Collections + MDX
Language    : TypeScript (strict mode)
Package Mgr : npm
Deploy      : Docker + Nginx di VPS
```

Jangan upgrade, downgrade, atau tambah dependency baru tanpa persetujuan eksplisit dari Wahid.

---

## Alur Kerja Wajib (TIDAK BOLEH DILANGGAR)

### 1. Satu Fitur = Satu File Dokumentasi

Setiap memulai fitur baru:
- Buat file baru di folder `docs/` dengan format: `nama-fitur.md`
- Contoh: `docs/blog-collection.md`, `docs/navbar.md`, `docs/cicd.md`
- Tulis tujuan fitur, daftar file yang akan dibuat/diubah, dan daftar langkah

### 2. Pecah Fitur Menjadi Langkah Kecil

Satu fitur dipecah menjadi langkah-langkah kecil:
- Buat file
- Tambah fungsi/komponen
- Tambah styling
- Hubungkan ke halaman
- dst.

**Setelah setiap langkah selesai, BERHENTI dan lakukan:**
1. Update dokumentasi di `docs/nama-fitur.md` dengan fakta kode yang baru saja dibuat
2. Buat commit dengan pesan yang deskriptif
3. Minta persetujuan Wahid sebelum lanjut ke langkah berikutnya

Format commit:
```
feat(nama-fitur): deskripsi singkat apa yang dilakukan
```
Contoh: `feat(blog): buat content collection schema untuk blog`

### 3. Format Permintaan Persetujuan

Setelah commit, selalu tampilkan ringkasan seperti ini:

```
✅ Langkah [N] selesai: [deskripsi singkat]

Yang baru saja dibuat/diubah:
- [file 1]
- [file 2]

Langkah berikutnya: [deskripsi langkah N+1]

Boleh lanjut?
```

### 4. Ganti Fitur = File Dokumentasi Baru

Saat berpindah ke fitur baru, buat file `docs/nama-fitur-baru.md` baru.
Jangan campur dokumentasi dua fitur berbeda dalam satu file.

---

## Standar Penulisan Kode

### Naming Convention (sesuai standar resmi masing-masing ekosistem)

| Konteks | Konvensi | Contoh |
|---|---|---|
| Komponen Astro/React | PascalCase | `BlogCard.astro`, `NavBar.tsx` |
| File halaman Astro | kebab-case | `src/pages/blog/index.astro` |
| File utilitas/helper | camelCase | `formatDate.ts` |
| CSS class (Tailwind) | kebab-case | `blog-card`, `nav-link` |
| Variabel/fungsi | camelCase | `getCollection`, `formatDate` |
| Tipe/Interface TypeScript | PascalCase | `BlogPost`, `Experience` |
| Konstanta | UPPER_SNAKE_CASE | `SITE_URL`, `MAX_POSTS` |
| Folder | kebab-case | `src/components/blog-card/` |

### Struktur Folder

```
src/
├── components/
│   ├── ui/          ← shadcn/ui components (jangan dimodifikasi manual)
│   ├── layout/      ← Navbar, Footer, BaseHead
│   └── shared/      ← komponen reusable lintas halaman
├── content/
│   ├── blog/        ← artikel .mdx
│   └── portfolio/   ← project .mdx
├── data/
│   ├── experiences.json
│   └── education.json
├── layouts/
│   ├── BaseLayout.astro
│   └── BlogLayout.astro
├── pages/
└── styles/
    └── global.css
```

### Komentar Kode

- Tulis komentar dalam **Bahasa Indonesia**
- Komentar hanya untuk logika yang **benar-benar kompleks** dan sulit dipahami dari nama kode
- Jangan beri komentar untuk hal yang sudah jelas dari nama fungsi/variabel
- Prinsip: **kode yang bersih lebih baik dari komentar yang banyak**

Contoh buruk (jangan dilakukan):
```typescript
// Ambil semua post dari collection
const posts = await getCollection('blog')
```

Contoh baik (komentar hanya jika benar-benar perlu):
```typescript
// Urutkan berdasarkan tanggal terbaru, lalu filter draft
// karena Astro tidak support chaining filter + sort secara native
const posts = (await getCollection('blog'))
  .filter(post => !post.data.draft)
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
```

### Dokumentasi Fitur (docs/*.md)

Tulis dalam **Bahasa Indonesia**, format:
```markdown
# Nama Fitur

## Tujuan
[Jelaskan tujuan fitur ini]

## File yang Terlibat
- `path/ke/file.ts` — [deskripsi peran file]

## Langkah Pengerjaan
- [x] Langkah 1 — selesai (commit: abc1234)
- [x] Langkah 2 — selesai (commit: def5678)
- [ ] Langkah 3 — belum

## Catatan Teknis
[Hal penting yang perlu diingat tentang implementasi ini]
```

---

## Batasan Tegas

**JANGAN lakukan tanpa persetujuan:**
- Hapus atau rename file yang sudah ada
- Ubah `astro.config.mjs` atau `tsconfig.json`
- Ubah file di `src/components/ui/` (shadcn/ui)
- Tambah dependency baru di `package.json`
- Push ke branch main langsung

**SELALU lakukan:**
- Jalankan `npm run build` untuk verifikasi sebelum commit
- Update `docs/nama-fitur.md` setelah setiap langkah
- Minta persetujuan sebelum lanjut ke langkah berikutnya
- Gunakan TypeScript strict — tidak ada `any` tanpa alasan jelas
