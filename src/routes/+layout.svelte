<script>
	import Breadcrumbs from '@components/breadcrumbs/breadcrumbs.svelte';
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';
	import PrimaryNav from '@components/global/primary-nav.svelte';
	import '../app.css';
</script>

<div class="h-screen grid grid-rows-[auto_1fr]">
	<div class="h-24">
		<div class="fixed w-full top-0 z-50">
			<PrimaryNav />

			<div class="h-10 px-4 flex items-center bg-white/90 backdrop-blur">
				<Breadcrumbs />
				<Breadcrumb title="Home" href="/" />
			</div>
		</div>
	</div>

	<slot />
</div>
