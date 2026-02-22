# Base Layout

**Mulai:** 2026-02-19
**Status:** ✅ Selesai

## Tujuan

Setup `BaseLayout.astro` sebagai layout utama dengan HTML boilerplate, SEO meta tags, dan design system (font Geist + token warna Vercel dark).

## File yang Terlibat

| File                           | Peran                                                    |
| ------------------------------ | -------------------------------------------------------- |
| `src/layouts/BaseLayout.astro` | Layout utama: head, meta, OG, canonical, slot            |
| `src/styles/global.css`        | Design system tokens, Geist font import, Tailwind config |
| `src/pages/index.astro`        | Updated: menggunakan BaseLayout                          |
| `package.json`                 | Dependency baru: `non.geist`                             |

## Langkah

- [x] Langkah 1: Install `non.geist` font package
- [x] Langkah 2: Rewrite `global.css` — Geist font imports, Vercel dark color tokens
- [x] Langkah 3: Buat `BaseLayout.astro` — HTML boilerplate, SEO, OG, favicon, slot
- [x] Langkah 4: Update `index.astro` — gunakan BaseLayout
- [x] Langkah 5: Verifikasi `npx tsc --noEmit` (0 error) + `npm run build` (berhasil)

## Log

### Langkah 1–5

- `non.geist` diinstall via npm
- `global.css` ditulis ulang: hapus shadcn zinc theme, ganti dengan dark-only Vercel tokens
- `BaseLayout.astro` — props: `title`, `description`, `image?`; canonical URL di-guard untuk `Astro.site` undefined
- Build: ✅ berhasil

## Catatan Teknis

- `Astro.site` belum dikonfigurasi di `astro.config.mjs` — canonical URL fallback ke `Astro.url`
- Design system dark-only: tidak ada `:root` light mode, semua warna sudah dark
- `shadcn/tailwind.css` import dihapus karena token sudah di-override penuh
