<script>
	import PrimaryNav from '@components/global/primary-nav.svelte';
</script>

<div class="h-screen grid grid-rows-[auto_1fr]">
	<div class="h-24">
		<div class="fixed w-full top-0 z-50">
			<PrimaryNav />
		</div>
	</div>

	<slot />
</div>
