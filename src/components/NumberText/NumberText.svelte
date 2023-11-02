<script>
	import { styleClass } from '../../stores/styleStore.js';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value.Value;
	});

	export let value;
	export let textId;
	export let min = null;
	export let max = null;
	export let step = 1;

	export let onChange = null;
</script>

<input
	id={textId}
	type="number"
	bind:value
	class="number-text {_styleClass}"
	{min}
	{max}
	{step}
	on:change={onChange}
/>

<style>
	@import './NumberText.css';
</style>
