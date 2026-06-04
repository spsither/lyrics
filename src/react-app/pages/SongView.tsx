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
  youtubeId: string;
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
    setError(null);

    fetch(`/api/songs/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
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
      <main className="container mx-auto max-w-7xl px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-[#d8401c]"
        >
          ← All Songs
        </Link>

        {loading && (
          <p className="mt-12 text-stone-500">
            Loading…
          </p>
        )}

        {error && (
          <p className="mt-12 text-red-600">
            {error}
          </p>
        )}

        {song && (
          <>
            <header className="mt-10 border-b border-stone-200 pb-12">
              <div className="space-y-4">
                <h1 className="bo text-3xl text-[#d8401c] md:text-5xl">
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
                  <p className="max-w-3xl leading-relaxed text-stone-600">
                    {song.description}
                  </p>
                )}
              </div>
            </header>

            <div className="mt-12 lg:grid lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-12">
              <aside className="mb-10 lg:sticky lg:top-24 lg:self-start">
                <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${song.youtubeId}`}
                      title={song.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-5">
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="uppercase tracking-widest text-stone-400">
                        Artist
                      </div>
                      <div className="mt-1">{song.artist}</div>
                    </div>

                    <div>
                      <div className="uppercase tracking-widest text-stone-400">
                        Genre
                      </div>
                      <div className="mt-1">{song.genre}</div>
                    </div>

                    {song.year && (
                      <div>
                        <div className="uppercase tracking-widest text-stone-400">
                          Year
                        </div>
                        <div className="mt-1">{song.year}</div>
                      </div>
                    )}

                    <div>
                      <div className="uppercase tracking-widest text-stone-400">
                        Lines
                      </div>
                      <div className="mt-1">
                        {song.lyrics.length}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              <section>
                <div className="mb-10 flex justify-center lg:justify-start">
                  <div className="inline-flex rounded-full border border-stone-200 bg-white p-1">
                    {(["parallel", "tibetan", "english"] as ViewMode[]).map(
                      (m) => (
                        <button
                          key={m}
                          onClick={() => setMode(m)}
                          className={`rounded-full px-4 py-2 text-sm transition ${
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

                {mode === "parallel" && (
                  <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                    <div className="bo border-b border-stone-200 pb-3 text-sm text-[#d8401c]">
                      བོད་སྐད།
                    </div>

                    <div className="border-b border-stone-200 pb-3 text-sm text-stone-500">
                      English
                    </div>

                    {song.lyrics.map((line, i) => (
                      <div key={i} className="contents">
                        <div className="bo text-xl leading-loose">
                          {line.tibetan}
                        </div>

                        <div className="leading-loose text-stone-700">
                          {line.english}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {mode === "tibetan" && (
                  <div className="mx-auto max-w-4xl">
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
                  <div className="mx-auto max-w-4xl">
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
              </section>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
