<script setup>
	let props = defineProps({
        currentImage: String
    })

	const emit = defineEmits(['showSecondModal' , 'closeAllModal'])

	const showSecondModal = () => {
		emit('showSecondModal', false)
	}

	const closeAllModal = () => {
		emit('closeAllModal')
	}
</script>

<template>
    <div class="modal-overlay second-level">
		<div class="modal-window">
			<button class="back-btn" @click="showSecondModal()">
				<i class="fas fa-chevron-left"></i> <
			</button>
			<button class="close-x" @click="closeAllModal()">&times;</button>
			<h2>Product-See In</h2>
			<img :src=currentImage class="modal-img" />
			<div class="bottom-row">
				<div class="image-trigger-bottom">
					<img src="https://picsum.photos/600/200"/>
				</div>
			</div>
			<div class="top-row">
				<div class="image-trigger">
					<img src="https://picsum.photos/300/200"/>
				</div>
				<div class="image-trigger">
					<img src="https://picsum.photos/300/200"/>
				</div>
				<div class="image-trigger">
					<img src="https://picsum.photos/300/200"/>
				</div>
			</div>

			<div class="bottom-row">
				<div class="image-trigger-bottom">
					<img src="https://picsum.photos/600/200"/>
				</div>
			</div>
			<div class="top-row">
				<div class="image-trigger">
					<img src="https://picsum.photos/300/200"/>
				</div>
				<div class="image-trigger">
					<img src="https://picsum.photos/300/200"/>
				</div>
				<div class="image-trigger">
					<img src="https://picsum.photos/300/200"/>
				</div>
			</div>
		
		</div>
	</div>
</template>

<style scoped>
	
</style>