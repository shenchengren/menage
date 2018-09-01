<style lang="less">
	@import url("./home.less");
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
import topnav from '../../components/nav/Header.vue'
import navSide from '../../components/nav_side/NavSide.vue'
import locationtag from '../../components/tag/Locationtag.vue'
import userinquire from '../users/Userinquire.vue'

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

