<script>
	import { styleClass } from '../../stores/styleStore.js';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value;
	});

	export let onclick;
	export let type = 'button';
	export let title;
	export let style="";
</script>

<button {type} on:click={onclick} class="button {_styleClass}" {style}>{title}</button>

<style>
	@import './Button.css';
</style>
