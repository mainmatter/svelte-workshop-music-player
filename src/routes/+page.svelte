<script>
	import { formatDuration } from "../utils/format-duration";
	import albums from "./data/albums.json";

  // export let albums = [];

  function selectAlbum(album) {
      alert(`Selected album "${album.title}"!`);
  }
  
  function selectSong(song) {
      alert(`Selected song "${song.title}"!`);
  }
</script>

<div class="list-group">
  {#each albums as album}
     <div class="list-group-item">
       <div class="row">
         <div class="col">
          <h4 class="h4">
            <button on:click={() => selectAlbum(album)} type="button" class="btn btn-link" data-testid="select-album-btn">
              {album.title}
            </button>
          </h4>
         </div>
       </div>

       <div class="row">
         <div class="col-3">
           <img src={album.coverUrl} width="100%" class="rounded" alt="Album cover of {album.title}">
         </div>
         <div class="col-xs-9">
           <ol class="song-list">
             {#each album.songs as song}
               <li data-testid="song">
                <button on:click={() => selectSong(song)} type="button" class="btn btn-link">
                  <span>{formatDuration(song.duration)}</span>
                  <span>{song.title}</span>
                </button>
               </li>
             {/each}
           </ol>
         </div>
       </div>
     </div>
  {/each}
</div>