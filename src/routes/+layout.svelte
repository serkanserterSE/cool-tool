<script>
	import { styles, styleClass } from '../stores/styleStore.js';
	let selectedStyle = styles[0];
</script>

<slot />

<div class="style-panel">
    <span>Style: </span>
	<select id="styleSelect"
		bind:value={selectedStyle}
		on:change={() => {
			styleClass.set(selectedStyle);
		}}>
		{#each styles as style}
			<option value={style}>{style}</option>
		{/each}
	</select>
</div>

<style>
	@import '../style/default.css';
	@import '../style/matrix.css';

    .style-panel{
        position: absolute;
        top: 95%;
        padding: 4px;
    }
</style>
