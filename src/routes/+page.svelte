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
			<h2>{file.name}</h2>
			<h3>{file.size} bytes</h3>
			<button on:click={onProcessFile}>accept</button>
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

	.container {
		min-width: 800px;
		display: flex;
		flex-direction: column;
	}
	.container > * + * {
		margin-top: 100px;
		background: tomato;
	}
</style>
