<script>
	import { CompareText } from '../lib/index.js';
	import Button from '../components/Button/Button.svelte';
	import TextArea from '../components/TextArea/TextArea.svelte';

	let sourceText = '';
	let targetText = '';

	let resultSourceText = '';
	let resultTargetText = '';
</script>

<div class="top">
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
					resultSourceText = result.ResultSourceText;
					resultTargetText = result.ResultTargetText;
				}}
			/>
			<Button
				title="Clear"
				onclick={() => {
					resultSourceText = '';
					resultTargetText = '';
					sourceText = '';
					targetText = '';
				}}
			/>
		</div>
		<div>
			<span>Target Text</span>
			<TextArea bind:value={targetText} textAreaId="targetText" />
		</div>
	</div>
	<div style="box-shadow: 0 1px #000;min-height: 20px;width:100%;margin-bottom:10px;" />
	<div class="compare-text">
		<div>
			<span>Reusult Source Text</span>
			<div class="resultText">{@html resultSourceText}</div>
		</div>
		<div class="compare-text-middle" />
		<div>
			<span>Result Target Text</span>
			<div class="resultText">{@html resultTargetText}</div>
		</div>
	</div>
</div>

<style>
	.top {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: center;
		align-items: center;
	}

	.compare-text {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: space-evenly;
		align-items: center;
		width: 90%;
	}

	.compare-text > div {
		width: 100%;
	}

	.resultText {
		width: 100%;
		min-height: 250px;
		max-height: 300px;
		overflow-y: scroll;
		box-shadow: 1px 1px #000;
		background-color: #fafafa;
		font-family: 'Courier New', Courier, monospace !important;
		font-size: 16px;
	}
	
	.compare-text-middle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 10px;
	}
</style>
