// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
	css: [
		// 指向你的 CSS 檔案路徑
		'~/assets/css/main.css'
	],
})
