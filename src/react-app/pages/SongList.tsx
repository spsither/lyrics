import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
}

export default function SongList() {
  const [songs, setSongs] = useState<SongSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/songs")
      .then((r) => r.json())
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load songs.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="border-b border-stone-200">
        <div className="container mx-auto max-w-5xl px-6 py-20">
          <div className="space-y-4">
            <span className="bo block text-sm tracking-[0.3em] text-[#d8401c]">
              གཞས་ཚིག
            </span>

            <h1 className="font-serif text-5xl md:text-7xl">
              Tibetan Lyrics
            </h1>

            <p className="max-w-2xl text-lg text-stone-600">
              A living collection of songs in Tibetan and English
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-5xl px-6 py-12">
        {loading && (
          <p className="text-stone-500">Loading…</p>
        )}

        {error && (
          <p className="text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <ul className="divide-y divide-stone-200 border-y border-stone-200">
            {songs.map((song) => (
              <li key={song.id}>
                <Link
                  to={`/songs/${song.id}`}
                  className="group block py-8 transition-colors hover:bg-stone-100/60"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <div className="bo text-xl text-[#d8401c]">
                        {song.titleTibetan}
                      </div>

                      <h2 className="text-2xl font-medium">
                        {song.title}
                      </h2>
                    </div>

                    <div className="max-w-xl space-y-2 md:text-right">
                      <div className="space-y-1">
                        {song.artistTibetan && (
                          <div className="bo text-stone-700">
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
                        <p className="text-sm leading-relaxed text-stone-600">
                          {song.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 text-[#d8401c] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200">
        <div className="container mx-auto max-w-5xl px-6 py-8 text-sm text-stone-500">
          {songs.length} song{songs.length !== 1 ? "s" : ""} in the collection
        </div>
      </footer>
    </div>
  );
}