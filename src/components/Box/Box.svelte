<script>
	import { styleClass } from '../../stores/styleStore.js';
	let _styleClass;
	styleClass.subscribe((value) => {
		_styleClass = value.Value;
	});
</script>

<div class="box {_styleClass}">
	<div class="box-header">
		{#if $$slots.headerIcon & ($$slots.headerIcon.length === 0)}
			<div class="box-header-icon">
				<slot name="headerIcon" />
			</div>
		{/if}
		<div class="box-header-title">
			<slot name="headerTitle" />
		</div>
	</div>
	<hr />
	<div class="box-body">
		<slot name="body" />
	</div>
	{#if $$slots.footer & ($$slots.footer.length === 0)}
		<hr />
		<div class="box-footer">
			<slot name="footer" />
		</div>
	{/if}
</div>

<style>
	@import '../Box/Box.css';
</style>
