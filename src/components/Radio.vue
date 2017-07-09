<template>
<div>
  <el-radio class="radio" v-model="radio" label="1">first</el-radio>
  <el-radio class="radio" v-model="radio" label="2">second</el-radio>
  <br/>
  <el-radio-group v-model="radio2">
    <el-radio class="radio" label="3">first</el-radio>
    <el-radio class="radio" label="6">second</el-radio>
    <el-radio class="radio" label="9">second</el-radio>
  </el-radio-group>
  <br/>
  <el-radio-group v-model="radio3">
    <el-radio-button label="1">Shanghai</el-radio-button>
    <el-radio-button label="2">Beijing</el-radio-button>
    <el-radio-button label="3">Shenzheng</el-radio-button>
  </el-radio-group>
</div>


</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      radio: '2',
      radio2: '6',
      radio3: '2'
    }
  }
}
</script>
