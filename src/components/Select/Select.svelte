<script>
	import { styleClass } from '../../stores/styleStore.js';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value.Value;
	});

	export let id;
	export let title = null;
	export let selected = null;
	export let onChange = null;
	export let optionList = null;
	// option: {Value,Text,SubText,Icon}
</script>

<div class="select-panel">
	{#if title != null}
		<div style="margin-right:2px;">{title}</div>
	{/if}
	<select class="select selext-text {_styleClass}" {id} bind:value={selected} on:change={onChange}>
		{#each optionList as option}
			<option value={option}>
				<div class="option-item">
					{#if option.Icon != null}
						<div class="option-icon">{option.Icon}</div>
					{/if}
					<div class="option-text">{option.Text}</div>
					{#if option.SubText != null}
						<div class="option-subtext">({option.SubText})</div>
					{/if}
				</div>
			</option>
		{/each}
	</select>
</div>

<style>
	@import './Select.css';
</style>
