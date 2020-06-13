<template>
  <div class="main">
    <span style="display: block;box-sizing:border-box;">{{title}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '123'
    }
  },
  methods: {
    test() {
    }
  }
}
</script>
<style scoped>
  .main {
    width: 100%;
    height: 100%;
    box-sizing:border-box;
  }
</style>