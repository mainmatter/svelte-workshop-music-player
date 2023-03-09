/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
  let response = await fetch('/data/songs.json');
  return { songs: await response.json() }
}