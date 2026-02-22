# JSON Data

**Mulai:** 2026-02-19
**Status:** ✅ Selesai

## Tujuan

Buat semua file JSON data di `src/data/` sesuai struktur di `DEVELOPMENT.md`.

## File yang Terlibat

| File                           | Peran                                              |
| ------------------------------ | -------------------------------------------------- |
| `src/data/site.json`           | Data situs: nama, role, tagline, sosial, email     |
| `src/data/about.json`          | Bio, personality, interests, currentFocus, funFact |
| `src/data/skills.json`         | Tech stack per kategori dengan level               |
| `src/data/experiences.json`    | Riwayat pekerjaan (4 entry)                        |
| `src/data/education.json`      | Riwayat pendidikan (1 entry)                       |
| `src/data/certifications.json` | Placeholder kosong `[]`                            |
| `src/data/opensource.json`     | Placeholder kosong `[]`                            |

## Langkah

- [x] Langkah 1: Buat semua 7 file JSON dengan data dari DEVELOPMENT.md
- [x] Langkah 2: Verifikasi `npx tsc --noEmit` — 0 error
- [x] Langkah 3: Verifikasi `npm run build` — berhasil

## Log

### Langkah 1–3 — Buat JSON data + verifikasi

- Semua data disalin persis dari `docs/DEVELOPMENT.md`
- `certifications.json` dan `opensource.json` berisi array kosong `[]`
- Build: ✅ berhasil, TypeScript: ✅ 0 error
