import { Hono } from "hono";
import { songs } from "../data/songs";

const app = new Hono();

// Return all songs (without full lyrics for the listing)
app.get("/api/songs", (c) => {
  const listing = songs.map(({ id, title, titleTibetan, artist, artistTibetan, genre, year, description, youtubeId }) => ({
    id,
    title,
    titleTibetan,
    artist,
    artistTibetan,
    genre,
    year,
    description,
    youtubeId,
    lineCount: songs.find((s) => s.id === id)?.lyrics.length ?? 0,
  }));
  return c.json(listing);
});

// Return a single song with full lyrics
app.get("/api/songs/:id", (c) => {
  const id = c.req.param("id");
  const song = songs.find((s) => s.id === id);
  if (!song) return c.json({ error: "Not found" }, 404);
  return c.json(song);
});

export default app;
