<template>
  <div id="app">
    <router-view class="view-page"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'meng-music'
  }
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	html, body, #app, .view-page{
		height: 100%;
	}
</style>
