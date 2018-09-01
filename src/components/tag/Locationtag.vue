<style lang="less">
	@import url("./locationtag.less");
</style>

<template>
	<div class="location-bar">
		<div class="next" data-roles="next"><span class="iconfont icon-left" data-roles="next"></span></div>
	        <div class="tab-content">
	        	<ul class="location-left">
		       	   	<Tag type="dot">后台首页</Tag>
				    <Tag type="dot" closable>个人信息</Tag>
				    <Tag type="dot" closable color="primary">用户管理</Tag>
				    <Tag type="dot" closable>通关数据监控</Tag>
		       	</ul>
	        </div>
	    <div class="pre" data-roles="pre"><span class="iconfont icon-right" data-roles="pre"></span></div>
	    <div class="location-right">
	    	<Dropdown class="locationmenu">
		        <Button>标签选项<Icon type="ios-arrow-down"></Icon></Button>
		        <DropdownMenu slot="list">
		            <DropdownItem>关闭所有</DropdownItem>
		            <DropdownItem>关闭其他</DropdownItem>
		        </DropdownMenu>
		    </Dropdown>
	    </div>
    </div>
</template>

<script>
	export default{
		name:'locationtag',
		data() {
			return {
				username: "",
			};
		}
	}
</script>

