<script>
	import SearchIcon from './SearchIcon.svelte';
	function enterSearch() {
		console.log('POOOOOP!!');
	}

	function keyListener(event) {
		if(event.key === 'Enter') {
			console.log('DOOOOOKIE!');
		}
	}
</script>

<div class="search">
	<input type="text" placeholder="Search..." />
<button class="icon" on:click={enterSearch} on:keyup={keyListener}>
		<SearchIcon />
	</button>
</div>

<style>
	.search {
		display: flex;
	}
	.icon {
		border: none;
		color: var(--oc-yellow-4);

	}
	input[type=text] {
		border: 2px solid var(--oc-red-9);
		border-radius: 0;
		background-color: var(--oc-gray-2);
		padding: 0.125rem;
		font-size: 1rem;
	}
	button {
		font-size: 1rem;
		background-color: var(--oc-red-900);
		cursor: pointer;
		color: var(--oc-yellow-400);
	}
</style>