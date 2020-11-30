<template>
	<span class="music-sheet">
		<div class="top">
			<span class="msg">
				<i class="iconfont icon-iconset0269"></i>
				<span>131.4万</span>
			</span>
			<i class="iconfont icon-iconset0481"></i>
			<div class="detail">测试测试测试测试测试测试测试测试测试测试测试测试</div>
		</div>
		
		<div class="text">测试测试</div>
	</span>
</template>

<script>
export default {
	mounted() {
	}
}
</script>

<style scoped="scoped" lang="less">
	.music-sheet{
		width: 150px;
		height: 150px;
		display: inline-block;
		.top{
			width: 100%;
			height: 100%;
			position: relative;
			overflow: hidden;
			border-radius: 8px;
			background-image: url(../../../../../static/image/11.jpg);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			opacity: .7;
			transform: translateZ(0) scale(1, 1);
			-webkit-transform: translateZ(0) scale(1, 1);
			-moz-transform: translateZ(0) scale(1, 1);
			-webkit-transition: transform .5s;
			-moz-transition: transform .5s;
			.icon-iconset0481{
				color: #fff;
				font-size: 20px;
				position: absolute;
				bottom: 10px;
				right: 10px;
				opacity: 0;
				-webkit-transition: opacity .5s;
				-moz-transition: opacity .5s;
			}
			.msg{
				width: 100%;
				height: 30px;
				background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));
				color: #fff;
				position: absolute;
				top: 0;
				right: 0;
				font-size: 12px;
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
				text-align: right;
				box-sizing: border-box;
				padding: 5px 10px 0 0;
				.icon-iconset0269{
					font-size: 12px;
				}
			}
			.detail{
				position: absolute;
				width: 100%;
				top: 0;
				right: 0;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				color: #fff;
				font-size: 12px;
				padding: 5px 10px 5px 10px;
				box-sizing: border-box;
				background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .1));
				-os-transform: translateY(-100%);
				transform: translateY(-100%);
				-webkit-transition: all .5s;
				-moz-transition: all .5s;
				line-height: 18px;
			}
		}
		.text{
			padding: 10px 5px;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
	.music-sheet:hover{
		.top{
			transform: scale(1.1);
			opacity: 1;
			.icon-iconset0481{
				opacity: 1;
			}
			.msg{
				display: none;
			}
			.detail{
				-os-transform: translateY(0);
				transform: translateY(0);
			}
		}
	}
</style>
