import { songs as songStore } from '@store';

/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
  let response = await fetch('/data/songs.json');
  let songs = await response.json()
  songStore.set(songs)
  return { songs }
}