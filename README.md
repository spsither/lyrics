# གཞས་ཚིག · Tibetan Lyrics

A Vite + React + Hono + Cloudflare Pages app for browsing Tibetan songs with parallel Tibetan and English lyrics.

## Stack

- **Frontend**: React + React Router (SPA, client-side routing)
- **Backend**: Hono running as a Cloudflare Worker (`/api/*` routes)
- **Build**: Vite + `@cloudflare/vite-plugin`
- **Font**: [Noto Serif Tibetan](https://fonts.google.com/noto/specimen/Noto+Serif+Tibetan) via Google Fonts

## Project Structure

```
lyrics/
├── index.html
├── vite.config.ts
├── wrangler.jsonc
├── src/
│   ├── data/
│   │   └── songs.ts          ← ADD NEW SONGS HERE
│   ├── worker/
│   │   └── index.ts          ← Hono API (serves /api/songs, /api/songs/:id)
│   └── react-app/
│       ├── main.tsx           ← React entry + router
│       ├── index.css          ← Global styles + font import
│       └── pages/
│           ├── SongList.tsx   ← Home page: song grid
│           ├── SongList.module.css
│           ├── SongView.tsx   ← Lyrics page: parallel / tibetan / english modes
│           └── SongView.module.css
```

## Routes

| Route | Description |
|---|---|
| `/` | Song list |
| `/songs/:id` | Full lyrics view |
| `/api/songs` | JSON: all songs (no lyrics) |
| `/api/songs/:id` | JSON: single song with lyrics |

## Adding a New Song

Edit `src/data/songs.ts` and add an entry to the `songs` array:

```ts
{
  id: "my-song-id",           // URL-safe slug, used in /songs/:id
  title: "English Title",
  titleTibetan: "བོད་སྐད་ཀྱི་མིང་།",
  artist: "Artist Name",
  artistTibetan: "མཁན་པའི་མིང་།",  // optional
  genre: "Traditional",
  year: 1990,                  // optional
  description: "A short note about the song.", // optional
  lyrics: [
    { tibetan: "བོད་སྐད་གཞས་ཚིག", english: "English translation" },
    // one object per line
  ],
},
```

No database needed — songs live in the TypeScript file and are served from Hono at runtime.

## Development

```bash
npm install
npm run dev
```

App at `http://localhost:5173`. Hono API runs in the Cloudflare Workers runtime via the Vite plugin.

## Deploy

```bash
npm run build
npx wrangler deploy
```

Or just push to GitHub — Cloudflare Pages will auto-deploy.

## Tibetan Font Notes

`Noto Serif Tibetan` is loaded from Google Fonts. Apply it with the `.bo` CSS class (already defined globally):

```css
.bo {
  font-family: 'Noto Serif Tibetan', serif;
  line-height: 1.8;
}
```

All Tibetan text in the app already uses this class.
