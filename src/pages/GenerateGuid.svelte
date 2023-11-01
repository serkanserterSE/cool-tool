<script>
	import Button from '../components/Button/Button.svelte';
	import { GenerateUUID } from '$lib';
	import NumberText from '../components/NumberText/NumberText.svelte';

	let uuidList = [];
	let uuidCount = 1;
	function GetUUID() {
		let list = [];
		for (let i = 1; i <= uuidCount; i++) {
			list.push(GenerateUUID());
		}
		uuidList = list;
	}
</script>

<div class="uuid-panel">
	<div>
		<NumberText bind:value={uuidCount} textId="uuidCount" min="1" max="100" />
		<Button
			title="Generate GUID"
			style="width:100%"
			onclick={() => {
				GetUUID();
			}}
		/>
	</div>
	{#each uuidList as uuid}
		<div class="uuid-list">
			<strong>{uuid}</strong>
		</div>
	{/each}
</div>

<style>
	.uuid-panel {
		width: 100%;
		border: 1px solid #000000db;
	}

	.uuid-panel > div {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: flex-start;
		align-items: center;
        padding: 3px;
	}

	.uuid-list {
		width: 100%;
		border-bottom: 1px solid #000;
		box-shadow: 1px 0 #000;
        padding: 3px;
	}
</style>
