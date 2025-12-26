<script setup>
	import { ref } from 'vue'
	
	const showFirstModal = ref(false)
	const showSecondModal = ref(false)
	const currentImage = ref(null)

	const firstButClick = (v) => {
		showFirstModal.value = true
		currentImage.value = v
	}

	const closeAllModal = () => {
		showFirstModal.value = false
		showSecondModal.value = false
	}

	const clickFirstModal = (v) => {
		showFirstModal.value = v
	}

	const clickSecondModal = (v) => {
		console.log(v)
		showSecondModal.value = v
	}
	</script>
	
	<template>
	  <div class="container">
		<div class="top-row">
			<div class="image-trigger" @click="firstButClick('https://picsum.photos/300/200')">
				<img src="https://picsum.photos/300/200" alt="點擊我" />
			</div>
			<div class="image-trigger" @click="firstButClick('https://picsum.photos/300/200')">
				<img src="https://picsum.photos/300/200" alt="點擊我" />
			</div>
			<div class="image-trigger" @click="firstButClick('https://picsum.photos/300/200')">
				<img src="https://picsum.photos/300/200" alt="點擊我" />
			</div>
		</div>

		<div class="bottom-row">
			<div class="image-trigger-bottom" @click="firstButClick('https://picsum.photos/600/200')">
				<img src="https://picsum.photos/600/200" alt="點擊我" />
			</div>
		</div>
		
		<FirstModel v-if="showFirstModal" :currentImage="currentImage" @showFirstModal="clickFirstModal" @showSecondModal="clickSecondModal"/>

		<SecondModel v-if="showSecondModal" :currentImage="currentImage" @showSecondModal="clickSecondModal" @closeAllModal="closeAllModal"/>
		  
	  </div>
	</template>
	
<style scoped>
	
</style>