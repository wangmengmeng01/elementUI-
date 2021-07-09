<template>
  <div class="bg">
		<el-form ref="search" :model="searchObj" :size="size" :inline="true" :label-position="labelPosition" label-width="80px">
		  <el-form-item
		    v-for="(item,i) in fieldsList"
		    :label="item.label"
		    :key="i"
		    :label-width="item.labelWidth ? item.labelWidth : '90px'"
		    >
		    <el-input
		    	v-if="item.type == 'text'"
		    	v-model.trim="searchObj[item.name]"
		    	:placeholder="item.placeholder"
		    	:maxlength="item.maxlength"
		    	:clearable="item.clearable"
		    	></el-input>
		    <el-select
					v-if="item.type == 'select' && !item.remoteMethod"
		    	v-model.trim="searchObj[item.name]"
		    	:placeholder="item.placeholder"
		    	:clearable="item.clearable"
		    	:multiple="item.multiple"
		    	:filterable="item.filterable"
		    	:remote-method="item.remoteMethod"
		    	>
			    <el-option
			      v-for="T in item.options"
			      :key="T[item.optionsLabel ? item.optionsLabel : 'value']"
			      :label="T[item.optionsLabel ? item.optionsLabel : 'label']"
			      :value="T[item.optionsLabel ? item.optionsLabel : 'value']">
			    </el-option>
			  </el-select>
			  <el-select
					v-if="item.type == 'select' && item.remoteMethod"
		    	v-model.trim="searchObj[item.name]"
		    	:placeholder="item.placeholder"
		    	:clearable="item.clearable"
		    	:multiple="item.multiple"
					remote
					filterable
		    	:remote-method="item.remoteMethod"
		    	>
			    <el-option
			      v-for="T in item.options"
			      :key="T[item.optionsLabel ? item.optionsLabel : 'value']"
			      :label="T[item.optionsLabel ? item.optionsLabel : 'label']"
			      :value="T[item.optionsLabel ? item.optionsLabel : 'value']">
			    </el-option>
			  </el-select>
		    <el-date-picker
		      v-if="item.type == 'datepicker'"
		    	v-model="searchObj[item.name]"
		      :type="item.dateType"
		      :value-format="item.valueFormat ? item.valueFormat : 'yyyy-MM-dd HH:mm:ss'"
		      :default-time="item.defaultTime ? item.defaultTime : ['00:00:00' , '23:59:59']"
		    	:clearable="item.clearable"
		    	:placeholder="item.placeholder"
		      :format="item.format ? item.format : 'yyyy-MM-dd HH:mm:ss'"
		      range-separator="至"
		      start-placeholder="开始时间"
		      end-placeholder="结束时间">
		    </el-date-picker>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">搜索</el-button>
		    <el-button>取消</el-button>
		  </el-form-item>
		</el-form>
		{{searchObj}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'search',
  props: {
  	fieldsList: {
  		type: Array,
  		default: function() {
  			return [];
  		}
  	},
  	searchFn: {
  		type: Function,
  	},
  	labelPosition: {
  		type: String,
  		default: 'right'
  	},
  	size: {
  		type: String,
  		default: 'small'
  	},
  },
  data() {
    return {
    	cc:'',
    	searchObj: {
    		aa: 33333,
    		cc: []
    	},
    }
  },
  watch: {
  },
  beforeCreate() {
  	// console.log(this.fieldsList,'this.fieldsList')
  },
  created() {
  	this.searchObj.ddddd=66666666;
  	let obj = {}
			this.fieldsList.forEach(item => {
					this.$set(this.searchObj,item.name,item.value)
					obj[item.name] = item.value;
	  	})


	  	// this.searchObj=Object.assign({}, this.searchObj, obj)
  },
  mounted() {
  	console.log(this.searchObj,'this.searchObj')
  },
  methods: {
    onSubmit(i) {
			this.fieldsList.forEach(item => {
				if (item.dateType === 'datetimerange' ||　item.dateType === 'daterange') {
					if (this.searchObj[item.name] !== null && this.searchObj[item.name].length) {
						this.searchObj[item.submitField[0]] = this.searchObj[item.name][0];
						this.searchObj[item.submitField[1]] = this.searchObj[item.name][1];
					} else {
						this.searchObj[item.submitField[0]] = '';
						this.searchObj[item.submitField[1]] = '';
					}
　				}
	  	})
  	console.log(this.searchObj,'this.searchObj')
    	this.$emit('update:searchObj',this.searchObj)
    	this.searchFn()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>