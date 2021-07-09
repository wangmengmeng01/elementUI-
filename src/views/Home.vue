<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <search
    :searchObj.sync="searchObj"
    :fieldsList="fieldsList"
    :searchFn="searchFn"
    />
    <myTable
    :tableData="tableData"
    :tableFields="tableFields"
    >
    	<!-- <template  #action> -->
    	<template  v-slot:action="otherSlotProps">
    	<!-- <template  slot="action" slot-scope="{ row }"> -->

    	<div>{{66666666666}}</div>
    	<div>{{otherSlotProps}}</div>
    	</template>
    </myTable>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import search from '@/components/search.vue'
import myTable from '@/components/table.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    search,
    myTable,
  },
  data() {
  	return {
  		searchObj: {},
  		fieldsList: [
  			{
					type: 'text',
          value: '66666',
          label: '昵称：',
          name: 'nickName',
          placeholder: '请输入',
          labelWidth: '90px',
          maxlength: 30,
          clearable: true
  			},
  			{
					type: 'select',
          value: '',
          label: '昵称：',
          name: 'nickName1',
          placeholder: '请输入',
          labelWidth: '90px',
          maxlength: 30,
          clearable: true,
          options: [
          	{
          		label: '555',
          		value: '555',
          	}
          ]
  			},
  			{
					type: 'select',
          value: '',
          label: '昵称：',
          name: 'nickName12',
          placeholder: '请输入',
          labelWidth: '90px',
          maxlength: 30,
          clearable: true,
          remoteMethod: this.remoteMethod,
          options: this.list
  			},
  			{
					type: 'datepicker',
					dateType: 'date',
          value: '',
          label: '昵称：',
          name: 'date',
          placeholder: '请输入',
          labelWidth: '90px',
          maxlength: 30,
          clearable: true,
  			},
  			{　　　　　　　　　　　　
					type: 'datepicker',
					dateType: 'datetimerange',
          value: [],　　
          submitField: ['start','end'],
          label: '昵称：',
          name: 'dateq',
          valueFormat: 'yyyy-MM-dd HH:mm:ss',
          placeholder: '请输入',
          labelWidth: '90px',
          maxlength: 30,
          clearable: true,
  			},
  		],
  		list:[],
  		tableData:[],
  		tableFields:[
	  		{
	  			name: 'name',
	  			label: '姓名',
	  			width: 80,
	  		},
	  		{
	  			name: 'age',
	  			label: '年龄',
	  			width: 80,
	  		},
	  		{
	  			name: 'action',
	  			label: '操作',
	  			slot: true,
	  		},
  		],
  	}
  },
  created() {
  	setTimeout(() => {
  		this.tableData = [
  			{
  				name: '王二',
  				age: 18,
  			},
  			{
  				name: '王二',
  				age: 18,
  			},
  		]
  	},100)
  },
	methods: {
    searchFn(i) {
  		console.log(this.searchObj,'this.searchObj111111')
    },
    remoteMethod(i) {
  		console.log(i);
  		this.list.push({
				label: '555',
    		value: '555' + i,
  		})
			this.fieldsList.forEach(item => {
				if (item.name == 'nickName12') {
					item.options = this.list;
				}
	  	})
    },
  }
}
</script>
