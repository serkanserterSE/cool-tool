<script>
	import Button from '../components/Button/Button.svelte';
	import NumberText from '../components/NumberText/NumberText.svelte';
	import { GenerateRandomString, TypeOfRandomString } from '$lib';

	let stringList = [];
	let stringListCount = 1;
	let stringLength = 6;
	let selectedType = TypeOfRandomString.All; 
</script>

<div class="string-panel">
	<div>
		<span>List Count:</span>
		<NumberText bind:value={stringListCount} textId="stringListCount" min="1" max="100" />
		<span>String Length:</span>
		<NumberText bind:value={stringLength} textId="stringLength" min="1" max="100" />
		<span>Type</span>
		<select
			id="selectTypeOfRandomString"
			bind:value={selectedType}
			on:change={() => {
				console.log(selectedType);
			}}>
			{#each Object.keys(TypeOfRandomString) as _type}
				<option value={TypeOfRandomString[_type]}>{TypeOfRandomString[_type].Value}</option>
			{/each}
		</select>
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
	</div>
	{#each stringList as item}
		<div class="string-list">
			<strong>{item}</strong>
		</div>
	{/each}
</div>

<style>
	.string-panel {
		width: 100%;
		border: 1px solid #000000db;
	}

	.string-panel > div {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: flex-start;
		align-items: center;
		padding: 3px;
	}

	.string-list {
		width: 100%;
		border-bottom: 1px solid #000;
		box-shadow: 1px 0 #000;
		padding: 3px;
	}
</style>
