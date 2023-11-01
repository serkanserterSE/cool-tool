<script>
	import { CompareText } from '../lib/index.js';
	import Button from '../components/Button/Button.svelte';
	import TextArea from '../components/TextArea/TextArea.svelte';

	let sourceText = "";
	let targetText = "";

	let resultSourceText="";
	let resultTargetText="";
</script>

<div class="compare-text">
	<div>
		<span>Source Text</span>
		<TextArea bind:value={sourceText} textAreaId="sourceText" />
	</div>
	<div class="compare-text-middle">
		<Button
			title="Compare"
			onclick={() => {
				let result = CompareText(sourceText, targetText);
				
				console.log(result);
				
				resultSourceText = result.ResultSourceText;
				resultTargetText = result.ResultTargetText;
			}}
		/>
	</div>
	<div>
		<span>Target Text</span>
		<TextArea bind:value={targetText} textAreaId="targetText" />
	</div>
</div>

<hr />

<div class="compare-text">
	<div>
		<span>Reusult Source Text</span>
		<div>{@html resultSourceText}</div>
	</div>
	<div class="compare-text-middle" />
	<div>
		<span>Result Target Text</span>
		<div>{@html resultTargetText}</div>
	</div>
</div>

<style>
	.compare-text {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: space-evenly;
		align-items: center;
	}

	.compare-text > div {
		width: 100%; 
	}

	.compare-text-middle{
		display: flex;
		justify-content: center;
	}
</style>
