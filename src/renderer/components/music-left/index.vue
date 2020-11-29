<template>
	<div class="music-left">
		<Top></Top>
		
		<div class="left-cont">
			<div class="title">推荐</div>
			<Button text="发现音乐" icon="icon-icon-"></Button>
			<Button text="精品歌单" icon="icon-icon-1"></Button>
			<Button text="私人FM" icon="icon-wefill"></Button>
			<Button text="MV" icon="icon-iconset0225"></Button>
			
			<div class="title martop">我的音乐</div>
			<Button text="本地音乐" icon="icon-iconset0164"></Button>
			<Button text="下载管理" icon="icon-wefill"></Button>
			<Button text="我的收藏" icon="icon-likefill"></Button>
			<Button text="我的歌单" icon="icon-icon-1"></Button>
			<Button text="播放历史" icon="icon-iconset0113"></Button>
		</div>
	</div>
</template>

<script>
import Button from './Button.vue';
import Top from './Top.vue';
export default {
	components: {
		Top, Button
	}
}
</script>

<style scoped="scoped" lang="less">
	.music-left{
		width: 230px;
		height: 100%;
		position: relative;
		background: hsla(0, 0%, 100%, .5) border-box;
		overflow: hidden;
		// border-radius: 8px;
		
		.left-top{
			height: 70px;
			line-height: 70px;
			text-align: center;
		}
		
		.left-cont{
			.title{
				height: 40px;
				line-height: 40px;
				padding-left: 20px;
			}
			.martop{
				margin-top: 20px;
			}
		}
	}
	.music-left::before {
		content:'';
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:-30px;
		z-index:-1;
		-webkit-filter:blur(25px);
		filter:blur(25px);
		background-image: url(../../../../static/image/11.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
