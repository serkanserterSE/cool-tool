<script>
	import NavPanel from '../nav/navpanel.svelte';
	import Select from '../components/Select/Select.svelte';
	import { styles, styleClass } from '../stores/styleStore.js';
	let selectedStyle = styles[0];
</script>

<NavPanel />

<div class="page">
	<slot />
</div>

<div class="style-panel">
	<Select
		id="styleSelect"
		title="Style"
		bind:selected={selectedStyle}
		onChange={() => {
			styleClass.set(selectedStyle);
		}}
		optionList={styles}
	/>
</div>

<style>
	@import '../style/default.css';
	@import '../style/matrix.css';

	.style-panel {
		position: fixed;
		top: 95%;
		padding: 4px;
	}

	.page {
		padding-top: 25px;
	}
</style>
