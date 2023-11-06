<script>
	import Button from '../components/Button/Button.svelte';
	import NumberText from '../components/NumberText/NumberText.svelte';
	import { notificationDirection } from '../stores/notificationStore.js';
	import { ShowNotification } from '$lib';

	let randomIntList = [];
	let randomIntCount = 5;
	let randomIntMin = 0;
	let randomIntMax = 1000;

	let randomFloatList = [];
	let randomFloatCount = 5;
	let randomFloatMin = 0.1;
	let randomFloatMax = 0.9;
</script>

<div class="random">
	<div class="random-panel">
		<div class="random-panel-item">
			<div class="random-panel-field">
				<span>Min</span>
				<NumberText bind:value={randomIntMin} textId="randomIntMin" bind:max={randomIntMax} />
			</div>
			<div class="random-panel-field">
				<span>Max</span>
				<NumberText bind:value={randomIntMax} textId="randomIntMax" bind:min={randomIntMin} />
			</div>
			<div class="random-panel-field">
				<span>Count</span>
				<NumberText bind:value={randomIntCount} textId="randomIntCount" min="1" max="100" />
			</div>
			<Button
				title="Generate Random Integer Number"
				style="width:100%"
				onclick={() => {
					let list = [];
					try {
						for (let i = 0; i < randomIntCount; i++) {
							let integerNumber = Math.floor(
								Math.random() * (randomIntMax - randomIntMin + 1) + randomIntMin
							);
							list.push(integerNumber);
						}
					} catch (error) {
						console.err(error);
					}

					randomIntList = list;
				}}
			/>
		</div>
		{#each randomIntList as number}
			<div class="random-list">
				<Button
					cleanClass={true}
					title={number}
					onclick={() => {
						navigator.clipboard.writeText(number);
						ShowNotification('Copy To Clipboard', number, notificationDirection.bottom);
					}}
				/>
			</div>
		{/each}
	</div>

	<div class="random-panel">
		<div class="random-panel-item">
			<div class="random-panel-field">
				<span>Min</span>
				<NumberText
					bind:value={randomFloatMin}
					textId="randomFloatMin"
					step={0.05}
					bind:max={randomFloatMax}
				/>
			</div>
			<div class="random-panel-field">
				<span>Max</span>
				<NumberText
					bind:value={randomFloatMax}
					textId="randomFloatMax"
					step={0.05}
					bind:min={randomFloatMin}
				/>
			</div>
			<div class="random-panel-field">
				<span>Count</span>
				<NumberText bind:value={randomFloatCount} textId="randomFloatCount" min="1" max="100" />
			</div>
			<Button
				title="Generate Random Float Number"
				style="width:100%"
				onclick={() => {
					let list = [];
					try {
						for (let i = 0; i < randomFloatCount; i++) {
							let number = (
								Math.random() * (randomFloatMax - randomFloatMin) +
								randomFloatMin
							).toFixed(4);

							list.push(number);
						}
					} catch (error) {
						console.err(error);
					}

					randomFloatList = list;
				}}
			/>
		</div>
		{#each randomFloatList as number}
			<div class="random-list">
				<Button
					cleanClass={true}
					title={number}
					onclick={() => {
						navigator.clipboard.writeText(number);
						ShowNotification('Copy To Clipboard', number, notificationDirection.bottom);
					}}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.random {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: flex-start;
		justify-content: space-evenly;
		align-items: flex-start;
	}

	.random-panel {
		box-shadow: 1px 1px #000;
	}

	.random-panel-item {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: space-evenly;
		align-items: stretch;
		padding: 3px;
	}

	.random-panel-field {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		align-items: center;
		justify-content: flex-start;
	}

	.random-list:hover {
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

	.random-list {
		background-color: #e0e4eb;
		box-shadow: 2px 2px #000;
		margin: 5px;
		padding: 5px;
		align-self: stretch;
		font-size: 28px;
		cursor: pointer;
	}
</style>
