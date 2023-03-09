/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
  let response = await fetch('/data/songs.json');
  let songs = await response.json()
  return { songs }
}