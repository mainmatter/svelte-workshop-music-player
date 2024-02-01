<script>
	import Boxes from './boxes.svelte';

	export let data;
</script>

<pre>{JSON.stringify(data.products, null, '\t')}</pre>

<section>
	<p class="title">Cybernetically enhanced playback</p>
	<p>Just for you, {data.name}</p>

	<Boxes>
		<div slot="box1">Play your music</div>
		<div slot="box2">No actual content</div>
		<div slot="box3">Just a demo</div>
	</Boxes>
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
