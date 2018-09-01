<style lang="less">
	@import url("./login.less");
</style>

<template>
	<Form class="loginDiv" ref="form" :model="form" :rules="ruleform" label-position="top">
		<img src="../../assets/images/bg_custom.png"/>
        <FormItem label="用户名" prop="user">
            <Input type="text" prefix="ios-contact" clearable v-model="form.user"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input type="password" prefix="ios-lock-outline" clearable v-model="form.password"></Input>
        </FormItem>
        <FormItem prop="rememberme">
            <Checkbox label="记住我" v-model="form.rememberme">记住我</Checkbox>
        </FormItem>
        <FormItem>
            <Button type="success" long @click="handleSubmit('form')">立即登录</Button>
        </FormItem>
    </Form>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					user:'',
					password:'',
					rememberme:false
				},
				ruleform:{
					name:[
					     {required:true,message:'请输入用户名',trigger:'blur'},
					     { type: 'string',message: '用户名不能为空', trigger: 'blur' }
					],
					password:[
					     {required:true,message:'请输入密码',trigger:'blur'},
					     { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
					]
				}
			}
		},
		methods:{
			handleSubmit(name){
				this.$refs[name].validate((valid)=>{
					if(valid){
						this.$Message.success('Success!');
					}else{
						this.$Message.error('loginFail!');
					}
				})
			}
		}
	}
</script>

