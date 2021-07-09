<template>
  <div class="bg">
  	<el-table
      :data="tableData"
      @selection-change="selectionChange"
      style="width: 100%">
      <template
      	v-for="(item,i) in tableFields"
      	>
      	<el-table-column
	      	v-if="item.type === 'index'"
        	:key="i"
		      :type="item.type"
		      :width="item.width">
		    </el-table-column>
		    <el-table-column
	      	v-if="item.type === 'selection'"
        	:key="i"
		      :type="item.type"
		      :width="item.width">
		    </el-table-column>
	      <el-table-column
	      	v-if="!item.slot"
        	:key="i"
     		  :prop="item.name"
	        :label="item.label"
	        :width="item.width">
	      </el-table-column>
	      <el-table-column
	      	v-else
        	:key="i"
	        :label="item.label"
	        :width="item.width">
	        <template slot-scope="scope">
	        	<slot :row="scope.row" :i="i" :name="item.name"></slot>
		      </template>
	      </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'myTable',
  components: {
  },
  props: {
  	tableData: {
  		type: Array,
  		default: function (argument) {
  			return [];
  		}
  	},
  	tableFields: {
  		type: Array,
  		default: function (argument) {
  			return [];
  		}
  	},
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    selectionChange(val) {
    	this.$emit('selectionChange',val)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>