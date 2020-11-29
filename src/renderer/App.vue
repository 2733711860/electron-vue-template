<template>
  <div id="app">
		<music-left></music-left>
		
		<div class="music-right">
			<music-header></music-header>
			<router-view class="view-page"></router-view>
			<music-footer></music-footer>
		</div>
  </div>
</template>

<script>
import musicLeft from '@/components/music-left/index.vue';
import musicHeader from '@/components/music-header.vue'	;
import musicFooter from '@/components/music-footer.vue'	;
export default {
	name: 'meng-music',
	
	components: {
		musicLeft, musicHeader, musicFooter
	}
}
</script>

<style lang="less">
	*{
		padding: 0;
		margin: 0;
	}
	html, body, #app{
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	#app{
		display: flex;
		font-size: 17px;
		color: #6b6b6b;
		.music-right{
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;
			background-image: url(../../static/image/11.jpg);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			.view-page{
				flex: 1;
				overflow-y: auto;
				background-color: #fff;
			}
		}
	}
</style>
