import { writable, derived } from 'svelte/store';

export const nowPlaying = writable(null);
export const songs = writable(null);

export const artists = derived(
  songs,
  $songs => {
    return $songs?.reduce((list, { artist }) => {
      if (!list.includes(artist)) {
        list.push(artist)
      }
      return list
    }, []) ?? []
  }
);

export const albums = derived(
  songs,
  $songs => {
    return $songs?.reduce((list, song) => {
      if (!list.find(existing => existing.album === song.album)) {
        list.push(song)
      }
      return list
    }, []) ?? []
  }
);