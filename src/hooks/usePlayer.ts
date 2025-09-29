import { useState, useCallback } from 'react';
import { PlayerState, Song } from '../types/music';

export const usePlayer = () => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    volume: 0.8,
    queue: [],
    currentIndex: -1,
  });

  const playSong = useCallback((song: Song, queue: Song[] = [song]) => {
    const index = queue.findIndex(s => s.id === song.id);
    setPlayerState(prev => ({
      ...prev,
      currentSong: song,
      isPlaying: true,
      queue,
      currentIndex: index,
    }));
  }, []);

  const togglePlayPause = useCallback(() => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  }, []);

  const skipToNext = useCallback(() => {
    setPlayerState(prev => {
      if (prev.currentIndex < prev.queue.length - 1) {
        const nextIndex = prev.currentIndex + 1;
        return {
          ...prev,
          currentSong: prev.queue[nextIndex],
          currentIndex: nextIndex,
          isPlaying: true,
        };
      }
      return prev;
    });
  }, []);

  const skipToPrevious = useCallback(() => {
    setPlayerState(prev => {
      if (prev.currentIndex > 0) {
        const prevIndex = prev.currentIndex - 1;
        return {
          ...prev,
          currentSong: prev.queue[prevIndex],
          currentIndex: prevIndex,
          isPlaying: true,
        };
      }
      return prev;
    });
  }, []);

  const setVolume = useCallback((volume: number) => {
    setPlayerState(prev => ({
      ...prev,
      volume: Math.max(0, Math.min(1, volume)),
    }));
  }, []);

  const setCurrentTime = useCallback((time: number) => {
    setPlayerState(prev => ({
      ...prev,
      currentTime: time,
    }));
  }, []);

  return {
    playerState,
    playSong,
    togglePlayPause,
    skipToNext,
    skipToPrevious,
    setVolume,
    setCurrentTime,
  };
};