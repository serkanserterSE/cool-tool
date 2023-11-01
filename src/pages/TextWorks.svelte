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
	<div>
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
	<div>
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
	<div>
		<Text textId="sourceText" bind:value={sourceText} placeholder="Type source text..." />
		<Text textId="targetText" bind:value={targetText} placeholder="Type target text..." />
		<Button
			title="Replace"
			onclick={() => {
				resultText = ReplaceAllText(value, sourceText, targetText);
			}}
		/>
	</div>
	<div>
		<strong>Source Text</strong>
		<TextArea textAreaId="textSource" bind:value />
	</div>
	<div>
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
		padding: 3px;
	}

	.text-works div {
		margin: 4px 0 4px 0;
	}

	.result-text {
		border: 1px solid #000;
		padding: 3px;
		margin: 8px 0 4px 0;
		min-height: 30px;
	}
</style>
