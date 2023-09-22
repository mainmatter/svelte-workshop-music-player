<script>
	import Outline from '$lib/global/outline.svelte';
	import LibraryNav from '$lib/library/library-nav.svelte';
</script>

<Outline>
	<div class="flex gap-3 p-3 items-start" slot="content">
		<LibraryNav />
		<div class="w-full">
			<slot />
		</div>
	</div>
</Outline>
