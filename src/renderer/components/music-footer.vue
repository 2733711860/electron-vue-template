<template>
	<div class="footer">
		<el-slider v-model="progress" :show-tooltip="false" class="music-progress"></el-slider>
		<div class="footer-tool">
			<div class="music-msg">
				<img src="../../../static/image/11.jpg" class="music-cover" />
				<div class="music-detail">
					<div class="title">作者 - 音乐名称音乐名称音乐名称音乐名称音乐名称音乐名称</div>
					<div class="time">00:08/03:46</div>
				</div>
			</div>
			
			<div class="music-tool">
				<i class="iconfont icon-backwardfill" title="上一首"></i>
				<i class="iconfont icon-zanting playPause" title="播放/暂停"></i>
				<i class="iconfont icon-play_forward_fill" title="下一首"></i>
			</div>
			
			<div class="music-tool-right">
				<i class="iconfont icon-iconset0261" title="音量"></i>
				<el-slider v-model="volume" :show-tooltip="false" class="music-volume"></el-slider>
				<i class="iconfont icon-xunhuanbofang" title="循环模式"></i>
				<i class="iconfont icon-geciweidianji" title="歌词"></i>
				<i class="iconfont icon-qita" title="播放列表"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			progress: 20,
			volume: 40
		}
	}
}
</script>

<style scoped="scoped" lang="less">
	.footer{
		width: 100%;
		height: 80px;
		position: relative;
		background: hsla(0, 0%, 100%, .5) border-box;
		.music-progress{
			position: absolute;
			z-index: 100;
			top: 0;
			width: 100%;
		}
		
		.footer-tool{
			height: 100%;
			padding: 0 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.music-msg{
				display: flex;
				align-items: center;
				width: 300px;
				.music-cover{
					width: 60px;
					height: 60px;
					border-radius: 5px;
					cursor: pointer;
				}
				.music-detail{
					margin-left: 10px;
					overflow: hidden;
					.title{
						color: #333;
						margin-bottom: 5px;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
					}
					.time{
						font-size: 15px;
					}
				}
			}
			
			.music-tool{
				width: 180px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.iconfont{
					font-size: 35px;
					cursor: pointer;
					color: #5965ED;
				}
				.playPause{
					font-size: 45px;
				}
			}
			
			.music-tool-right{
				display: flex;
				width: 300px;
				display: flex;
				align-items: center;
				.music-volume{
					flex: 1;
					margin: 0 10px;
				}
				.iconfont{
					font-size: 25px;
					cursor: pointer;
				}
				.icon-geciweidianji{
					margin: 0 20px;
				}
			}
		}
	}
	.footer::before {
		content:'';
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		z-index:-1;
		-webkit-filter:blur(25px);
		filter:blur(25px);
	}
</style>
<style lang="less">
	.music-volume{
		.el-slider__runway{
			margin: 0;
			height: 3px;
		}
		.el-slider__button-wrapper{
			.el-slider__button{
				width: 7px;
				height: 7px;
				background-color: #5965ED;
				border: 2px solid #5965ED;
			}
		}
		.el-slider__bar{
			background-color: #5965ED;
			height: 3px;
		}
	}
	.music-progress{
		.el-slider__runway{
			margin: 0;
			height: 3px;
		}
		.el-slider__button-wrapper{
			display: none;
			.el-slider__button{
				width: 9px;
				height: 9px;
				background-color: #5965ED;
				border: 2px solid #5965ED;
			}
		}
		.el-slider__bar{
			background-color: #5965ED;
			height: 3px;
		}
	}
	.music-progress:hover{
		.el-slider__button-wrapper{
			display: block;
		}
		.el-slider__runway{
			height: 5px;
		}
		.el-slider__bar{
			height: 5px;
		}
	}
</style>
