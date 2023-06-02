<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let { album } = data;
</script>

<div class="flex gap-8">
	<img src={album.coverUrl} class="cover rounded-lg overflow-hidden" alt={album.name} />
	<div>
		<h4 class="text-zinc-600">{album.artist}</h4>
		<h5 class="page-title">
			{album.name}
		</h5>
	</div>
</div>

<pre>
	{JSON.stringify(album, null, 2)}
</pre>
