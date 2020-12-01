<template>
	<div class="music-list">
		<div class="title">
			<span>新歌推荐</span>
			<div class="right">
				<Icon icon="icon-iconset0419" isHover v-show="page>1"></Icon>
				<div>{{page<10 ? ('0' + page) : page}}/10</div>
				<Icon icon="icon-iconset0420" isHover v-show="page<totalPage"></Icon>
			</div>
		</div>
		<div class="item-music" v-for="i in 5">
			<div class="item-index">{{i < 10 ? ('0' + i) : i}}</div>
			<div class="img">
				<img src="../../../../../static/image/11.jpg" />
				<i class="iconfont icon-iconset0482"></i>
			</div>
			<div class="music-name">半城烟沙</div>
			<div class="music-singer">许嵩</div>
			<div class="music-album">所属专辑</div>
			<div class="music-btn">
				<i class="iconfont icon-like"></i>
				<i class="iconfont icon-download"></i>
				<i class="iconfont icon-gengduo"></i>
			</div>
			<div class="music-time">03:41</div>
		</div>
	</div>
</template>

<script>
import Icon from '@/components/music-left/Icon.vue';
export default {
	components: {
		Icon
	},
	
	data () {
		return {
			page: 1,
			totalPage: 10
		}
	}
}
</script>

<style scoped="scoped" lang="less">
	.music-list{
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 40px 20px 0 20px;
			.right{
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			span{
				color: #333;
				font-size: 18px;
				font-weight: bold;
			}
		}
		.item-music{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 40px 10px 20px;
			border-radius: 5px;
			border-bottom: 1px solid #ededed;
			div{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.item-index{
				padding-right: 20px;
			}
			.img{
				width: 40px;
				height: 40px;
				position: relative;
				img{
					width: 100%;
					height: 100%;
					border-radius: 5px;
				}
				.icon-iconset0482{
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					color: #fff;
					font-size: 22px;
					font-weight: 300;
					cursor: pointer;
				}
			}
			.music-singer, .music-name, .music-album{
				flex: 1;
				padding: 0 10px;
				cursor: pointer;
			}
			.music-btn{
				display: flex;
				padding: 0 10px;
				visibility: hidden;
				.iconfont{
					margin: 0 10px;
					font-size: 18px;
					cursor: pointer;
				}
			}
			.music-time{
			}
		}
		.item-music:hover{
			// box-shadow: 0 3px 10px #9d9d9d;
			color: #333;
			font-weight: bold;
			.music-btn{
				visibility: visible;
			}
		}
	}
</style>
