<script>
	import logo from '$lib/assets/logo.svg';
</script>

<div class="outline">
	<header class="top">
		<a href="/" class="flex gap-2 font-bold"
			><img alt="Svelte" src={logo} width="22" height="24" /> Music</a
		>
		<slot name="nav" />
		<div name="time">
			<!-- display time -->
		</div>
		<slot name="user" />
	</header>

	<div class="relative top-0">
		<slot name="content" />
	</div>
</div>

<style lang="postcss">
	.outline {
		@apply grid min-h-full;

		grid-template:
			'nav' min-content
			'main' 1fr;
	}

	.top {
		@apply bg-white text-zinc-600 shadow-md sticky top-0 grid z-10;

		grid-template: 'logo nav time user' 1fr / theme('width.72') 1fr min-content min-content;
	}

	.top > :global(*) {
		@apply px-6 py-3;
	}
</style>
