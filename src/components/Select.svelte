<script lang="ts">
	import type { templateTypes } from '$utils/dictionary';

	export let options: (typeof templateTypes)[number][] = [];
	export let display_func = (a: any) => a;
	export let index = 0;
	export let value: string;

	$: {
		value = options[index];
	}
</script>

<select bind:value={index}>
	{#each options as option, i}
		<option value={i}>{display_func(option)}</option>
	{/each}
</select>

<style>
	select {
		width: 300px;
		margin-bottom: 2rem;
	}
</style>
