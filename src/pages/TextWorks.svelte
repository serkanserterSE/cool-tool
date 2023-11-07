<script>
	import { ToFirstLetterUpper, SearchText, RemoveText, ReplaceAllText } from '../lib/index.js';
	import Button from '../components/Button/Button.svelte';
	import Text from '../components/Text/Text.svelte';
	import TextArea from '../components/TextArea/TextArea.svelte';
	let value = '';
	let sampleText;
	let sourceText;
	let targetText;
	let resultText = '';
</script>

<div class="text-works">
	<div style="width: 100%;">
		<strong>Source Text</strong>
		<TextArea textAreaId="textSource" bind:value />
	</div>
	<div style="width: 100%;padding:10px;">
		<div class="text-button">
			<Button
				title="TO UPPER"
				onclick={() => {
					resultText = value.toLocaleUpperCase();
				}}
			/>
			<Button
				title="to lower"
				onclick={() => {
					resultText = value.toLocaleLowerCase();
				}}
			/>
			<Button
				title="To First Letter Upper"
				onclick={() => {
					resultText = ToFirstLetterUpper(value);
				}}
			/>
			<Button
				title="Reverse"
				onclick={() => {
					resultText = value.split(/(?:)/u).reverse().join('');
				}}
			/>
		</div>
		<div class="text-button">
			<Text textId="sampleText" bind:value={sampleText} />
			<Button
				title="Find"
				onclick={() => {
					resultText = SearchText(value, sampleText);
				}}
			/>
			<Button
				title="Remove"
				onclick={() => {
					resultText = RemoveText(value, sampleText);
				}}
			/>
		</div>
		<div class="text-button">
			<Text textId="sourceText" bind:value={sourceText} placeholder="Type source text..." />
			<Text textId="targetText" bind:value={targetText} placeholder="Type target text..." />
			<Button
				title="Replace"
				onclick={() => {
					resultText = ReplaceAllText(value, sourceText, targetText);
				}}
			/>
		</div>
	</div>
	<div style="width: 100%;">
		<strong>Result Text</strong>
		<div class="result-text">
			{#if resultText.length > 0}
				<div>{@html resultText}</div>
			{:else}
				<div>...</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.text-works {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: stretch;
	}

	.text-works div {
		margin: 4px 0 4px 0;
	}

	.result-text {
		width: 100%;
		min-height: 250px;
		max-height: 300px;
		overflow-y: scroll;
		box-shadow: 1px 1px #000;
		background-color: #fafafa;
		font-family: 'Courier New', Courier, monospace !important;
		font-size: 16px;
	}

	.text-button {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: center;
		align-items: center;
		box-shadow: 1px 1px #000;
		margin: 5px;
	}
</style>
