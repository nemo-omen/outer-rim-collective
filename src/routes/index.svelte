<script>
	import FeatureItem from '$components/FeatureItem.svelte';
	let items = [
		{
			title: 'Wolverine # 8',
			subtitle: 'On sale January 10',
			image: 'wolverinecover.jpg',
		},
		{
			title: 'Future State Wonder Woman # 2',
			subtitle: 'Available to pull',
			image: 'futurestateww.jpg',
		},
		{
			title: 'Star Wars High Republic #3',
			subtitle: 'In store: March 3',
			image: 'starwarshighrepublic.jpg',
		},
		{
			title: 'Dreaming Waking Hours #7',
			subtitle: 'Available to pull',
			image: 'dreamingcover.jpg',
		}
	];

	let first = items.shift();
	let rest = [...items];

</script>

<main>
	<section class="hero">
		<FeatureItem item={first}/>
	</section>
	<section class="featured">
		{#each rest as item}
			<FeatureItem {item} />
		{/each}
	</section>
</main>

<style>
	main {
			display: grid;
			grid-template-rows: repeat(2, 30vh);
			grid-template-areas:
				'hero'
				'featured';
		}

	.hero {
		position: relative;
		/* min-height: clamp(300px, 30vh, 100%); */
		grid-area: hero;
	}

	:global(.hero > *) {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	:global(.featured *) {
		/* width: 100%; */
		justify-content: center;
	}

	:global(.featured > * header) {
		text-align: left;
	}

	.featured {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 0;
		grid-area: featured;
	}

	:global(.featured *) {
		/* width: 100%; */
		justify-content: center;
	}

	:global(.featured > * header) {
		text-align: left;
	}

	:global(.featured > * h1) {
		font-size: var(--h2);
		margin-bottom: 0.75rem;
	}

	@media (min-width: 1024px) {

		main {
			grid-template-rows: repeat(2, 1fr);
		}
		
		.featured {
			flex-direction: row;
		}

		:global(.featured *) {
			/* width: 100%; */
			justify-content: end;
		}

		:global(.featured > * header) {
			text-align: right;
		}

		}
</style>