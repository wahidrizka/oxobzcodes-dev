# Design System — TERKUNCI 🔒

> File ini adalah referensi visual yang TERKUNCI — tidak boleh berubah sampai project selesai.
> Visual Direction: **Vercel-Inspired Dark**
> Referensi: https://vercel.com

---

## Font

**Package:** `non.geist` (npm install non.geist)

Import di `src/styles/global.css`:

```css
@import "non.geist";
@import "non.geist/mono";
```

CSS Variables:

```css
--font-sans: "Geist-Variable", system-ui, sans-serif;
--font-mono: "GeistMono-Variable", monospace;
```

Tailwind config:

- `font-family: var(--font-sans)` → default untuk semua teks
- `font-family: var(--font-mono)` → untuk kode, badge teknis, snippet

---

## Warna — Custom Tokens

Daftarkan di `src/styles/global.css` sebagai CSS variables:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  --muted: #888888;
  --muted-foreground: #a1a1a1;
  --border: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(255, 255, 255, 0.2);
  --card: #0a0a0a;
  --card-hover: #111111;
  --accent: #ffffff;
  --accent-foreground: #000000;
  --destructive: #ff4444;
}
```

---

## shadcn/ui — Override Defaults

Override theme di `global.css` menggunakan color tokens di atas.
**Jangan ubah file di `src/components/ui/`** — extend via className atau CSS variables saja.

---

## Komponen Pattern

| Komponen        | Class                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Button primer   | `bg-white text-black hover:bg-gray-200 transition-colors duration-200`                                |
| Button sekunder | `border border-white/20 text-white hover:bg-white/10 transition-colors duration-200`                  |
| Card            | `bg-[#0a0a0a] border border-white/10 hover:border-white/20 rounded-lg transition-colors duration-200` |
| Navbar          | `bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50`                             |
| Badge / tag     | `text-xs bg-white/5 border border-white/10 rounded-full px-2 py-0.5 font-mono`                        |
| Code snippet    | `font-mono bg-[#111] border border-white/10 rounded px-1.5 py-0.5 text-sm`                            |

---

## Prinsip Wajib

- Background selalu `#000000` (pure black)
- Tidak ada gradient warna-warni — hanya white/black opacity jika perlu
- Whitespace sangat luas — section padding minimal `py-24` atau `py-32`
- Tidak ada shadow berwarna
- Animasi: **HANYA** `transition duration-200` pada hover, tidak lebih
- Heading: `letter-spacing -0.02em` sampai `-0.04em` (tight), `font-weight bold`
- Hero font size: `clamp(2.5rem, 6vw, 5rem)`

---

## Branch Strategy

- Working branch: `dev`
- Branch per fitur: `feat/[nama-fitur]` → merge ke `dev`
- `main`: hanya disentuh CI/CD, **JANGAN** commit langsung
