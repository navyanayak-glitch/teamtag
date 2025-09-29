import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart } from 'lucide-react';
import { PlayerState } from '../types/music';
import { formatTime } from '../utils/formatTime';

interface PlayerProps {
  playerState: PlayerState;
  onTogglePlayPause: () => void;
  onSkipNext: () => void;
  onSkipPrevious: () => void;
  onVolumeChange: (volume: number) => void;
  onTimeChange: (time: number) => void;
  onToggleFavorite: () => void;
}

export const Player: React.FC<PlayerProps> = ({
  playerState,
  onTogglePlayPause,
  onSkipNext,
  onSkipPrevious,
  onVolumeChange,
  onTimeChange,
  onToggleFavorite,
}) => {
  const [progress, setProgress] = useState(0);

  // Simulate progress for demo
  useEffect(() => {
    if (playerState.isPlaying && playerState.currentSong) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1;
          if (newProgress >= playerState.currentSong!.duration) {
            return 0;
          }
          onTimeChange(newProgress);
          return newProgress;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [playerState.isPlaying, playerState.currentSong, onTimeChange]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value);
    setProgress(newTime);
    onTimeChange(newTime);
  };

  if (!playerState.currentSong) {
    return null;
  }

  return (
    <div className="h-24 bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 flex items-center gap-6">
      {/* Current Song Info */}
      <div className="flex items-center gap-4 w-80">
        <img
          src={playerState.currentSong.coverUrl}
          alt={playerState.currentSong.album}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-white truncate">{playerState.currentSong.title}</h4>
          <p className="text-gray-400 text-sm truncate">{playerState.currentSong.artist}</p>
        </div>
        <button
          onClick={onToggleFavorite}
          className="p-2"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              playerState.currentSong.isFavorite ? 'text-green-500 fill-current' : 'text-gray-400 hover:text-white'
            }`}
          />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          <button
            onClick={onSkipPrevious}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={onTogglePlayPause}
            className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            {playerState.isPlaying ? (
              <Pause className="w-5 h-5 text-black" />
            ) : (
              <Play className="w-5 h-5 text-black ml-0.5" />
            )}
          </button>
          <button
            onClick={onSkipNext}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md flex items-center gap-2">
          <span className="text-xs text-gray-400 w-10 text-right">
            {formatTime(progress)}
          </span>
          <input
            type="range"
            min="0"
            max={playerState.currentSong.duration}
            value={progress}
            onChange={handleProgressChange}
            className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
          <span className="text-xs text-gray-400 w-10">
            {formatTime(playerState.currentSong.duration)}
          </span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2 w-32">
        <Volume2 className="w-4 h-4 text-gray-400" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={playerState.volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );
};