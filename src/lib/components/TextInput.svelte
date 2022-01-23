<script>
	export let label;
	export let value;
</script>

<label>
	<span>{label}</span>
	<input type="text" bind:value />
</label>

<style>
	label {
		align-items: center;
		display: flex;
		gap: 1rem;
		padding: 1rem;
		width: 100%;
	}
	span {
		font-weight: 600;
	}
	input {
		background-color: transparent;
		border: none;
		border-radius: 4px 4px 0 0;
		border-bottom: 3px solid white;
		flex: 1 0;
		padding: 0.25rem 1rem;
		transition: background-color 200ms;
	}
	input:is(:active, :focus, :hover) {
		background-color: white;
	}
</style>
