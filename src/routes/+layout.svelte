<script>
	import '../app.css';
</script>

<nav>
	<ul>
		<li>
			<a href="/">Our Music Library</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/library">Library</a>
		</li>
		<li>
			<a href="/library/albums">Albums</a>
		</li>
		<li>
			<a href="/library/artists">Artists</a>
		</li>
		<li>
			<a href="/library/songs">Songs</a>
		</li>
	</ul>
</nav>

<hr />

<slot />

<style>
	nav {
		height: 50px;
		display: flex;
		align-items: center;
	}
	ul {
		display: flex;
		gap: 15px;
		width: 80vw;
		margin: auto;
	}
</style>
