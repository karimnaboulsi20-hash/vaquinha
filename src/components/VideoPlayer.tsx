import { useRef, useState, useEffect } from 'react';
import { Play, RotateCcw, VolumeX } from 'lucide-react';
import { shouldRevealOffer, calculateProgress } from '../utils/donation';

interface VideoPlayerProps {
  onReveal: () => void;
  isRevealed: boolean;
}

const PRIMARY_VIDEO_SRC = '/assets/aistudio/vsl_optimized_ios.mp4';
const FALLBACK_VIDEO_SRC =
  '/assets/aistudio/SaveClip.App_AQO3Z-83CkEb3iAaSKirWjHR4Az83tNq9l9vNzJmB1KLAVJ0j0NKB7WyimsbUIDmyP37vnetP0gD3byL1JOFdPtJ7BMQDv0D_TCBFHT7JxkdHA_415fa5c3.mp4';
const POSTER_SRC = '/assets/aistudio/video_poster.jpg';

export default function VideoPlayer({ onReveal, isRevealed }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMutedFallback, setIsMutedFallback] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(PRIMARY_VIDEO_SRC);
  const hasTriggeredReveal = useRef(false);

  useEffect(() => {
    if (isRevealed) {
      hasTriggeredReveal.current = true;
    }
  }, [isRevealed]);

  const handleStartPlay = () => {
    const video = videoRef.current;
    if (!video || (hasStarted && isPlaying)) return;

    setHasStarted(true);
    video.muted = false;
    video.volume = 1;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMutedFallback(false);
        })
        .catch((err) => {
          console.warn('Safari/iOS restricted unmuted playback. Applying safe muted fallback:', err);
          video.muted = true;
          video
            .play()
            .then(() => {
              setIsPlaying(true);
              setIsMutedFallback(true);
            })
            .catch((playErr) => {
              console.error('Failed to start playback:', playErr);
            });
        });
    }
  };

  const handleUnmuteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      setIsMutedFallback(false);
    }
  };

  const handleReplayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsEnded(false);
          setIsMutedFallback(false);
        })
        .catch(() => {
          video.muted = true;
          video.play().catch(() => {});
          setIsPlaying(true);
          setIsEnded(false);
          setIsMutedFallback(true);
        });
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const current = video.currentTime;
    const dur = video.duration;
    setProgress(calculateProgress(current, dur));

    if (shouldRevealOffer(current, dur) && !hasTriggeredReveal.current) {
      hasTriggeredReveal.current = true;
      onReveal();
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsEnded(true);
    if (!hasTriggeredReveal.current) {
      hasTriggeredReveal.current = true;
      onReveal();
    }
  };

  const handleError = () => {
    if (currentSrc !== FALLBACK_VIDEO_SRC) {
      console.warn('Optimized video failed, falling back to original file...');
      setCurrentSrc(FALLBACK_VIDEO_SRC);
    }
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none">
      <div className="relative rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.9)] aspect-[9/16] flex items-center justify-center">
        <video
          ref={videoRef}
          src={currentSrc}
          poster={POSTER_SRC}
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onError={handleError}
          onPlay={() => setIsPlaying(true)}
          onClick={hasStarted ? undefined : handleStartPlay}
        />

        {/* Start Overlay */}
        {!hasStarted && (
          <div
            onClick={handleStartPlay}
            className="absolute inset-0 w-full h-full bg-black/40 backdrop-blur-[1px] flex flex-col items-center justify-center cursor-pointer p-6 transition-all duration-200 hover:bg-black/30 z-20"
          >
            <div className="relative w-24 h-24 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.7)] transition-transform duration-200 transform hover:scale-105 active:scale-95 mb-5 pointer-events-none">
              <span className="absolute -inset-1.5 rounded-full bg-emerald-400 opacity-40 animate-ping" />
              <Play className="w-12 h-12 fill-zinc-950 translate-x-1" />
            </div>
            <h3 className="text-white font-extrabold text-xl sm:text-2xl text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-tight pointer-events-none">
              TOQUE PARA VER O VÍDEO
            </h3>
          </div>
        )}

        {/* Unmute floating banner */}
        {hasStarted && isMutedFallback && !isEnded && (
          <button
            type="button"
            onClick={handleUnmuteClick}
            className="absolute top-4 right-4 px-3.5 py-2 rounded-full bg-emerald-500 text-zinc-950 font-bold text-xs flex items-center gap-2 shadow-2xl z-30 animate-pulse cursor-pointer"
          >
            <VolumeX className="w-4 h-4 shrink-0" />
            <span>Toque para ativar o som</span>
          </button>
        )}

        {/* Replay button */}
        {isEnded && (
          <button
            type="button"
            onClick={handleReplayClick}
            className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white hover:bg-black transition-colors text-xs font-semibold flex items-center gap-1.5 z-30 shadow-xl cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-emerald-400" />
            <span>Rever vídeo</span>
          </button>
        )}

        {/* Video progress line */}
        {hasStarted && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-900/90 pointer-events-none z-10">
            <div
              className="h-full bg-emerald-500 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
