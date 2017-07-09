<template>
  <el-select 
    v-model="value10"
    multiple
    filterable
    placeholder="select country"
    >
    <el-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      options5: [
        {value: 'HTML', label: '中国'},
        {value: 'CSS', label: '巴西'},
        {value: 'JavaScript', label: '俄罗斯'}
      ],
      value10: []
    }
  }
}
</script>
