<nav class="sticky top-0 z-50 bg-gray-800 text-gray-200">
	<div class="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<ul class="flex nav-list">
			<li>
				<a href="/">Svelte Music</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/library">Library</a>
			</li>
		</ul>
	</div>
</nav>

<style lang="postcss">
	.nav-list {
		@apply flex flex-row list-none gap-5;
	}

	.nav-list li {
		@apply m-0 px-0 py-4;
	}
</style>
