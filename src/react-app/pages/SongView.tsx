import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface LyricLine {
  tibetan: string;
  english: string;
}

interface Song {
  id: string;
  title: string;
  titleTibetan: string;
  artist: string;
  artistTibetan?: string;
  genre: string;
  year?: number;
  description?: string;
  lyrics: LyricLine[];
}

type ViewMode = "parallel" | "tibetan" | "english";

export default function SongView() {
  const { id } = useParams<{ id: string }>();

  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<ViewMode>("parallel");

  useEffect(() => {
    setLoading(true);

    fetch(`/api/songs/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) => {
        setSong(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Song not found.");
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <main className="container mx-auto max-w-5xl px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-[#d8401c]"
        >
          ← All Songs
        </Link>

        {loading && (
          <p className="mt-12 text-stone-500">Loading…</p>
        )}

        {error && (
          <p className="mt-12 text-red-600">{error}</p>
        )}

        {song && (
          <>
            {/* Header */}

            <header className="mt-10 border-b border-stone-200 pb-12">
              <div className="space-y-4">
                <h1 className="bo text-3xl md:text-5xl text-[#d8401c]">
                  {song.titleTibetan}
                </h1>

                <h2 className="font-serif text-4xl md:text-6xl">
                  {song.title}
                </h2>

                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
                  {song.artistTibetan && (
                    <span className="bo">
                      {song.artistTibetan}
                    </span>
                  )}

                  <span>{song.artist}</span>

                  <span>·</span>

                  <span>{song.genre}</span>

                  {song.year && (
                    <>
                      <span>·</span>
                      <span>{song.year}</span>
                    </>
                  )}
                </div>

                {song.description && (
                  <p className="max-w-2xl leading-relaxed text-stone-600">
                    {song.description}
                  </p>
                )}
              </div>
            </header>

            {/* Mode Toggle */}

            <div className="my-10 flex justify-center">
              <div className="inline-flex rounded-full border border-stone-200 bg-white p-1">
                {(["parallel", "tibetan", "english"] as ViewMode[]).map(
                  (m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`rounded-full px-4 py-2 text-sm transition
                        ${
                          mode === m
                            ? "bg-[#d8401c] text-white"
                            : "text-stone-600 hover:text-stone-900"
                        }`}
                    >
                      {m === "parallel"
                        ? "Parallel"
                        : m === "tibetan"
                        ? "བོད་སྐད།"
                        : "English"}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Lyrics */}

            {mode === "parallel" && (
              <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                <div className="bo border-b border-stone-200 pb-3 text-sm text-[#d8401c]">
                  བོད་སྐད།
                </div>

                <div className="border-b border-stone-200 pb-3 text-sm text-stone-500">
                  English
                </div>

                {song.lyrics.map((line, i) => (
                  <>
                    <div
                      key={`t-${i}`}
                      className="bo text-lg leading-loose"
                    >
                      {line.tibetan}
                    </div>

                    <div
                      key={`e-${i}`}
                      className="leading-loose text-stone-700"
                    >
                      {line.english}
                    </div>
                  </>
                ))}
              </div>
            )}

            {mode === "tibetan" && (
              <div className="mx-auto max-w-3xl">
                {song.lyrics.map((line, i) => (
                  <p
                    key={i}
                    className="bo py-2 text-center text-2xl leading-loose"
                  >
                    {line.tibetan}
                  </p>
                ))}
              </div>
            )}

            {mode === "english" && (
              <div className="mx-auto max-w-3xl">
                {song.lyrics.map((line, i) => (
                  <p
                    key={i}
                    className="py-2 text-center text-lg leading-relaxed"
                  >
                    {line.english}
                  </p>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}