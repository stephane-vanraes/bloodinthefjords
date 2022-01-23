<script>
	import '../app.css';

	import Icons from '$lib/Icons.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import Header from '$lib/organisms/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<Icons />

<style>
	main {
		margin: 0 auto;
		max-width: 96ch;
		padding: 1rem;
		width: 100%;
	}
</style>
