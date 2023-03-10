<nav class="h-14 w-full fixed top-0 z-50 bg-gray-800/90 backdrop-blur text-gray-200">
	<div class="flex px-4">
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
