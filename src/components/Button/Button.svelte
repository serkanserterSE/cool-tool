<script>
	import { styleClass } from '../../stores/styleStore.js';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value.Value;
	});

	export let onclick;
	export let type = 'button';
	export let title;
	export let style = '';
	export let titleClass = '';
	export let cleanClass = false;
</script>

<button {type} on:click={onclick} class="{cleanClass ? 'clean-button' : 'button-89'} {_styleClass}" {style}>
	<span class={titleClass}>{title}</span>
</button>

<style>
	@import './Button.css';
</style>
