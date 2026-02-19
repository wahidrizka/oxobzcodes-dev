# Skill: new-portfolio

## Deskripsi
Membuat file MDX baru untuk project portfolio dengan frontmatter yang lengkap.

## Trigger
Gunakan skill ini saat prompt mengandung:
- "tambah project"
- "portfolio baru"
- "new portfolio"
- "showcase project"

## Schema Frontmatter (sesuai content.config.ts)

```mdx
---
title: "Nama Project"
description: "Deskripsi singkat project (maks 160 karakter)"
pubDate: YYYY-MM-DD
cover: "./nama-gambar.png"  # opsional tapi sangat disarankan
stack: ["React", "NestJS", "PostgreSQL"]
liveUrl: "https://url-demo.com"   # opsional
repoUrl: "https://github.com/..."  # opsional
featured: false  # set true untuk ditampilkan di halaman utama
draft: false
---
```

## Langkah

1. Tanya nama project jika belum diberikan
2. Generate nama file: lowercase kebab-case dari nama project
   Contoh: "BPDP CMS Backend" → `bpdp-cms-backend.mdx`
3. Buat file di `src/content/portfolio/[nama-file].mdx`
4. Isi frontmatter lengkap
5. Tambahkan deskripsi detail project (problem, solution, impact)
6. Tampilkan hasil dan minta konfirmasi

## Lokasi File
`src/content/portfolio/[nama-file].mdx`

## Struktur Konten yang Disarankan

```markdown
## Latar Belakang
[Masalah apa yang diselesaikan project ini]

## Solusi
[Pendekatan teknis yang digunakan]

## Tech Stack
[Penjelasan mengapa memilih teknologi tersebut]

## Hasil / Impact
[Dampak konkret yang dicapai]
```
