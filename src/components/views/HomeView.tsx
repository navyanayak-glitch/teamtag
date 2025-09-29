import React from 'react';
import { Play, Clock } from 'lucide-react';
import { Song, Playlist } from '../../types/music';
import { SongItem } from '../SongItem';

interface HomeViewProps {
  songs: Song[];
  playlists: Playlist[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song, queue: Song[]) => void;
  onToggleFavorite: (songId: string) => void;
  onPlayPlaylist: (playlist: Playlist) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  songs,
  playlists,
  currentSong,
  isPlaying,
  onPlaySong,
  onToggleFavorite,
  onPlayPlaylist,
}) => {
  const recentSongs = songs.slice(0, 6);
  const featuredPlaylists = playlists.slice(0, 3);

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Good evening</h1>
        <p className="text-gray-400">Welcome back to your music</p>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {featuredPlaylists.map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => onPlayPlaylist(playlist)}
            className="group bg-white/5 hover:bg-white/10 rounded-lg p-4 flex items-center gap-4 transition-all duration-200 hover:scale-[1.02]"
          >
            <img
              src={playlist.coverUrl}
              alt={playlist.name}
              className="w-16 h-16 rounded-lg object-cover shadow-lg"
            />
            <div className="flex-1 text-left">
              <h3 className="font-medium text-white">{playlist.name}</h3>
              <p className="text-gray-400 text-sm">{playlist.songs.length} songs</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-black ml-0.5" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Recently Played */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-gray-400" />
          <h2 className="text-2xl font-bold text-white">Recently played</h2>
        </div>
        <div className="space-y-1">
          {recentSongs.map((song, index) => (
            <SongItem
              key={song.id}
              song={song}
              isCurrentSong={currentSong?.id === song.id}
              isPlaying={currentSong?.id === song.id && isPlaying}
              onPlay={() => onPlaySong(song, songs)}
              onToggleFavorite={() => onToggleFavorite(song.id)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Made for You */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Made for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="group cursor-pointer"
              onClick={() => onPlayPlaylist(playlist)}
            >
              <div className="relative mb-4">
                <img
                  src={playlist.coverUrl}
                  alt={playlist.name}
                  className="w-full aspect-square object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                />
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-black ml-0.5" />
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-white mb-1 truncate">{playlist.name}</h3>
              <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};