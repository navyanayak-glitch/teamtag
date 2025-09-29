import React from 'react';
import { Home, Search, Library, Heart, Plus, Music } from 'lucide-react';
import { Playlist } from '../types/music';

interface SidebarProps {
  playlists: Playlist[];
  activeView: string;
  onViewChange: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ playlists, activeView, onViewChange }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Library },
  ];

  return (
    <div className="w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Music className="w-4 h-4 text-white" />
        </div>
        <h1 className="text-xl font-bold text-white">Musicfy</h1>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-2 mb-8">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onViewChange(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeView === id
                ? 'bg-white/10 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-6" />

      {/* Playlists */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-400 font-medium">Playlists</h3>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-1">
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => onViewChange(`playlist-${playlist.id}`)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeView === `playlist-${playlist.id}`
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {playlist.name === 'Liked Songs' ? (
                <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Heart className="w-3 h-3 text-white" />
                </div>
              ) : (
                <img
                  src={playlist.coverUrl}
                  alt={playlist.name}
                  className="w-5 h-5 rounded object-cover"
                />
              )}
              <span className="font-medium truncate">{playlist.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};