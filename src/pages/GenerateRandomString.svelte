<script>
	import Button from '../components/Button/Button.svelte';
	import NumberText from '../components/NumberText/NumberText.svelte';
	import { GenerateRandomString, TypeOfRandomString, ShowNotification } from '$lib';
	import { notificationDirection } from '../stores/notificationStore.js';
	let stringList = [];
	let stringListCount = 5;
	let stringLength = 8;
	let selectedType = TypeOfRandomString.All;
</script>

<div class="string">
	<div class="string-panel">
		<div class="string-panel-item">
			<div class="string-panel-field">
				<span>String Length</span>
				<NumberText bind:value={stringLength} textId="stringLength" min="1" max="100" />
			</div>
			<div class="string-panel-field">
				<span>List Count</span>
				<NumberText bind:value={stringListCount} textId="stringListCount" min="1" max="100" />
			</div>
			<div class="string-panel-field">
				<span>Type</span>
				<select
					class="to-select"
					id="selectTypeOfRandomString"
					bind:value={selectedType}
					on:change={() => {
						console.log(selectedType);
					}}
				>
					{#each Object.keys(TypeOfRandomString) as _type}
						<option value={TypeOfRandomString[_type]}>{TypeOfRandomString[_type].Value}</option>
					{/each}
				</select>
			</div>
			<Button
				title="Generate Random String"
				style="width:100%"
				onclick={() => {
					let list = [];
					for (let i = 0; i < stringListCount; i++) {
						let str = GenerateRandomString(stringLength, selectedType);
						list.push(str);
					}
					stringList = list;
				}}
			/>
			{#each stringList as item}
				<div class="string-list">
					<Button
						cleanClass={true}
						title={item}
						onclick={() => {
							navigator.clipboard.writeText(item);
							ShowNotification('Copy To Clipboard', item, notificationDirection.bottom);
						}}
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.string {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: flex-start;
		justify-content: space-evenly;
		align-items: flex-start;
	}

	.string-panel {
		box-shadow: 1px 1px #000;
		width: 700px;
	}

	.string-panel-item {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: space-evenly;
		align-items: stretch;
		padding: 3px;
	}

	.string-list {
		background-color: #e0e4eb;
		box-shadow: 2px 2px #000;
		margin: 5px;
		padding: 5px;
		align-self: stretch;
		font-size: 28px;
		cursor: pointer;
	}

	.string-list:hover {
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

	.string-panel-field {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 10px;
	}

	.string-panel-field > span {
		width: 15%;
	}

	.to-select {
		font-size: 20px;
		border: none;
		box-shadow: 3px 3px #000;
		margin: 5px;
		text-align: end;
		align-self: stretch;
		width: 100%;
	}
</style>
