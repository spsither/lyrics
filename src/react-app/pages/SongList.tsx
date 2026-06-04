import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SongList.module.css";

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
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.headerScript + " bo"}>གཞས་ཚིག</span>
          <h1 className={styles.siteTitle}>Tibetan Lyrics</h1>
          <p className={styles.subtitle}>A living collection of songs in Tibetan and English</p>
        </div>
        <div className={styles.headerRule} />
      </header>

      <main className={styles.main}>
        {loading && (
          <p className={styles.state}>Loading…</p>
        )}
        {error && (
          <p className={styles.stateError}>{error}</p>
        )}
        {!loading && !error && (
          <ul className={styles.list}>
            {songs.map((song) => (
              <li key={song.id}>
                <Link to={`/songs/${song.id}`} className={styles.card}>
                  <div className={styles.cardLeft}>
                    <span className={styles.tibetanTitle + " bo"}>{song.titleTibetan}</span>
                    <span className={styles.englishTitle}>{song.title}</span>
                  </div>
                  <div className={styles.cardRight}>
                    <span className={styles.artist}>
                      {song.artistTibetan && (
                        <span className={"bo " + styles.artistTib}>{song.artistTibetan}</span>
                      )}
                      <span>{song.artist}</span>
                    </span>
                    <span className={styles.meta}>
                      {song.genre}
                      {song.year ? ` · ${song.year}` : ""}
                      {` · ${song.lineCount} lines`}
                    </span>
                    {song.description && (
                      <span className={styles.desc}>{song.description}</span>
                    )}
                  </div>
                  <span className={styles.arrow}>→</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className={styles.footer}>
        <span>{songs.length} song{songs.length !== 1 ? "s" : ""} in the collection</span>
      </footer>
    </div>
  );
}
