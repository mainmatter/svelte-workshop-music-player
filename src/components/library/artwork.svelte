<script>
	let src;
	let alt;
	export { src, alt };
</script>

<img src={src} class="cover" alt={alt ?? ''} role={!alt ? 'presentation' : 'img'} />

<style lang="postcss">
	.cover {
		@apply object-cover object-center rounded-md shadow-md transition-all;

		aspect-ratio: 1/1
	}

	:global(a) .cover:hover,
	:global(button) .cover:hover {
		@apply shadow-xl relative ;

		transform: scale(1.05);
	}
</style>