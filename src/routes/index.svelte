<script>
	import '../app.css';
	import Title from '$lib/title.svelte';

	let title = 'some title';

	const updateTitle = () => {
		title = 'new some title';
	};
</script>

<Title />
<div class="text-center block my-20 mx-auto">
	<div class="text-xl font-bold py-6">{title}</div>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illum itaque autem
		excepturi reiciendis.
	</p>
	<button on:click={updateTitle}>change title</button>
	<input type="text" bind:value={title} />
</div>
