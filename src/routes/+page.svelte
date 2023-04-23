<script lang="ts">
	import { processNow } from '$utils/xlsx';
	import Select from '$components/Select.svelte';
	import type { TemplateTypes } from '$utils/dictionary';

	let files: FileList | null = null;
	let file: File | null = null;
	let inputRef: HTMLInputElement | null = null;
	let templateName: TemplateTypes = 'ekman';

	async function onProcessFile() {
		if (!file) return;

		await processNow(file, templateName);
	}

	$: if (files) {
		file = files[0];
	}
</script>

<svelte:head>
	<title>Converter</title>
	<meta name="description" content="Xlsx template converter" />
</svelte:head>

<section>
	<div class="container">
		<Select options={['ekman', 'default']} bind:value={templateName} />
		<label>
			Template type:
			<input
				id="inputFile"
				name="excel"
				type="file"
				accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
				bind:files
				bind:this={inputRef}
			/>
		</label>
		<!-- <button on:click={() => inputRef?.click()}>upload</button> -->
		{#if file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}
			<button on:click={onProcessFile}>Convert!</button>
		{/if}
	</div>
</section>

<style>
	section {
		padding-left: 3rem;
		padding-right: 3rem;
		display: flex;
		justify-content: center;
	}

	label {
		margin-bottom: 2rem;
	}

	.container {
		min-width: 800px;
		display: flex;
		flex-direction: column;
	}
</style>
