<script>
	import Outline from '$lib/global/outline.svelte';
	import LibraryNav from '$lib/library/library-nav.svelte';
	import Breadcrumbs from '$lib/breadcrumbs/breadcrumbs.svelte';

	export let data;
</script>

<Outline>
	<svelte:fragment slot="nav">
		<Breadcrumbs />
	</svelte:fragment>

	<div slot="user">
		{#if data.isAuthenticated}
			<form action="/logout" method="POST">
				<button type="submit">Logout</button>
			</form>
		{/if}
	</div>

	<div class="flex gap-3 p-3 items-start" slot="content">
		<LibraryNav />
		<div class="w-full">
			<slot />
		</div>
	</div>
</Outline>
