<script>
	import Box from '../Box/Box.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { notificationDirection } from '../../stores/notificationStore.js';

	export let index;
	export let id;
	export let icon = null;
	export let title;
	export let message;
	export let footer = null;
	export let direction = notificationDirection.bottomRigth;
	export let show = false;

	let directionLocation = 85;
	onMount(() => {
		directionLocation -= index * 15;
	});
</script>

{#if show}
	<div
		{id}
		in:fly={{ y: 300, duration: 1000 }}
		out:fly={{ y: 300, duration: 1000 }}
		class="notification notification-{direction}"
		style="top:{directionLocation}% !important"
	>
		<Box>
			<div slot="headerIcon">{icon}</div>
			<div slot="headerTitle">{title}</div>
			<div slot="body">{message}</div>
			<div slot="footer">{footer}</div>
		</Box>
	</div>
{/if}

<style>
	@import './Notification.css';
</style>
