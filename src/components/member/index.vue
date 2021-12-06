
<template>
    <div>
      <div>
      <a-button type="primary" @click="addHandle">
      添加用户
    </a-button>
      </div>
    <a-table bordered :data-source="list" :columns="columns" rowKey="id">
      <template slot="name" slot-scope="text">{{text}}
      </template>
      <template slot="operation">
        <span @click="delectHandle">删除</span>
      </template>
    </a-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: [],
      columns: [
        {
          title: '名字',
          dataIndex: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    };
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      axios.get('http://localhost:3000/user/list').then(res=>{
        this.list=res.data
      })
    },
   async addHandle(){
      const params={
        phone:15545347252,
        name:"涛涛",
        age:12,
        sex:'male'
      }
      
     const data=await axios.get('http://localhost:3000/user/list').then(res=>{
       return res.data
      })
      const result=data.some(item=>{
          return item.name===params.name&&item.phone===(params.phone).toString()
        })
        if(result){
          console.log('注册过')
          return
        }
      axios.post('http://localhost:3000/user/addUser',params).then(res=>{
        console.log(res)
        this.init()
      })
    },
    delectHandle(){
      const params={
        phone:15545347252
      }
      axios.post('http://localhost:3000/user/deleteUser',params).then(res=>{
        console.log('delete',res)
        this.init()
      })
    }
  },
};
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>