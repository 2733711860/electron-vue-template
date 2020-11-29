<template>
	<div class="header">
		<el-input
			class="search"
			placeholder="搜素音乐"
			prefix-icon="el-icon-search"
			v-model="searchKey">
		</el-input>
		
		<div class="right">
			<Icon icon="icon-clothes" isHover title="换肤" class="marrig"></Icon>
			<Icon icon="icon-iconset0177" isHover title="设置"></Icon>
		</div>
	</div>
</template>

<script>
import Icon from './music-left/Icon.vue'
export default {
	components: {
		Icon
	},
	
	data () {
		return {
			searchKey: ''
		}
	}
}
</script>

<style scoped="scoped" lang="less">
	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100px;
		padding: 0 50px;
		background-color: #fff;
		-webkit-app-region: drag;
		.search{
			width: 30%;
			-webkit-app-region: no-drag;
		}
		.right{
			-webkit-app-region: no-drag;
			.marrig{
				margin-right: 15px;
			}
		}
	}
</style>
<style lang="less">
	.header{
		.el-input__inner{
			border-radius: 100px;
		}
	}
</style>