<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/guides.json');
		const { guides } = await res.json();

		if (res.ok) {
			return {
				props: {
					guides
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not fetch the guides')
		};
	}
</script>

<script>
	export let guides;
</script>

<div class="mt-20">
	<ul class="p-0">
		{#each guides as guide}
			<li><a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a></li>
		{/each}
	</ul>
</div>
