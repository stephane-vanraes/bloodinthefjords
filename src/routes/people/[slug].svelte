<script>
	import Avatar from '$lib/components/Avatar.svelte';

	export let description;
	export let image;
	export let name;
	export let personState;
	export let race;
</script>

<div class="outer">
	<Avatar {image} {personState} />
	<h2>{name}</h2>
	<dl>
		<dt>Race</dt>
		<dd>{race}</dd>
		<dt>State</dt>
		<dd>{personState}</dd>
	</dl>
	<div class="content">
		{@html description}
	</div>
</div>

<style>
	.outer {
		align-items: center;
		background: paint(round-corner);
		background-color: white;
		border: 2px solid black;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-around;
		padding: 1rem;
		width: 100%;
	}

	.outer :global(a) {
		text-decoration: underline;
		text-decoration-color: var(--orange2);
	}

	h2 {
		color: var(--orange2);
		display: inline-block;
		font-family: 'Gravedigger';
		font-size: clamp(2rem, 10vw, 3rem);
		text-align: center;
	}

	dl {
		columns: 2;
		column-rule: 1px solid black;
		max-width: 30ch;
		text-align: center;
	}
	dt {
		font-weight: 600;
	}
	.content {
		margin: auto;
		max-width: 62ch;
	}
</style>
