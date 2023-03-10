<script>
	import PrimaryNav from '@components/global/primary-nav.svelte';
	import '../app.css';
</script>

<div class="h-screen grid grid-rows-[auto_1fr]">
	<div class="relative h-14">
		<PrimaryNav />
	</div>

	<slot />
</div>
