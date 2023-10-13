<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<form method="POST" class="m-5 py-5 px-10 rounded-lg bg-zinc-100" use:enhance>
	<h1 class="text-2xl font-bold mb-5">Sign In</h1>

	<p class="py-2">
		<label for="username" class="block">Username</label>
		<input
			type="text"
			name="username"
			id="username"
			class="p-2 border-2 border-zinc-300 rounded-md"
		/>
	</p>

	<p class="py-2">
		<label for="password" class="block">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			class="p-2 border-2 border-zinc-300 rounded-md"
		/>
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
