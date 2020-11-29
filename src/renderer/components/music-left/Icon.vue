<template>
	<span class="icon-con" :class="{'needHover': isHover}" :style="iconStyle">
		<i class="iconfont thisicon" :class="icon" :style="{'fontSize': fontSize + 'px'}"></i>
	</span>
</template>

<script>
export default {
	data () {
		return {
			iconStyle: {}
		}
	},
	
	props: {
		isHover: {
			type: Boolean,
			default: false
		},
		
		icon: {
			type: String,
			default: ''
		},
		
		fontSize: {
			type: [String, Number],
			default: 20
		}
	},
	
	mounted() {
		let fontSize = Number(document.defaultView.getComputedStyle(document.getElementsByClassName('thisicon')[0]).fontSize.replace('px', '')); // icon字体大小
		this.iconStyle = {
			width: fontSize * 1.8 + 'px',
			height: fontSize * 1.8 + 'px',
			lineHeight: fontSize * 1.8 + 'px'
		}
	}
}
</script>

<style scoped="scoped" lang="less">
	.icon-con{
		display: inline-block;
		text-align: center;
		border-radius: 50%;
		cursor: pointer;
	}
	.needHover:hover{
		background-color: #EBEBEB;
	}
</style>
