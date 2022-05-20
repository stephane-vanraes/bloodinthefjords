<script>
	import TextInput from '$lib/components/TextInput.svelte';
	import EmptyState from '$lib/organisms/EmptyState.svelte';
	import Person from '$lib/organisms/Person.svelte';

	export let people = [];

	let filter = '';
	$: filtered = filter.length
		? people.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
		: people;
</script>

<TextInput bind:value={filter} label="Search" />

{#each filtered as person}
	<Person {...person} />
{:else}
	<EmptyState>Nothing found with that filter</EmptyState>
{/each}
