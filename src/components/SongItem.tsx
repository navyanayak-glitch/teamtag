import React from 'react';
import { Play, Pause, Heart } from 'lucide-react';
import { Song } from '../types/music';
import { formatTime } from '../utils/formatTime';

interface SongItemProps {
  song: Song;
  isCurrentSong: boolean;
  isPlaying: boolean;
  onPlay: () => void;
  onToggleFavorite: () => void;
  index?: number;
}

export const SongItem: React.FC<SongItemProps> = ({
  song,
  isCurrentSong,
  isPlaying,
  onPlay,
  onToggleFavorite,
  index,
}) => {
  return (
    <div
      className={`group flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:bg-white/5 ${
        isCurrentSong ? 'bg-white/10' : ''
      }`}
    >
      {/* Index/Play Button */}
      <div className="w-8 flex items-center justify-center">
        {isCurrentSong && isPlaying ? (
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-green-500 animate-pulse" />
              <div className="w-0.5 h-4 bg-green-500 animate-pulse" style={{ animationDelay: '0.1s' }} />
              <div className="w-0.5 h-4 bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        ) : (
          <>
            <span className="text-gray-400 text-sm group-hover:hidden">
              {typeof index === 'number' ? index + 1 : ''}
            </span>
            <button
              onClick={onPlay}
              className="hidden group-hover:block p-1 rounded-full bg-green-500 hover:bg-green-400 transition-colors"
            >
              {isCurrentSong && isPlaying ? (
                <Pause className="w-3 h-3 text-black" />
              ) : (
                <Play className="w-3 h-3 text-black ml-0.5" />
              )}
            </button>
          </>
        )}
      </div>

      {/* Song Info */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <img
          src={song.coverUrl}
          alt={song.album}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="flex-1 min-w-0">
          <h4 className={`font-medium truncate ${isCurrentSong ? 'text-green-500' : 'text-white'}`}>
            {song.title}
          </h4>
          <p className="text-gray-400 text-sm truncate">{song.artist}</p>
        </div>
      </div>

      {/* Album */}
      <div className="hidden md:block w-48">
        <p className="text-gray-400 text-sm truncate">{song.album}</p>
      </div>

      {/* Favorite Button */}
      <button
        onClick={onToggleFavorite}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            song.isFavorite ? 'text-green-500 fill-current' : 'text-gray-400 hover:text-white'
          }`}
        />
      </button>

      {/* Duration */}
      <div className="w-12 text-right">
        <span className="text-gray-400 text-sm">{formatTime(song.duration)}</span>
      </div>
    </div>
  );
};