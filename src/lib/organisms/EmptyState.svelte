<div class="empty">
	<slot />
</div>

<style>
	.empty {
		align-items: flex-start;
		background-image: paint(round-corner);
		background-color: white;
		border: 2px solid black;
		display: grid;
		padding: 1rem;
		place-items: center;
	}
</style>
