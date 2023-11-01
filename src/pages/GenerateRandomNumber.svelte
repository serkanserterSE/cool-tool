<script>
	import Button from '../components/Button/Button.svelte';
	import NumberText from '../components/NumberText/NumberText.svelte';

	let randomIntList = [];
	let randomIntCount = 1;
	let randomIntMin = 0;
	let randomIntMax = 1000;

	let randomFloatList = [];
	let randomFloatCount = 1;
	let randomFloatMin = 0.1;
	let randomFloatMax = 0.9;
</script>

<div>
	<div class="random-panel">
		<div>
			<NumberText bind:value={randomIntMin} textId="randomIntMin" bind:max={randomIntMax} />
			<span>-</span>
			<NumberText bind:value={randomIntMax} textId="randomIntMax" bind:min={randomIntMin} />
			<span>Count:</span>
			<NumberText bind:value={randomIntCount} textId="randomIntCount" min="1" max="100" />
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
				<strong>{number}</strong>
			</div>
		{/each}
	</div>
</div>

<hr />

<div>
	<div class="random-panel">
		<div>
			<NumberText
				bind:value={randomFloatMin}
				textId="randomFloatMin"
				step={0.05}
				bind:max={randomFloatMax}
			/>
			<span>-</span>
			<NumberText
				bind:value={randomFloatMax}
				textId="randomFloatMax"
				step={0.05}
				bind:min={randomFloatMin}
			/>
			<span>Count:</span>
			<NumberText bind:value={randomFloatCount} textId="randomFloatCount" min="1" max="100" />
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
				<strong>{number}</strong>
			</div>
		{/each}
	</div>
</div>
<hr />

<style>
	.random-panel {
		width: 100%;
		border: 1px solid #000000db;
	}

	.random-panel > div {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: flex-start;
		align-items: center;
		padding: 3px;
	}
	.random-panel > div > span {
		margin: 0 3px 0 3px;
	}
	.random-list {
		width: 100%;
		border-bottom: 1px solid #000;
		box-shadow: 1px 0 #000;
		padding: 3px;
	}
</style>
