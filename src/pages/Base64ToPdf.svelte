<script>
	import TextArea from '../components/TextArea/TextArea.svelte';
	import Button from '../components/Button/Button.svelte';
	import Modal from '../components/Modal/Modal.svelte';
	let base64;
	let show = false;
</script>

<Modal id="modalPdf" bind:show title="PDF">
	<div slot="modal-body">
		<object
			width="800px"
			height="600px"
			title="pdf"
			data="data:application/pdf;base64,{base64}"
			type="application/pdf"
		/>
	</div>
</Modal>

<div class="panel">
	<div>
		<TextArea
			maxLength={999999}
			textAreaId="base64"
			bind:value={base64}
			placeholder="Type Base64String of pdf..."
		/>
	</div>
	<div>
		<Button
			title="Convert To PDF"
			onclick={() => {
				show = true;
			}}
		/>
	</div>
</div>

<style>
	.panel {
		width: 100%;
	}
</style>
