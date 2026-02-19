# Skill: new-blog-post

## Deskripsi
Membuat file MDX baru untuk artikel blog dengan frontmatter yang lengkap dan benar.

## Trigger
Gunakan skill ini saat prompt mengandung:
- "tulis artikel"
- "buat post"
- "artikel baru"
- "new blog post"

## Schema Frontmatter (sesuai content.config.ts)

```mdx
---
title: "Judul Artikel"
description: "Deskripsi singkat artikel, muncul di preview dan SEO (maks 160 karakter)"
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD  # opsional, isi jika artikel diupdate
cover: "./nama-gambar.png"  # opsional
tags: ["tag1", "tag2"]
draft: false  # set true jika belum siap dipublikasi
---
```

## Langkah

1. Tanya judul artikel jika belum diberikan
2. Generate nama file dari judul: lowercase, ganti spasi dengan `-`, hapus karakter khusus
   Contoh: "Cara Setup n8n di VPS" → `cara-setup-n8n-di-vps.mdx`
3. Buat file di `src/content/blog/[nama-file].mdx`
4. Isi frontmatter lengkap
5. Tambahkan konten awal (minimal heading pertama)
6. Tampilkan hasil dan minta konfirmasi

## Lokasi File
`src/content/blog/[nama-file].mdx`

## Catatan
- `pubDate` menggunakan format YYYY-MM-DD
- `tags` menggunakan huruf kecil semua
- `draft: true` untuk artikel yang masih dalam pengerjaan
- Nama file harus URL-friendly (kebab-case, tanpa karakter khusus)
