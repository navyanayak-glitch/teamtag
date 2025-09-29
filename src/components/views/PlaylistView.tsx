import React from 'react';
import { Play, Clock, Heart } from 'lucide-react';
import { Playlist, Song } from '../../types/music';
import { SongItem } from '../SongItem';

interface PlaylistViewProps {
  playlist: Playlist;
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song, queue: Song[]) => void;
  onPlayPlaylist: () => void;
  onToggleFavorite: (songId: string) => void;
}

export const PlaylistView: React.FC<PlaylistViewProps> = ({
  playlist,
  currentSong,
  isPlaying,
  onPlaySong,
  onPlayPlaylist,
  onToggleFavorite,
}) => {
  const totalDuration = playlist.songs.reduce((acc, song) => acc + song.duration, 0);
  const totalHours = Math.floor(totalDuration / 3600);
  const totalMinutes = Math.floor((totalDuration % 3600) / 60);

  return (
    <div>
      {/* Playlist Header */}
      <div className="bg-gradient-to-b from-purple-900/40 to-black/20 p-8 pb-6">
        <div className="flex items-end gap-6">
          <div className="w-56 h-56 rounded-lg shadow-2xl overflow-hidden">
            {playlist.name === 'Liked Songs' ? (
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
            ) : (
              <img
                src={playlist.coverUrl}
                alt={playlist.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          
          <div className="flex-1 pb-6">
            <p className="text-sm font-medium text-white/80 uppercase tracking-wider mb-2">
              Playlist
            </p>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              {playlist.name}
            </h1>
            <p className="text-gray-300 mb-4">{playlist.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>{playlist.songs.length} songs</span>
              <span>•</span>
              <span>
                {totalHours > 0 && `${totalHours} hr `}
                {totalMinutes} min
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-8 py-6 bg-gradient-to-b from-black/20 to-transparent">
        <div className="flex items-center gap-6">
          <button
            onClick={onPlayPlaylist}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Play className="w-6 h-6 text-black ml-0.5" />
          </button>
          
          <button className="text-gray-400 hover:text-white transition-colors">
            <Heart className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Songs List */}
      <div className="px-8 pb-8">
        <div className="flex items-center gap-4 px-4 py-2 text-sm text-gray-400 border-b border-white/10 mb-2">
          <div className="w-8">#</div>
          <div className="flex-1">Title</div>
          <div className="hidden md:block w-48">Album</div>
          <div className="w-12">
            <Clock className="w-4 h-4" />
          </div>
        </div>
        
        <div className="space-y-1">
          {playlist.songs.map((song, index) => (
            <SongItem
              key={song.id}
              song={song}
              isCurrentSong={currentSong?.id === song.id}
              isPlaying={currentSong?.id === song.id && isPlaying}
              onPlay={() => onPlaySong(song, playlist.songs)}
              onToggleFavorite={() => onToggleFavorite(song.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};