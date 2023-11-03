<script>
	import { styleClass } from '../../stores/styleStore.js';
	import Button from '../Button/Button.svelte';
	import { fly } from 'svelte/transition';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value.Value;
	});
	export let navList = [];
	let activeItem = { Href: '/', Name: 'Home' };
	let innerWidth;

	let sideBarDisplay = false;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 2000}
	<div class="nav-list {_styleClass}">
		{#each navList as item}
			<div class="nav-item {activeItem.Name == item.Name ? 'active' : ''}">
				<a
					class="navbar-button-7"
					href={item.Href}
					on:click={() => {
						activeItem = item;
					}}>{item.Name}</a
				>
			</div>
		{/each}
	</div>
{:else}
	<div class="side-bar-top">
		<Button 
			title='menu'
			titleClass="material-symbols-outlined"
			onclick={() => {
				sideBarDisplay = !sideBarDisplay;
			}}
		/>
		<div>
			<span class="side-bar-title">{activeItem.Name}</span>
		</div>
	</div>
	{#if sideBarDisplay}
		<div
			in:fly={{ x: 200, duration: 1000 }}
			out:fly={{ x: -200, duration: 1000 }}
			class="side-bar-list {_styleClass}"
		>
			{#each navList as item}
				<div class="side-bar-item {activeItem.Name == item.Name ? 'active' : ''}">
					<a
						class="navbar-button-5"
						href={item.Href}
						on:click={() => {
							activeItem = item;
							sideBarDisplay = false;
						}}><span class="material-symbols-outlined" style="margin: 3px;">{item.IconName}</span>{item.Name}</a
					>
				</div>
			{/each}
		</div>
	{/if}
{/if}

<style>
	@import './Navigation.css';
	@import './SideBar.css';
	@import '../../style/navbarbutton.css';
</style>
