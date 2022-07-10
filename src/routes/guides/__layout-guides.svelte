<script>
	import Title from '$lib/title.svelte';
</script>

<header>
	<Title title="Lets go home" />
	<div>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/guides">Guides</a>
	</div>
</header>
<main>
	<slot />
</main>
<footer>
	<p>Copyright 2022 Hello World</p>
</footer>
