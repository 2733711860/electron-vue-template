<template>
	<div class="left-tops">
		<div class="mac-btn-div">
			<div class="mac-but red" title="关闭" @click="closeWin">
				<i class="iconfont icon-iconset0127"></i>
			</div>
			<div class="mac-but orange" title="最小化" @click="minimizeWin">
				<i class="iconfont icon-zuixiaohua"></i>
			</div>
			<div class="mac-but grren" title="最大化" @click="maximizeWin">
				<i class="iconfont icon-iconset0441"></i>
			</div>
		</div>
		
		<div class="user">
			<i class="iconfont icon-iconset01100"></i>
			<div>未登录</div>
		</div>
	</div>
</template>

<script>
import { remote } from 'electron';
export default {
	methods: {
		closeWin() {
			remote.getCurrentWindow().close(); // 关闭窗口，也结束了所有进程
		},
		
		minimizeWin() {
			remote.getCurrentWindow().minimize(); // 窗口最小化
		},
		
		maximizeWin() {
			const win=remote.getCurrentWindow();
			if(win.isMaximized()){ // 判断 窗口是否已最大化 
				win.restore(); // 恢复原窗口大小
			}else{
				 win.maximize(); //最大化窗口
			}
		},
	}
}
</script>

<style scoped="scoped" lang="less">
	.left-tops{
		.mac-btn-div{
			display: flex;
			align-items: center;
			padding: 15px;
			.mac-but{
				width: 18px;
				height: 18px;
				border-radius: 50%;
				margin-right: 10px;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				.iconfont{
					color: #000;
					font-size: 10px;
					font-weight: bold;
					display: none;
				}
			}
			.red{
				background-color: #ed655a;
			}
			.orange{
				background-color: #e0c04c;
			}
			.grren{
				background-color: #72be47;
			}
		}
		.mac-btn-div:hover{
			.iconfont{
				display: block;
			}
		}
		
		.user{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 20px 0 50px 0;
			cursor: pointer;
			.icon-iconset01100{
				font-size: 50px;
				margin-bottom: 10px;
				color: #8b8b8b;
			}
		}
	}
</style>
