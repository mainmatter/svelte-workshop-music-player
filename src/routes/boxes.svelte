<script>
	export let colors = ['red', 'green', 'blue', 'yellow', 'purple'];

	let colorIndices = [0, 1, 2];

	$: color1 = colors[colorIndices[0]];
	$: color2 = colors[colorIndices[1]];
	$: color3 = colors[colorIndices[2]];

	function shuffleColor(index) {
		const colorArray = [...colorIndices];

		do {
			const randomIndex = Math.floor(Math.random() * colors.length);
			colorArray[index] = randomIndex;
		} while (colorArray[index] === colorIndices[index]);

		colorIndices = colorArray;
	}
</script>

<div class="box-container">
	<button style="background:{color1}" type="button">
		<!--  -->
	</button>
	<button style:background={color2} type="button">
		<!--  -->
	</button>
	<button style:background={color3} type="button">
		<!--  -->
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
