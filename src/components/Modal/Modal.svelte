<script>
	import { fly } from 'svelte/transition';
	import Button from '../Button/Button.svelte';

	export let id;
	export let show = false;
	export let title;
</script>

{#if show}
	<div class="modal" {id} in:fly={{ y: 300, duration: 1000 }} out:fly={{ y: 300, duration: 1000 }}>
		<div class="modal-header">
			<div>{title}</div>
			<div>
				<Button
					title='close'
					titleClass="material-symbols-outlined"
					onclick={() => {
						show = false;
					}}
				/>
			</div>
		</div>
		<div>
			<slot name="modal-body" />
		</div>
	</div>
{/if}

<style>
	@import './Modal.css';
</style>
