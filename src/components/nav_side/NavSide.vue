<style lang="less">
	@import url("./navSide.less");
</style>

<template>
	<div class="navside">
		<div id="mini"><img src="../../assets/images/mini.png"></div>
        <Menu class="menu" :theme="theme" :open-names="['usre-manage']" accordion @on-select="selectMenu">	
            <Submenu name="usre-manage" v-if='limits=="1"'>
                <template slot="title">
                    <Icon type="ios-people" />用户管理
                </template>
                <MenuItem name="user" >用户列表</MenuItem>
            </Submenu>
            <Submenu name="time-monitor">
                <template slot="title">
                    <Icon type="ios-paper" />实时监控
                </template>
                <MenuItem name="custorms-data">通关数据监控</MenuItem>
                <MenuItem name="system-log">系统日志</MenuItem>
            </Submenu>
            
            <Submenu name="statistical">
                <template slot="title">
                    <Icon type="ios-stats" />统计分析            
                </template>
                <MenuItem name="car-passage">车辆通行数据统计分析</MenuItem>
                <MenuItem name="vehicle-counting">车流量统计</MenuItem>
                <MenuItem name="during-analysis">时段分析</MenuItem>
                <MenuItem name="retention">用户留存</MenuItem>
                <MenuItem name="chum-user">流失用户</MenuItem>
            </Submenu>
        </Menu>
	</div>
</template>
<script>
import state from '@/store/index'
    export default {
    	name:'navSide',
        data () {
            return {
                theme: 'dark',
                limits : 0,
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                console.log(state.limits);
                this.limits = state.limits
            },
            selectMenu(val){
                console.log(val)
                this.$router.push({path : '/'+val})
            }
        },
        watch:{

        }
    }
</script>

