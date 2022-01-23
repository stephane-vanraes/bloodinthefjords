<script>
	import { page } from '$app/stores';
</script>

<header>
	<h1>Blood in the Fjords</h1>
	<nav>
		<a aria-current={$page.url.pathname == '/'} href="/">Home</a>
		<a aria-current={$page.url.pathname.startsWith('/people')} href="/people">People</a>
		<a aria-current={$page.url.pathname.startsWith('/orgs')} href="/orgs">Organisations</a>
	</nav>
</header>

<style>
	header {
		align-items: flex-end;
		background-color: black;
		color: white;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem;
	}
	h1 {
		font-family: 'Gravedigger';
		font-size: 2rem;
		position: relative;
	}
	h1:after {
		background-color: #f00;
		_background: linear-gradient(0deg, #f00, transparent);
		mix-blend-mode: color-dodge;
		content: '';
		position: absolute;
		inset: 0;
	}
	nav {
		display: flex;
		font-size: 1.125rem;
		font-weight: 600;
		gap: 0;
		margin-inline-start: auto;
	}
	a {
		background: black;
		border-bottom: 3px solid transparent;
		color: white;
		padding: 0.25rem 1rem;
		text-decoration: none;
		transition: all 500ms;
		transition-property: background, color;
	}
	a:is(:active, :focus, :hover) {
		background-color: black;
		border-color: var(--orange2);
	}
	a[aria-current~='true'] {
		background: var(--orange2);
		color: black;
	}
</style>
