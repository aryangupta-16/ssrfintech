"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

export function VideoPlayer({ videoId, title = "Video" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={styles.aspectWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.iframe}
        />
      </div>
    );
  }

  return (
    <div
      className={styles.preview}
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setIsPlaying(true)}
      aria-label={`Play ${title}`}
    >
      <div className={styles.aspectWrapper}>
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className={styles.thumbnail}
        />
        <div className={styles.overlay}>
          <div className={styles.playButton}>
            <Play className={styles.playIcon} />
          </div>
          <p className={styles.playLabel}>Watch Video</p>
        </div>
      </div>
    </div>
  );
}
