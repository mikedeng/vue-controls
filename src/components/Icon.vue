<template>
<div>
  <i class="el-icon-share"></i>
  <el-button type="primary" icon="search">search</el-button>

  <el-button-group>
    <el-button type="primary" icon="arrow-left">previous</el-button>
    <el-button type="primary">next<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>

  <el-button type="primary" :loading="true">loading</el-button>

  <el-button type="primary" size="large">large</el-button>
  <el-button type="primary" size="small">small</el-button>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      visible: false
    }
  }
}
</script>
