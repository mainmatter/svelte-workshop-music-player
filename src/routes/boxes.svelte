<script>
	export let colours = ['red', 'green', 'blue', 'yellow', 'purple'];

	let colourIndices = [0, 1, 2];

	$: colour1 = colours[colourIndices[0]];
	$: colour2 = colours[colourIndices[1]];
	$: colour3 = colours[colourIndices[2]];

	function shuffleColour(index) {
		const colourArray = [...colourIndices];

		do {
			const randomIndex = Math.floor(Math.random() * colours.length);
			colourArray[index] = randomIndex;
		} while (colourArray[index] === colourIndices[index]);

		colourIndices = colourArray;
	}
</script>

<div class="box-container">
	<button style="background:{colour1}" on:click={() => shuffleColour(0)}>
		<slot name="box1" />
	</button>
	<button style:background={colour2} on:click={() => shuffleColour(1)}>
		<slot name="box2" />
	</button>
	<button style="background:{colour3}" on:click={() => shuffleColour(2)}>
		<slot name="box3" />
	</button>
</div>

<style lang="postcss">
	.box-container {
		@apply flex relative container mx-auto;
		top: 8vw;
		margin: 0 auto;
		gap: 2rem;
	}

	button {
		@apply block w-full aspect-video text-white px-5 py-4;
	}
</style>
