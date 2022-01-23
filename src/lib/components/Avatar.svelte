<script>
	export let image;
	export let personState;

	const rnd = Math.random();
</script>

<div class:deceased={personState === 'Deceased'} style:--rnd="{rnd}turn">
	<img src={image.url} alt="" />
</div>

<style>
	div {
		border: 3px solid black;
		border-radius: 50%;
		overflow: hidden;
		position: relative;
	}
	img {
		aspect-ratio: 1 / 1;
		filter: grayscale();
		flex: 0;
		width: 10rem;
	}
	div::after {
		background-image: linear-gradient(var(--rnd), var(--orange), var(--orange2));
		background-repeat: no-repeat;
		background-size: cover;
		content: '';
		inset: 0 0 0 0;
		mix-blend-mode: color;
		position: absolute;
	}
	.deceased::after {
		background-image: none;
	}
</style>
