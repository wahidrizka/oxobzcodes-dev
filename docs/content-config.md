# Content Config

**Mulai:** 2026-02-19
**Status:** ✅ Selesai

## Tujuan

Setup Astro Content Collections dengan schema Zod untuk blog dan portfolio.

## File yang Terlibat

| File                             | Peran                                                  |
| -------------------------------- | ------------------------------------------------------ |
| `src/content.config.ts`          | Definisi collection blog + portfolio dengan schema Zod |
| `src/content/blog/.gitkeep`      | Placeholder direktori konten blog                      |
| `src/content/portfolio/.gitkeep` | Placeholder direktori konten portfolio                 |

## Langkah

- [x] Langkah 1: Buat `src/content.config.ts` dengan schema blog + portfolio
- [x] Langkah 2: Buat folder `src/content/blog/` dan `src/content/portfolio/`
- [x] Langkah 3: Verifikasi `npm run build` — berhasil

## Log

### Langkah 1–3 — Setup content config + content directories

- File: `src/content.config.ts` — definisi 2 collection (blog, portfolio) menggunakan Astro 5 Content Layer API dengan `glob()` loader dan schema callback `({ image }) => z.object(...)`
- File: `src/content/blog/.gitkeep` — placeholder
- File: `src/content/portfolio/.gitkeep` — placeholder
- Build: ✅ berhasil (warning "No files found" expected karena belum ada konten)

## Catatan Teknis

- Astro 5 menggunakan Content Layer API — `image()` bukan named import, melainkan diterima via schema callback `({ image }) => ...`
- Loader menggunakan `glob()` dari `astro/loaders` bukan legacy `type: 'content'`
- Pattern `**/*.mdx` untuk mendukung MDX content
