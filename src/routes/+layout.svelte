<nav class="navbar navbar-light bg-light">
	<div class="container-fluid">
		<h1 class="navbar-brand">Music Player</h1>
		<ul class="nav navbar-nav">
			<li class="nav-item">
				<a href="/" class="nav-link">Our Music Library</a>
			</li>
			<li>
				<a href="/about" class="nav-link">About</a>
			</li>
			<li>
				<a href="/library" class="nav-link">Library</a>
			</li>
			<li>
				<a href="/library/albums" class="nav-link">Albums</a>
			</li>
			<li>
				<a href="/library/artists" class="nav-link">Artists</a>
			</li>
			<li>
				<a href="/library/songs" class="nav-link">Songs</a>
			</li>
		</ul>
	</div>
</nav>

<div class="container-fluid mt-2">
	<div class="row">
		<div class="col">
			<slot />
		</div>
	</div>
</div>
