<script>
	export let href;
</script>

{#if href}
	<a {href} {...$$restProps}><slot /></a>
{:else}
	<button {...$$restProps}><slot /></button>
{/if}

<style>
	a,
	button {
		background-color: var(--orange2);
		border: 2px solid var(--orange2);
		border-radius: 0.25rem;
		color: white;
		padding: 0.25rem 1rem;
		transition: all 500ms;
		transition-property: background-color, color;
	}
	a:is(:active, :focus, :hover),
	button:is(:active, :focus, hover) {
		background-color: white;
		color: black;
	}
</style>
