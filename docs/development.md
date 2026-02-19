# oxobzcodes.dev — Panduan Development

> Baca file ini sebelum mengerjakan APAPUN.
> File ini adalah sumber kebenaran tunggal untuk seluruh project.

---

## Siapa Saya

Nama saya **Wahid Rizka Fathurrohman**, seorang Full-Stack Developer.
Portfolio ini dibangun di `oxobzcodes.dev` dan dideploy ke VPS via Docker + Nginx.

---

## Tech Stack (TERKUNCI)

```
Framework   : Astro 5.17.x
UI Library  : React 19.x
Styling     : Tailwind CSS 4.x (Vite plugin)
Components  : shadcn/ui
Content     : Astro Content Collections + MDX
Language    : TypeScript (strict mode)
Package Mgr : npm
Deploy      : Docker + Nginx di VPS
CI/CD       : GitHub Actions
```

> Jangan tambah, hapus, atau upgrade dependency tanpa persetujuan saya.

---

## Struktur Folder

```
oxobzcodes-dev/
├── .agent/
│   ├── rules.md
│   ├── workflows.md
│   └── skills/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── DEVELOPMENT.md        ← file ini
│   └── [nama-fitur].md       ← dokumentasi per fitur
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── ui/               ← shadcn/ui (jangan disentuh manual)
│   │   ├── layout/           ← Navbar, Footer, BaseHead
│   │   └── shared/           ← komponen reusable
│   ├── content/
│   │   ├── blog/             ← artikel .mdx
│   │   └── portfolio/        ← project .mdx
│   ├── data/
│   │   ├── site.json
│   │   ├── about.json
│   │   ├── skills.json
│   │   ├── experiences.json
│   │   ├── education.json
│   │   ├── certifications.json   ← kosong dulu
│   │   └── opensource.json       ← kosong dulu
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro           ← halaman utama (Hero + preview sections)
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── portfolio/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── contact.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Halaman & Sections

### Halaman: `/` (index)
Berisi sections berurutan:
1. **Hero** — nama, role, tagline, tombol CTA, link sosial
2. **Featured Projects** — 2-3 project dengan `featured: true`
3. **Latest Posts** — 3 artikel blog terbaru

### Halaman: `/about`
Berisi sections berurutan:
1. **Bio** — foto, paragraf perkenalan, personality traits
2. **Skills** — tech stack dikelompokkan per kategori dengan level
3. **Experience** — riwayat pekerjaan (terbaru di atas)
4. **Education** — riwayat pendidikan

### Halaman: `/portfolio`
- List semua project (filter by kategori)
- Detail project: `/portfolio/[slug]`

### Halaman: `/blog`
- List semua artikel (filter by tag)
- Detail artikel: `/blog/[slug]`

### Halaman: `/contact`
- Tombol email + link sosial (tidak pakai form)

---

## Struktur Data Lengkap

### `src/data/site.json`
Dipakai oleh halaman Hero dan Contact.

```json
{
  "name": "Wahid Rizka Fathurrohman",
  "nickname": "Wahid",
  "role": "Full-Stack Developer",
  "tagline": "Membangun sistem yang scalable dan maintainable dari backend hingga frontend.",
  "avatar": "/images/avatar.jpg",
  "location": "Jakarta, Indonesia",
  "availableForWork": true,
  "email": "hello@oxobzcodes.dev",
  "resumeUrl": "/resume.pdf",
  "socials": {
    "github": "https://github.com/wahidrizka",
    "linkedin": "https://linkedin.com/in/wahidrizka",
    "twitter": ""
  }
}
```

### `src/data/about.json`
```json
{
  "bio": [
    "Saya adalah seorang Full-Stack Developer dengan pengalaman lebih dari 2 tahun...",
    "Saya percaya bahwa kode yang baik bukan hanya yang bekerja, tetapi yang mudah dipahami dan dipelihara."
  ],
  "personality": ["Problem Solver", "Detail Oriented", "Fast Learner"],
  "interests": ["Backend Architecture", "DevOps", "Open Source"],
  "currentFocus": "Mengerjakan re-engineering sistem BPDP sambil membangun portfolio ini.",
  "funFact": "Saya mulai coding dari competitive programming, bukan tutorial YouTube."
}
```

### `src/data/skills.json`
Level yang valid: `"beginner"` | `"intermediate"` | `"advanced"` | `"expert"`

```json
[
  {
    "category": "Frontend",
    "items": [
      { "name": "React", "level": "expert", "icon": "react" },
      { "name": "Next.js", "level": "advanced", "icon": "nextjs" },
      { "name": "Astro", "level": "intermediate", "icon": "astro" },
      { "name": "Tailwind CSS", "level": "expert", "icon": "tailwind" },
      { "name": "TypeScript", "level": "advanced", "icon": "typescript" }
    ]
  },
  {
    "category": "Backend",
    "items": [
      { "name": "PHP Laravel", "level": "expert", "icon": "laravel" },
      { "name": "NestJS", "level": "advanced", "icon": "nestjs" },
      { "name": "Java Spring Boot", "level": "intermediate", "icon": "spring" },
      { "name": "Node.js", "level": "advanced", "icon": "nodejs" }
    ]
  },
  {
    "category": "Database",
    "items": [
      { "name": "PostgreSQL", "level": "advanced", "icon": "postgresql" },
      { "name": "MySQL", "level": "expert", "icon": "mysql" }
    ]
  },
  {
    "category": "DevOps & Tools",
    "items": [
      { "name": "Docker", "level": "intermediate", "icon": "docker" },
      { "name": "GitHub Actions", "level": "intermediate", "icon": "github" },
      { "name": "Nginx", "level": "intermediate", "icon": "nginx" },
      { "name": "Git", "level": "expert", "icon": "git" }
    ]
  }
]
```

### `src/data/experiences.json`
```json
[
  {
    "id": "bpdp-2026",
    "company": "BPDP (Badan Pengelola Dana Perkebunan)",
    "companyUrl": "https://bpdp.or.id",
    "role": "Software Developer",
    "type": "contract",
    "period": { "start": "2026-01", "end": null },
    "current": true,
    "location": "Jakarta, Indonesia",
    "locationType": "onsite",
    "description": "Mengerjakan re-engineering website bpdp.or.id, migrasi database MySQL ke PostgreSQL, dan koordinasi dengan vendor ekosistem IT BPDP.",
    "highlights": [
      "Migrasi database MySQL ke PostgreSQL",
      "Re-engineering website bpdp.or.id",
      "Koordinasi vendor ERP, HRIS, eOffice v3, dan middleware API"
    ],
    "stack": ["NestJS", "PostgreSQL", "React", "TypeScript"]
  },
  {
    "id": "melkhior-2024",
    "company": "Melkhior Teknologi",
    "companyUrl": "",
    "role": "Full-Stack Developer",
    "type": "fulltime",
    "period": { "start": "2024-06", "end": "2025-12" },
    "current": false,
    "location": "Jakarta, Indonesia",
    "locationType": "hybrid",
    "description": "Mengerjakan infrastruktur perbankan CIMB Niaga.",
    "highlights": ["Kontribusi pada sistem perbankan CIMB Niaga"],
    "stack": ["Java Spring Boot", "React", "PostgreSQL"]
  },
  {
    "id": "trusta-2023",
    "company": "Trusta Technologies",
    "companyUrl": "",
    "role": "Odoo Developer",
    "type": "fulltime",
    "period": { "start": "2023-01", "end": "2024-05" },
    "current": false,
    "location": "Indonesia",
    "locationType": "remote",
    "description": "Pengembangan modul Odoo ERP untuk berbagai klien.",
    "highlights": ["Pengembangan modul Odoo ERP kustom"],
    "stack": ["Python", "Odoo", "PostgreSQL"]
  },
  {
    "id": "larissa-2022",
    "company": "Larissa Aesthetic Center",
    "companyUrl": "",
    "role": "Full-Stack Developer",
    "type": "fulltime",
    "period": { "start": "2022-01", "end": "2022-12" },
    "current": false,
    "location": "Yogyakarta, Indonesia",
    "locationType": "onsite",
    "description": "Pengembangan sistem e-commerce dan manajemen klinik.",
    "highlights": ["Pengembangan sistem e-commerce", "Manajemen data klinik"],
    "stack": ["PHP Laravel", "MySQL", "JavaScript"]
  }
]
```

### `src/data/education.json`
```json
[
  {
    "id": "amikom",
    "institution": "Universitas AMIKOM",
    "institutionUrl": "https://amikom.ac.id",
    "degree": "S1",
    "major": "Informatika",
    "period": { "start": "2020", "end": null },
    "current": true,
    "location": "Yogyakarta, Indonesia",
    "gpa": null,
    "highlights": []
  }
]
```

### `src/data/certifications.json` — kosong, diisi nanti
```json
[]
```

### `src/data/opensource.json` — kosong, diisi nanti
```json
[]
```

---

## Schema Content Collections (`src/content.config.ts`)

### Blog Frontmatter
```yaml
---
title: string           # judul artikel
description: string     # maks 160 karakter, untuk SEO & card preview
pubDate: date           # format YYYY-MM-DD
updatedDate: date       # opsional
cover: image            # opsional
tags: string[]          # huruf kecil semua
series: string          # opsional, nama seri artikel
seriesPart: number      # opsional, urutan dalam seri
draft: boolean          # true = tidak tampil di production
---
```

### Portfolio Frontmatter
```yaml
---
title: string           # nama project
description: string     # maks 160 karakter
pubDate: date           # tanggal selesai/publish
cover: image            # opsional
status: string          # "production" | "development" | "archived"
category: string        # "fullstack" | "frontend" | "backend" | "other"
featured: boolean       # true = tampil di homepage
stack: string[]         # teknologi yang digunakan
liveUrl: string         # opsional
repoUrl: string         # opsional
teamSize: number        # 1 = solo project
draft: boolean
---
```

---

## Aturan Development

### 1. Satu Fitur = Satu File Dokumentasi

Setiap mulai fitur baru → buat `docs/[nama-fitur].md` terlebih dahulu.
Format nama file: kebab-case. Contoh: `docs/blog-collection.md`

### 2. Pecah Fitur Menjadi Langkah Kecil

Setiap fitur dipecah menjadi langkah-langkah kecil:
- Buat file
- Tambah schema/tipe
- Implementasi logika
- Tambah styling
- Hubungkan ke halaman

### 3. Alur Setelah Setiap Langkah

Setelah 1 langkah selesai, lakukan berurutan:
1. Jalankan `npx tsc --noEmit` → pastikan tidak ada error TypeScript
2. Jalankan `npm run build` → pastikan build berhasil
3. Update `docs/[nama-fitur].md` → tandai langkah selesai, catat file yang berubah
4. Buat commit dengan format: `feat([nama-fitur]): deskripsi singkat`
5. Tampilkan ringkasan dan **minta persetujuan saya** sebelum lanjut langkah berikutnya

Format ringkasan setelah commit:
```
✅ Langkah [N] selesai: [deskripsi]

File yang dibuat/diubah:
- [file 1] — [apa yang dilakukan]
- [file 2] — [apa yang dilakukan]

Commit: [hash]

Langkah berikutnya: [deskripsi langkah N+1]

Boleh lanjut?
```

### 4. Ganti Fitur = File Dokumentasi Baru

Jangan campur dokumentasi dua fitur dalam satu file.
Buat file baru: `docs/[nama-fitur-baru].md`

---

## Standar Penulisan Kode

### Naming Convention

| Konteks | Konvensi | Contoh |
|---|---|---|
| Komponen Astro/React | PascalCase | `BlogCard.astro`, `NavBar.tsx` |
| File halaman Astro | kebab-case | `src/pages/blog/index.astro` |
| File utilitas | camelCase | `formatDate.ts` |
| Variabel/fungsi | camelCase | `getCollection`, `formatDate` |
| Tipe/Interface TypeScript | PascalCase | `BlogPost`, `Experience` |
| Konstanta | UPPER_SNAKE_CASE | `SITE_URL` |
| Folder | kebab-case | `src/components/blog-card/` |

### Komentar Kode

- Tulis komentar dalam **Bahasa Indonesia**
- Komentar hanya untuk logika yang **benar-benar kompleks**
- Prinsip: kode bersih lebih baik dari komentar banyak

```typescript
// ❌ jangan — sudah jelas dari nama fungsi
const posts = await getCollection('blog') // ambil semua post

// ✅ boleh — logika tidak intuitif
// filter draft di production, sort descending tidak bisa di-chain langsung
const posts = (await getCollection('blog'))
  .filter(post => import.meta.env.PROD ? !post.data.draft : true)
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
```

### Larangan Tegas

- Tidak ada `any` di TypeScript tanpa penjelasan
- Tidak modifikasi file di `src/components/ui/` (shadcn/ui)
- Tidak push langsung ke branch `main`
- Tidak tambah dependency tanpa persetujuan saya
- Tidak ubah `astro.config.mjs` atau `tsconfig.json` tanpa persetujuan saya

---

## Urutan Implementasi

Kerjakan fitur sesuai urutan ini. Jangan lompat ke fitur berikutnya sebelum fitur saat ini selesai dan saya setujui.

### Tahap 1 — Fondasi
- [ ] `1a` — Setup `content.config.ts` (schema Zod untuk blog + portfolio)
- [ ] `1b` — Buat semua file JSON data (site, about, skills, experiences, education, certifications kosong, opensource kosong)
- [ ] `1c` — Setup `BaseLayout.astro` (HTML head, meta, font)
- [ ] `1d` — Setup `Navbar` dan `Footer`

### Tahap 2 — Halaman Utama
- [ ] `2a` — Buat section `Hero` di `index.astro`
- [ ] `2b` — Buat section `Featured Projects` di `index.astro`
- [ ] `2c` — Buat section `Latest Posts` di `index.astro`

### Tahap 3 — Halaman About
- [ ] `3a` — Bio + personality traits
- [ ] `3b` — Skills dengan level
- [ ] `3c` — Experience timeline
- [ ] `3d` — Education

### Tahap 4 — Halaman Blog
- [ ] `4a` — List artikel (`/blog`)
- [ ] `4b` — Detail artikel (`/blog/[slug]`)
- [ ] `4c` — Filter by tag

### Tahap 5 — Halaman Portfolio
- [ ] `5a` — List project (`/portfolio`)
- [ ] `5b` — Detail project (`/portfolio/[slug]`)
- [ ] `5c` — Filter by kategori

### Tahap 6 — Halaman Contact
- [ ] `6a` — Halaman contact dengan email + sosial

### Tahap 7 — SEO & Polish
- [ ] `7a` — Meta tags, Open Graph, sitemap
- [ ] `7b` — Responsive check semua halaman
- [ ] `7c` — Dark mode (jika diinginkan)

---

## Format Dokumentasi Fitur (`docs/[nama-fitur].md`)

```markdown
# [Nama Fitur]

**Mulai:** YYYY-MM-DD
**Status:** 🚧 Dalam pengerjaan / ✅ Selesai

## Tujuan
[Apa yang ingin dicapai]

## File yang Terlibat
| File | Peran |
|---|---|
| `src/path/file.ts` | deskripsi |

## Langkah
- [ ] Langkah 1: deskripsi
- [ ] Langkah 2: deskripsi

## Log
### Langkah 1 — deskripsi
- Commit: `abc1234`
- File: `path/file.ts` — apa yang dilakukan

## Catatan Teknis
[Keputusan arsitektur atau hal penting]
```

---

## CI/CD

Pipeline GitHub Actions di `.github/workflows/deploy.yml`:

1. Trigger: push ke branch `main`
2. Build: `npm run build` → output ke `dist/`
3. Deploy: kirim folder `dist/` ke VPS via SSH
4. VPS: Nginx serve static files dari folder yang sudah diupdate

Detail konfigurasi ada di `docs/cicd.md` setelah setup selesai.
