<style lang="less">
	@import "./login.less";
</style>

<template>
	<Form class="loginDiv" ref="form" :model="form" :rules="ruleform" label-position="top">
		<img src="../../assets/images/bg_custom.png"/>
        <FormItem label="用户名" prop="name">
            <Input type="text" prefix="ios-contact" clearable v-model="form.name"></Input>
        </FormItem>
        <FormItem label="密码" prop="pwd">
            <Input type="pwd" prefix="ios-lock-outline" clearable v-model="form.pwd"></Input>
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
					name:'',
					pwd:'',
					rememberme:false
				},
				ruleform:{
					name:[
					     {required:true,message:'请输入用户名',trigger:'blur'},
					     { type: 'string',message: '用户名不能为空', trigger: 'blur' }
					],
					pwd:[
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
						this.Login(this.form)
					}else{
						this.$Message.error('loginFail!');
					}
				})
			},
			Login(data){
				this.$ajax.post('http://39.106.54.6:8081/api/login',data).then(res => {
					console.log(res.data.msg)
					// this.$Message.success('Success!');
				},(err) => {
					console.log('服务器出错，稍后再试')






				})
			}
		}
	}
</script>

