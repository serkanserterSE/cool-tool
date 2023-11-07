<script>
	import Button from '../components/Button/Button.svelte';
	import { GenerateUUID, ShowNotification } from '$lib';
	import NumberText from '../components/NumberText/NumberText.svelte';
	import { notificationDirection } from '../stores/notificationStore.js';

	let uuidList = [];
	let uuidCount = 5;
	function GetUUID() {
		let list = [];
		for (let i = 1; i <= uuidCount; i++) {
			list.push(GenerateUUID());
		}
		uuidList = list;
	}
</script>

<div class="uuid-top">
	<div class="uuid-panel">
		<div class="uuid-conf">
			<div class="uuid-field">
				<span>Count</span>
				<NumberText bind:value={uuidCount} textId="uuidCount" min="1" max="100" />
			</div>
			<Button
				title="Generate GUID"
				style="width:100%"
				onclick={() => {
					GetUUID();
				}}
			/>
		</div>
		{#each uuidList as uuid}
			<div class="uuid-list-item">
				<Button
					cleanClass={true}
					title={uuid}
					onclick={() => {
						navigator.clipboard.writeText(uuid);
						ShowNotification('Copy To Clipboard', uuid, notificationDirection.bottom);
					}}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.uuid-top {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: center;
		align-items: center;
	}

	.uuid-panel {
		margin-bottom: 10px;
		width: 60%;
	}

	.uuid-conf {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: center;
		align-items: center;
		padding: 3px;
	}

	.uuid-list-item {
		background-color: #e0e4eb;
		box-shadow: 2px 2px #000;
		margin: 5px;
		padding: 5px;
		align-self: stretch;
		font-size: 28px;
		cursor: pointer;
	}

	.uuid-list-item:hover {
		background-color: #000;
		color: #fff;
		clip-path: polygon(
			0 0,
			100% 0,
			100% calc(100% - var(--d)),
			calc(100% - 3px) 100%,
			3px 100%,
			0 calc(100% - var(--d))
		);
		transform: perspective(1000px) rotateX(40deg);
		transition: 0.1s, clip-path 0.1s 0.1s, transform 0.1s 0.1s;
	}

	.uuid-field {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
	}
</style>
