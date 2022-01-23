<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import Button from '$lib/components/Button.svelte';

	export let image;
	export let name;
	export let personState;
	export let slug;
</script>

<div class="person">
	<Avatar {image} {personState} />
	<div>
		<h2>{name}</h2>
		<p><em>Status:</em> {personState}</p>
		<Button href="/people/{slug}">Details</Button>
	</div>
</div>

<style>
	.person {
		align-items: center;
		background-image: paint(round-corner);
		background-color: white;
		border: 2px solid black;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		padding: 1rem;
	}

	h2 {
		color: var(--orange2);
		font-family: 'Gravedigger';
		font-size: 2rem;
	}

	.person > div {
		align-items: center;
		display: flex;
		flex: 1 0 10rem;
		flex-direction: column;
		gap: 1rem;
		max-width: max-content;
	}

	.person > div > p:last-child {
		text-align: start;
	}

	.person > div > :global(a) {
		width: max-content;
	}

	@media screen and (max-width: 450px) {
		.person {
			align-items: center;
			flex-direction: column;
		}
		h2,
		p {
			text-align: center !important;
		}
	}
</style>
