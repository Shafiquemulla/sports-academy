import { useState, useRef, useEffect } from 'react';
import { videos, videoCategories } from '../data/videos';
import './Videos.css';

function Videos() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoPlayerRef = useRef(null);
  const sectionRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  const [videoError, setVideoError] = useState(false);

  // When active video changes, reset play state and scroll player into view if clicked from grid
  const handleSelectVideo = (video) => {
    setActiveVideo(video);
    setVideoError(false);
    setIsPlaying(true);
    if (videoPlayerRef.current) {
      videoPlayerRef.current.load();
      videoPlayerRef.current.play().catch(() => {
        // Autoplay policy might require mute
        setIsMuted(true);
        if (videoPlayerRef.current) {
          videoPlayerRef.current.muted = true;
          videoPlayerRef.current.play().catch(() => {});
        }
      });
    }
  };

  const handlePlayToggle = () => {
    if (!videoPlayerRef.current) return;
    if (videoPlayerRef.current.paused) {
      videoPlayerRef.current.play().catch(() => {
        setIsMuted(true);
        if (videoPlayerRef.current) {
          videoPlayerRef.current.muted = true;
          videoPlayerRef.current.play().catch(() => {});
        }
      });
      setIsPlaying(true);
    } else {
      videoPlayerRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = () => {
    if (!videoPlayerRef.current) return;
    const newMuted = !isMuted;
    videoPlayerRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <section id="videos" className="videos-section" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">Cricket Training Videos</span>
          <h2 className="section-title">
            Watch &amp; Learn from <span>Professional Coaches</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Explore our curated cricket training video library covering batting stance, pace bowling,
            fielding agility, and cricket-specific fitness workouts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="videos-filter animate-on-scroll" role="tablist" aria-label="Filter videos by category">
          {videoCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Main HTML5 Video Player ── */}
        <div className="main-video-player-card animate-on-scroll">
          <div className="video-viewport">
            {!videoError ? (
              <video
                ref={videoPlayerRef}
                className="html5-video-element"
                poster={activeVideo.poster}
                controls
                playsInline
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setVideoError(true)}
                aria-label={activeVideo.title}
              >
                <source src={activeVideo.videoSrc} type="video/mp4" />
                Your browser does not support the HTML5 video element.
              </video>
            ) : (
              <img
                src={activeVideo.poster}
                alt={activeVideo.title}
                className="html5-video-element"
                style={{ objectFit: 'cover' }}
              />
            )}

            {/* Custom overlay when paused on initial load */}
            {!isPlaying && (
              <div className="video-custom-overlay" onClick={handlePlayToggle}>
                <div className="play-button-pulse">
                  <div className="play-triangle-icon"></div>
                </div>
                <span className="play-text">Click to Play Training Drill</span>
              </div>
            )}
          </div>

          {/* Video Metadata & Controls */}
          <div className="video-player-details">
            <div className="video-details-header">
              <span className="video-category-tag">{activeVideo.category}</span>
              <span className="video-duration-badge">⏱️ {activeVideo.duration}</span>
              {activeVideo.coach && (
                <span className="video-coach-tag">👤 {activeVideo.coach}</span>
              )}
            </div>

            <h3 className="player-video-title">{activeVideo.title}</h3>
            <p className="player-video-description">{activeVideo.description}</p>

            {/* Coaching Checkpoints */}
            {activeVideo.points && activeVideo.points.length > 0 && (
              <div className="video-drill-points">
                <span className="drill-points-title">🏏 Key Coaching Checkpoints:</span>
                <ul className="drill-points-list">
                  {activeVideo.points.map((pt, i) => (
                    <li key={i}>✓ {pt}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="video-player-bar">
              <div className="player-stats">
                <span>👁 {activeVideo.views}</span>
                <span>📅 {activeVideo.date}</span>
                <span className="academy-badge-tag">📍 Bandra Training Grounds</span>
              </div>
              <div className="player-quick-actions">
                <button
                  className="video-action-btn"
                  onClick={handleMuteToggle}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? '🔇 Unmute' : '🔊 Mute'}
                </button>
                <button
                  className="video-action-btn primary"
                  onClick={handlePlayToggle}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? '⏸ Pause' : '▶ Play Drill'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Video Playlist Grid ── */}
        <div className="video-library-header">
          <h3 className="video-library-title">Training Library ({filtered.length} Videos)</h3>
          <span className="video-library-hint">Click any video below to load in player</span>
        </div>

        <div className="videos-grid" role="list">
          {filtered.map((video) => {
            const isCurrent = activeVideo.id === video.id;
            return (
              <div
                key={video.id}
                className={`video-card ${isCurrent ? 'active-playing' : ''} animate-on-scroll`}
                onClick={() => handleSelectVideo(video)}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSelectVideo(video); }}
                aria-label={`Select ${video.title}`}
              >
                <div className="video-thumb-wrap">
                  <img
                    src={video.poster}
                    alt={`Cricket drill thumbnail for ${video.title} at Sports Academy Bandra`}
                    className="video-thumb-img"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="450"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&h=450&fit=crop";
                    }}
                  />
                  <div className="video-thumb-overlay" aria-hidden="true">
                    <div className="play-btn">
                      <div className="play-triangle small"></div>
                    </div>
                    <span className="video-duration">{video.duration}</span>
                  </div>
                  {isCurrent && (
                    <div className="now-playing-badge">Now Playing</div>
                  )}
                </div>

                <div className="video-info">
                  <div className="video-info-top">
                    <span className="video-category-tag">{video.category}</span>
                    <span className="video-views-text">{video.views}</span>
                  </div>
                  <h4 className="video-title">{video.title}</h4>
                  <p className="video-short-desc">{video.description.slice(0, 95)}…</p>
                  <div className="video-meta">
                    <span>{video.coach}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Videos;
