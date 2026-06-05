import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SegmentedPill from "../components/SegmentedPill"

interface SongSummary {
  id: string;
  title: string;
  titleTibetan: string;
  artist: string;
  artistTibetan?: string;
  genre: string;
  year?: number;
  description?: string;
  lineCount: number;
  youtubeId: string;
}

export default function SongList() {
  const [songs, setSongs] = useState<SongSummary[]>([]);
  const [genres, setGenres] = useState<string[]>(["All"]);
  const [genreFilter, setGenreFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/songs")
      .then((r) => r.json() as Promise<SongSummary[]>)
      .then((data) => {
        setSongs(data);

        const extracted = Array.from(
          new Set(data.map((s: SongSummary) => s.genre))
        );

        setGenres(["All", ...extracted]);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load songs.");
        setLoading(false);
      });
  }, []);

  const filteredSongs = songs.filter((s) =>
    genreFilter === "All" ? true : s.genre === genreFilter
  );

  const artistCount = useMemo(
    () => new Set(songs.map((s) => s.artist)).size,
    [songs]
  );

  const oldestYear = useMemo(
    () =>
      songs
        .map((s) => s.year)
        .filter((y): y is number => y !== undefined)
        .sort((a, b) => a - b)[0],
    [songs]
  );

  const newestYear = useMemo(
    () =>
      songs
        .map((s) => s.year)
        .filter((y): y is number => y !== undefined)
        .sort((a, b) => b - a)[0],
    [songs]
  );

  // ✅ HERE — before any real UI render
  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="h-10 w-64 animate-pulse rounded-full bg-stone-200" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200">
        <div className="container mx-auto max-w-6xl px-6 py-24">
          <div className="space-y-6">
            <div className="bo text-sm tracking-[0.3em] text-[#d8401c]">
              གཞས་ཚིག
            </div>

            <h1 className="font-serif text-5xl md:text-7xl">
              Tibetan Lyrics
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
              A living archive of Tibetan songs, preserving lyrics,
              translations, artists, and recordings.
            </p>

            <div className="flex flex-wrap gap-6 border-t border-stone-200 pt-6 text-sm text-stone-500">
              <span>
                {songs.length} Songs
              </span>

              <span>
                {artistCount} Artists
              </span>

              {oldestYear && newestYear && (
                <span>
                  {oldestYear}–{newestYear}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search songs, artists, or Tibetan titles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#d8401c]"
          />

          <SegmentedPill
            options={genres}
            value={genreFilter}
            onChange={setGenreFilter}
          />
        </div>

        {loading && (
          <p className="text-stone-500">
            Loading…
          </p>
        )}

        {error && (
          <p className="text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <div className="mb-6 text-sm text-stone-500">
              {filteredSongs.length} result
              {filteredSongs.length !== 1 ? "s" : ""}
            </div>

            <div className="space-y-6">
              {filteredSongs.map((song) => (
                <Link
                  key={song.id}
                  to={`/songs/${song.id}`}
                  className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:border-[#d8401c]/40 hover:shadow-sm"
                >
                  <div className="grid gap-0 md:grid-cols-[260px_1fr]">
                    <div className="aspect-video md:aspect-auto">
                      <img
                        src={`https://i.ytimg.com/vi/${song.youtubeId}/hqdefault.jpg`}
                        alt={song.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="space-y-3">
                        <div className="bo text-lg text-[#d8401c]">
                          {song.titleTibetan}
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl">
                          {song.title}
                        </h2>

                        <div className="space-y-1 text-sm">
                          {song.artistTibetan && (
                            <div className="bo text-stone-600">
                              {song.artistTibetan}
                            </div>
                          )}

                          <div>{song.artist}</div>
                        </div>

                        <div className="text-sm text-stone-500">
                          {song.genre}
                          {song.year ? ` · ${song.year}` : ""}
                          {` · ${song.lineCount} lines`}
                        </div>

                        {song.description && (
                          <p className="max-w-3xl text-sm leading-relaxed text-stone-600">
                            {song.description}
                          </p>
                        )}

                        <div className="pt-2 text-sm text-[#d8401c] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                          Read Lyrics →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredSongs.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-stone-500">
                  No songs match your search.
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}