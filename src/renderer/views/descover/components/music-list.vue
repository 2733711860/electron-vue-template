<template>
	<div class="music-list">
		<div class="item-music" v-for="i in 10">
			<div class="img">
				<img src="../../../../../static/image/11.jpg" />
				<i class="iconfont icon-iconset0482"></i>
			</div>
			<div class="music-name">半城烟沙</div>
			<div class="music-singer">许嵩</div>
			<div class="music-album">所属专辑</div>
			<div class="music-time">03:41</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.music-list{
		.item-music{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 20px;
			border-radius: 5px;
			border-bottom: 1px solid #ededed;
			cursor: pointer;
			div{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
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
				}
			}
			.music-singer, .music-name, .music-album{
				flex: 1;
				padding: 0 10px;
			}
			.music-time{
			}
		}
		.item-music:hover{
			// box-shadow: 0 3px 10px #9d9d9d;
			color: #333;
			font-weight: bold;
		}
	}
</style>
