<script context="module">
	export async function load({ fetch }) {
		const orgs = await fetch('./orgs.json').then((res) => res.json());
		return {
			props: {
				orgs
			}
		};
	}
</script>

<script>
	export let orgs = [];
</script>

<h2>Organisations</h2>

<ul>
	{#each orgs as org}
		<li><a href="/orgs/{org.slug}">{org.name}</a></li>
	{/each}
</ul>

<style>
	h2 {
		color: white;
		display: block;
		font-family: 'Gravedigger';
		font-size: clamp(2rem, 10vw, 3rem);
		text-align: center;
	}
	ul {
		background: paint(round-corner);
		background-color: white;
		border: 2px solid black;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		list-style-type: none;
		padding: 1rem;
		width: 100%;
	}
	a {
		display: block;
		padding: 1rem;
		text-align: center;
		width: 100%;
	}
</style>
