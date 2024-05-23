<script>
	import NavPanel from '../nav/navpanel.svelte';
	import Select from '../components/Select/Select.svelte';

	import { styles, styleClass } from '../stores/styleStore.js';
	let selectedStyle = styles[0];

	import Notification from '../components/Notification/Notification.svelte';
	import { notificationDataList } from '../stores/notificationStore.js';
	let notificationList;
	notificationDataList.subscribe((value) => {
		notificationList = value;
	});
</script>

{#each notificationList as notification}
	<Notification {...notification} />
{/each}

<NavPanel />

<div class="page">
	<slot />
</div>

<div class="style-panel">
	<a href="https://github.com/serkanserterSE/cool-tool" target="_blank" class="github-link"
		><span class="material-symbols-outlined"> code </span><span
			>github.com/serkanserterSE/cool-tool</span
		></a
	>
</div>

<!--<div class="style-panel">
	<Select
		id="styleSelect"
		title="Style"
		bind:selected={selectedStyle}
		onChange={() => {
			styleClass.set(selectedStyle);
		}}
		optionList={styles}
	/>
</div>-->

<style>
	@import '../style/default.css';
	@import '../style/matrix.css';
	@import '../style/animate.min..css';

	.style-panel {
		position: fixed;
		top: 95%;
		padding: 4px;
	}

	.page {
		padding-top: 35px;
	}

	.github-link {
		display: flex;
		align-items: center;
		justify-content: center;
		align-content: center;
		flex-wrap: nowrap;
		flex-direction: row;
	}
</style>
