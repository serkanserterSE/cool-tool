<script>
    import { styleClass } from '../../stores/styleStore.js';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value.Value;
	});
	export let navList = [];
</script>

<div class="nav-list {_styleClass}">
	{#each navList as item}
		<div class="nav-item"><a href={item.Href}>{item.Name}</a></div>
	{/each}
</div>

<style>
	@import './Navigation.css';
</style>
