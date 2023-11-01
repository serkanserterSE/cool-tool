<script>
	import { styleClass } from '../../stores/styleStore.js';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value;
	});

	export let value;
	export let textId;
	export let placeholder = 'Type someting ...';
</script>

<input id={textId} type="text" bind:value class="text {_styleClass}" {placeholder} />

<style>
	@import './Text.css';
</style>
