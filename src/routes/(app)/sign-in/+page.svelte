<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<form method="POST" class="m-5 py-5 px-10 rounded-lg bg-zinc-100">
	<h1 class="text-2xl font-bold mb-5">Sign In</h1>

	<p class="py-2">
		<label for="username" class="block">Username</label>
		<input id="username" type="text" class="p-2 border-2 border-zinc-300 rounded-md" />
	</p>

	<p class="py-2">
		<label for="password" class="block">Password</label>
		<input id="password" type="password" class="p-2 border-2 border-zinc-300 rounded-md" />
	</p>

	<p class="py-2">
		<button type="submit" class="p-2 px-4 bg-white rounded-lg shadow">Submit</button>
	</p>
</form>

{#if form?.detail}
	<div>
		{form.detail}
	</div>
{/if}
