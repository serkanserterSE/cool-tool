<script>
	import PageTransition from '../transition/PageTransition.svelte';
</script>

<PageTransition>
	<div class="center">
		<span class="brand animate__animated animate__backInDown">COOL-TOOL</span>
	</div>
</PageTransition>

<style>
	.center {
		display: flex;
		display: flex;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: center;
		align-items: center;
		padding-top: 20%;
	}

	.brand {
		font-size: 128px;
	}

	.brand:after {
		animation: animate__heartBeat;
		animation-duration: 2s;
	}
</style>
