<style lang="less">
	@import url("../../assets/less/common.less");
	@import url("../../assets/less/header.less");
</style>

<template>
	<Header>
		<Menu class="bg" mode="horizontal" :theme="theme" active-name="1">
			<div class="left clear">
				<MenuItem name="1">
		            <Icon type="ios-desktop" />集中监控
		        </MenuItem>
		        <MenuItem name="2">
		            <Icon type="ios-funnel" />配置管理
		        </MenuItem>
		        <MenuItem name="2">
		            <Icon type="ios-globe" />运维管理
		        </MenuItem>
			</div>
	        <div class="right clear">
	        	<MenuItem name="3">
		            <Icon type="ios-contrast"/>换肤
		        </MenuItem>
		        <MenuItem name="4">
		            <Icon type="ios-contact"/>hello Victor
		        </MenuItem>
		        <MenuItem name="5">
		            <Icon type="ios-log-out" />退出登录
		        </MenuItem>
	        </div>
	    </Menu>
	</Header>
</template>

<script>
	export default{
		name:'topnav',
		data () {
            return {
                theme: 'dark'
            }
        }
	}
</script>

