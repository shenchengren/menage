<style type="text/css" lang="less">
</style>
<template>
	<div>
	    <Form :model="formItem" :label-width="80" label-position="right">
	    	<Row>
		        <Col span="8">
		        	<FormItem label="用户名">
		        		<Input v-model="formItem.user" clearable></Input>
			        </FormItem>
		        </Col>
		        <Col span="8">
		        	<FormItem label="手机号">
			            <Input v-model="formItem.phone" clearable></Input>
			        </FormItem>
		        </Col>
		        <Col span="8">
		        	<FormItem label="启用状态">
			            <Select v-model="formItem.select">
			                <Option value="启用">启用</Option>
			                <Option value="禁用">禁用</Option>
			             </Select>
			        </FormItem>
		        </Col>
		    </Row>
	        <FormItem>
                 <Button type="primary" ghost @click='add'><Icon type="ios-add-circle-outline"/>添加</Button>
	            <Button type="primary"><Icon type="md-search" />查询</Button>
	            <Button style="margin-left: 8px"><Icon type="ios-refresh" />重置</Button>
	        </FormItem>
	    </Form>
	                                  <!--数据表格-->
	    <Table border stripe :columns="columns" :data="data"></Table>
	    <Page :total="4" show-elevator show-sizer/>
    </div>
</template>
<script>
    export default {
    	name:'userinquire',
        data () {
            return {
                formItem: {
                    input: '',
                    select: ''
                },
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '详情'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '详情',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
            },
            add(){
                this.$router.push({
                    			path: '/add'
                            });
                         
            }
        }
    }
</script>
