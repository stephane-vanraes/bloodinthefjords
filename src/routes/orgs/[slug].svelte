<script context="module">
	export async function load({ fetch, params }) {
		const org = await fetch(`/orgs/${params.slug}.json`).then((res) => res.json());

		return {
			props: org
		};
	}
</script>

<script>
	import Avatar from '$lib/components/Avatar.svelte';

	export let name;
	export let owner = [];
	export let leader;
	export let employees = [];

	const all = [owner, [leader], employees];

	$: console.log(all);
	const titles = ['Owner', 'Leader', 'Employee'];
</script>

<h2>{name}</h2>
<div class="outer">
	{#each all as group, i}
		{#if group.length}
			<ul>
				{#each group as { image, name, slug }}
					<li>
						<a href="/people/{slug}">
							<Avatar {image} />
							<span>{name}</span>
							<em>{titles[i]}</em>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
</div>

<style>
	.outer {
		align-items: center;
		background: paint(round-corner);
		background-color: white;
		border: 2px solid black;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: space-around;
		padding: 1rem;
		width: 100%;
	}

	h2 {
		color: white;
		display: block;
		font-family: 'Gravedigger';
		font-size: clamp(2rem, 10vw, 3rem);
		text-align: center;
	}

	ul {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, 11rem);
		list-style-type: none;
		padding: 1rem;
		width: 100%;
	}
	ul + ul {
		border-top: 2px solid black;
	}
	a {
		align-items: center;
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		text-decoration: none;
	}
	em {
		color: black;
		text-decoration: none;
	}
</style>
