<script setup>
	let props = defineProps({
        currentImage: String
    })

	const emit = defineEmits(['showFirstModal' , 'showSecondModal'])

	const showFirstModal = () => {
		emit('showFirstModal', false)
	}

	const showSecondModal = () => {
		emit('showSecondModal', true)
	}
</script>

<template>
    <div class="modal-overlay">
		<div class="modal-window">
			<button class="close-x" @click="showFirstModal()">&times;</button>
			<h2>Product Detail</h2>
			<img :src=currentImage class="modal-img" />
			<p>Product description</p>
			<p>Product description</p>
			<p>Product description</p>
			<div class="button-group">
				<button @click="showSecondModal()" class="btn-next">See In</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>