import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Song, Playlist } from '../../types/music';
import { SongItem } from '../SongItem';

interface SearchViewProps {
  songs: Song[];
  playlists: Playlist[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song, queue: Song[]) => void;
  onToggleFavorite: (songId: string) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({
  songs,
  playlists,
  currentSong,
  isPlaying,
  onPlaySong,
  onToggleFavorite,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSongs = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return songs.filter(
      song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query)
    );
  }, [songs, searchQuery]);

  const filteredPlaylists = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return playlists.filter(
      playlist =>
        playlist.name.toLowerCase().includes(query) ||
        playlist.description.toLowerCase().includes(query)
    );
  }, [playlists, searchQuery]);

  return (
    <div className="p-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-6">Search</h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {!searchQuery ? (
        /* Browse Categories */
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Browse all</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Pop', color: 'from-pink-500 to-purple-500' },
              { name: 'Rock', color: 'from-orange-500 to-red-500' },
              { name: 'Hip-Hop', color: 'from-green-500 to-teal-500' },
              { name: 'Electronic', color: 'from-blue-500 to-indigo-500' },
              { name: 'Jazz', color: 'from-yellow-500 to-orange-500' },
              { name: 'Classical', color: 'from-purple-500 to-pink-500' },
              { name: 'Alternative', color: 'from-gray-500 to-gray-700' },
              { name: 'Indie', color: 'from-teal-500 to-cyan-500' },
            ].map((category) => (
              <div
                key={category.name}
                className={`aspect-square rounded-lg bg-gradient-to-br ${category.color} p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative overflow-hidden`}
              >
                <h3 className="text-white font-bold text-xl">{category.name}</h3>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 rotate-12 opacity-20">
                  <div className="w-full h-full bg-white rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Search Results */
        <div className="space-y-8">
          {filteredSongs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Songs</h2>
              <div className="space-y-1">
                {filteredSongs.map((song) => (
                  <SongItem
                    key={song.id}
                    song={song}
                    isCurrentSong={currentSong?.id === song.id}
                    isPlaying={currentSong?.id === song.id && isPlaying}
                    onPlay={() => onPlaySong(song, filteredSongs)}
                    onToggleFavorite={() => onToggleFavorite(song.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {filteredPlaylists.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Playlists</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {filteredPlaylists.map((playlist) => (
                  <div key={playlist.id} className="group cursor-pointer">
                    <div className="mb-4">
                      <img
                        src={playlist.coverUrl}
                        alt={playlist.name}
                        className="w-full aspect-square object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                      />
                    </div>
                    <h3 className="font-medium text-white mb-1 truncate">{playlist.name}</h3>
                    <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredSongs.length === 0 && filteredPlaylists.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
              <p className="text-gray-400">Try searching for something else</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};