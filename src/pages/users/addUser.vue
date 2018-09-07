<style>

</style>
<template>
    <div>
        <Row>
            <Col span="12">
                <div class="title">添加用户</div>
            </Col>
        </Row>  
        <Form ref="formModel" :model="formModel" :rules="ruleValidate" :label-width="100">
            <Row>
                <Col span="12">
                    <FormItem label="用户名" prop="name">
                        <Input v-model="formModel.name" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="密码" prop="pwd">
                        <Input type="password" v-model="formModel.pwd" placeholder="请输入"></Input>
                    </FormItem>

                      <FormItem label="邮箱" prop="email">
                        <Input v-model="formModel.email" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="手机号" prop="phone">
                        <Input v-model="formModel.phone" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="Date">
                        <FormItem prop="date">
                            <DatePicker type="date" placeholder="请选择" v-model="formModel.date" style="width : 100%;"></DatePicker>
                        </FormItem>    
                        
                    </FormItem>
                    <FormItem label="性别" prop="gender">
                        <Col span="6">
                            <RadioGroup v-model="formModel.gender" >
                                <Radio label="male">男</Radio>
                                <Radio label="female">女</Radio>
                            </RadioGroup>
                        </Col>   
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formModel')">保存</Button>
                        <Button @click="handleCancal('formModel')" style="margin-left: 8px" >返回</Button>
                    </FormItem>
                </Col>
            </Row>    
    </Form>
    </div>
</template>
<script>
    export default{
        name : 'addUser',
        data(){
            return {
                pageTitle:null,
                formModel : {
                    name : '',pwd : '',email : '',phone : '',date : '',gender:'',
                },
                ruleValidate : {
                    name : [{required : true,message : '用户名不能为空'},{type : 'string',max : 20,message:'长度不超过20'}],
                    pwd : [{required : true,message :'密码不能为空',},{type : 'string',message:'字母数字组合长度6-16',trigger :'blur'}],
                    email : [{required : true,message : '邮箱不能为空'},{type : 'email',message : '请输入正确邮箱',trigger : 'blur'}],
                    phone : [{required : true,message : '手机号不能为空'},{type : 'string',message : '请输入正确手机号',trigger : 'blur',pattern : /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/,}],

                }

            }
        },
        mounted(){
            this.init()
        },
        methods : {
            init(){

            },
            handleSubmit(name){

            },
            handleCancal(name){
                this.$router.push({name:'user'})
            }

        }
    }
</script>

