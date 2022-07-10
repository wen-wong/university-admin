<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`/guides/${id}.json`);
		const { guide } = await res.json();

		if (res.ok) {
			return {
				props: {
					guide
				}
			};
		}

		return {
			status: 301,
			redirect: '/guides'
		};
	}
</script>

<script>
	import Title from '$lib/title.svelte';

	export let guide;
</script>

<div>
	<h2>{guide.id}</h2>
	<p>{guide.title}</p>
</div>
