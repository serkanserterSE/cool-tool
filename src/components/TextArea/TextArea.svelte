<script>
	import { styleClass } from '../../stores/styleStore.js';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value.Value;
	});

	export let value = '';
	export let textAreaId;
	export let maxLength = 2000;
	export let placeholder="Type something..."
</script>

<div>
	<div>
		<textarea
			id={textAreaId}
			bind:value
			class="textarea {_styleClass} {value.length > maxLength ? 'textarea-filled' : ''}"
			on:keydown={() => {
				if (value.length > maxLength) {
					value = value.slice(0, maxLength);
				}
			}}
			{placeholder}
		/>
	</div>
	{#if value.length > maxLength}
		<div style="color: red;"><em>The text limit has been exceeded. (Limit: {maxLength})</em></div>
	{/if}
</div>

<style>
	@import './TextArea.css';
</style>
