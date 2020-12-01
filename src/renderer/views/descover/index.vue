<template>
	<div class="descover-page">
		<music-swiper></music-swiper>
		
		<div class="title">
			<span>精选歌单</span>
			<Icon icon="icon-iconset0420" isHover></Icon>
		</div>
		<music-sheet class="item-sheet" v-for="i in 4" :key="i"></music-sheet>
		
		<div class="title">
			<span>新歌推荐</span>
			<Icon icon="icon-iconset0420" isHover></Icon>
		</div>
		<music-list></music-list>
	</div>
</template>

<script>
import musicSwiper from './components/music-swiper.vue';
import musicSheet from './components/music-sheet.vue';
import Icon from '@/components/music-left/Icon.vue';
import musicList from './components/music-list.vue';
export default {
	components: {
		musicSwiper, musicSheet, Icon, musicList
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
		
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 40px 20px 0 20px;
			span{
				color: #333;
				font-size: 18px;
				font-weight: bold;
			}
		}
	}
</style>
