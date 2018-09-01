<style lang="less">
	@import url("./navSide.less");
</style>

<template>
	<div class="navside">
		<div id="mini"><img src="../../assets/images/mini.png"></div>
        <Menu class="menu" :theme="theme" :open-names="['1']" accordion>	
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" />实时监控
                </template>
                <MenuItem name="1-1">通关数据监控</MenuItem>
                <MenuItem name="1-2">系统日志</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" />用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />统计分析            
                </template>
                <MenuItem name="3-1">车辆通行数据统计分析</MenuItem>
                <MenuItem name="3-2">车流量统计</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </Submenu>
        </Menu>
	</div>
</template>
<script>
    export default {
    	name:'navSide',
        data () {
            return {
                theme: 'dark'
            }
        }
    }
</script>

