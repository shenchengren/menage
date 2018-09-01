<style lang="less">
	@import url("../assets/less/home.less");
</style>

<template>
	<div>
		<Header class="Header"></Header>
	    <navSide class="navSide"></navSide>
	    <locationtag class="locationtag"></locationtag>
	    <userinquire class="userinquire"></userinquire>
	</div>
</template>

<script>
import topnav from'../components/nav/header.vue'
import navSide from'../components/nav/navSide.vue'
import locationtag from'../components/nav/locationtag.vue'
import userinquire from'../components/components/userinquire.vue'

export default {
  name: 'App',
  components:{
	'Header':topnav,
	'navSide':navSide,
	'locationtag':locationtag,
  	'userinquire':userinquire
  }
}
</script>

