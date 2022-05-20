<script>
	import PersonSmall from '$lib/organisms/PersonSmall.svelte';

	export let people;
</script>

<h2>People of interest</h2>

{#each people as person}
	<PersonSmall {...person} />
{/each}

<style>
	h2 {
		color: white;
		display: block;
		font-family: 'Gravedigger';
		font-size: clamp(2rem, 10vw, 3rem);
		text-align: center;
	}
</style>
