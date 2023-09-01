<script>
	let name = 'Billy Bloggs';
</script>

<!-- Put PrimaryNav here -->

<section>
	<p class="title">Cybernetically enhanced playback</p>
	<p>Just for you, {name}</p>

	<!-- Put Boxes here -->
</section>

<style lang="postcss">
	section {
		@apply bg-zinc-200 flex flex-col justify-end;
		min-height: 50vh;
		margin-bottom: 8vw;
	}

	.title {
		@apply container mx-auto py-8 text-center text-5xl font-bold text-zinc-600;
	}

	p {
		@apply container mx-auto text-center text-xl font-bold text-zinc-600;
	}
</style>
