<template>
	<div class="descover-page">
		<music-swiper></music-swiper>
		
		<music-sheet class="item-sheet" v-for="i in 10"></music-sheet>
	</div>
</template>

<script>
import musicSwiper from './components/music-swiper.vue';
import musicSheet from './components/music-sheet.vue';
export default {
	components: {
		musicSwiper, musicSheet
	}
}
</script>

<style scoped="scoped" lang="less">
	.descover-page{
		padding: 0 20px;
		box-sizing: border-box;
		.item-sheet{
			width: 21%;
			height: 150px;
			margin: 15px 2%;
		}
	}
</style>
