<script>
	import PrimaryNav from '$lib/global/primary-nav.svelte';
	import Outline from '$lib/global/outline.svelte';
</script>

<Outline>
	<PrimaryNav slot="nav" />
	<slot slot="content" />
</Outline>
