# Navbar & Footer

**Mulai:** 2026-02-19
**Status:** ✅ Selesai

## Tujuan

Buat komponen Navbar dan Footer, lalu pasang di BaseLayout.

## File yang Terlibat

| File                                 | Peran                                  |
| ------------------------------------ | -------------------------------------- |
| `src/components/layout/Navbar.astro` | Sticky navbar dengan logo + nav links  |
| `src/components/layout/Footer.astro` | Footer dengan copyright + social links |
| `src/layouts/BaseLayout.astro`       | Updated: import Navbar + Footer        |

## Langkah

- [x] Langkah 1: Buat `Navbar.astro` — sticky, backdrop-blur, nav links, active state
- [x] Langkah 2: Buat `Footer.astro` — social links dari site.json, copyright
- [x] Langkah 3: Update `BaseLayout.astro` — pasang Navbar + Footer
- [x] Langkah 4: Verifikasi `npx tsc --noEmit` (0 error) + `npm run build` (berhasil)

## Log

### Langkah 1–4

- Navbar: `bg-black/80 backdrop-blur-md`, logo `font-mono`, active link via `Astro.url.pathname`
- Footer: social links dari `site.json`, `© {year} {name}`
- BaseLayout: `<Navbar />` → `<slot />` → `<Footer />`
- Build: ✅ berhasil

## Catatan Teknis

- Mobile hamburger menu belum diimplementasi (sesuai instruksi)
- `site.json` di-include di branch ini karena diperlukan oleh Footer
