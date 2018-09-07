<style lang="less">
	@import url("../../assets/less/common.less");
	@import url("./header.less");
</style>

<template>
	<Header>
		
		<Menu class="bg" mode="horizontal" :theme="theme" active-name="1">
			<div class="logo">胡歌后援会</div>
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
		            <Icon type="ios-contact"/> <span :id="userID">hi, {{userName}}</span>	
		        </MenuItem>
		        <MenuItem name="5">
		            <Icon type="ios-log-out" /> <span @click="logout">退出登录</span>
		        </MenuItem>
	        </div>
	    </Menu>
	</Header>
</template>

<script>
	import {getCookie} from '@/utils/index'
	export default{
		name:'topnav',
		data () {
            return {
				theme: 'dark',
				userName : '',
				userID : '',
            }
		},
		mounted(){
			this.getUserName()
		},
		methods:{
			logout(){
				this.$ajax.post('http://39.106.54.6:8089/api/logout').then(res => {
					if(res.data.status == 1){
						this.$router.push({path:'/login'})
					}else{
						this.$Message.error(res.data.msg)
					}
				},(err) => {
					this.$Message.error('服务器出错，稍后再试')
				}) 
			},
			getUserName(){
				let user = JSON.parse(getCookie('user'));
				console.log(user);
				this.userName = user.name;
				this.userID = user.id;

			}
		}
	}
</script>

