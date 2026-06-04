import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./SongView.module.css";

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
    <div className={styles.page}>
      <div className={styles.nav}>
        <Link to="/" className={styles.back}>
          ← All Songs
        </Link>
      </div>

      {loading && <p className={styles.state}>Loading…</p>}
      {error && <p className={styles.stateError}>{error}</p>}

      {song && (
        <>
          <header className={styles.header}>
            <div className={styles.titleBlock}>
              <h1 className={"bo " + styles.tibetanTitle}>{song.titleTibetan}</h1>
              <h2 className={styles.englishTitle}>{song.title}</h2>
            </div>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                {song.artistTibetan && (
                  <span className={"bo " + styles.metaTib}>{song.artistTibetan}</span>
                )}
                <span>{song.artist}</span>
              </span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>{song.genre}</span>
              {song.year && (
                <>
                  <span className={styles.metaDot}>·</span>
                  <span className={styles.metaItem}>{song.year}</span>
                </>
              )}
            </div>
            {song.description && (
              <p className={styles.description}>{song.description}</p>
            )}
          </header>

          <div className={styles.viewToggle}>
            {(["parallel", "tibetan", "english"] as ViewMode[]).map((m) => (
              <button
                key={m}
                className={styles.toggleBtn + (mode === m ? " " + styles.active : "")}
                onClick={() => setMode(m)}
              >
                {m === "parallel" ? "Parallel" : m === "tibetan" ? "བོད་སྐད།" : "English"}
              </button>
            ))}
          </div>

          <div className={styles.rule} />

          <div className={styles.lyrics}>
            {mode === "parallel" && (
              <div className={styles.parallelGrid}>
                <div className={styles.colHeader + " bo"}>བོད་སྐད།</div>
                <div className={styles.colHeader}>English</div>
                {song.lyrics.map((line, i) => (
                  <>
                    <div key={`t-${i}`} className={"bo " + styles.lineTibetan}>
                      {line.tibetan}
                    </div>
                    <div key={`e-${i}`} className={styles.lineEnglish}>
                      {line.english}
                    </div>
                  </>
                ))}
              </div>
            )}

            {mode === "tibetan" && (
              <div className={styles.singleCol}>
                {song.lyrics.map((line, i) => (
                  <p key={i} className={"bo " + styles.lineTibetanSingle}>
                    {line.tibetan}
                  </p>
                ))}
              </div>
            )}

            {mode === "english" && (
              <div className={styles.singleCol}>
                {song.lyrics.map((line, i) => (
                  <p key={i} className={styles.lineEnglishSingle}>
                    {line.english}
                  </p>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
