<template>
  <div class="flex-container">
    <router-view/>
  </div>
</template>

<script>

export default {
  created () {
    this.$store.dispatch('get')
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}

td {
  min-width: 200px;
  border-bottom: solid 1px #c02323;
  height: 60px;
}

.flex-container {
  display: flex;
  height: 100%;
  justify-content: center;
  margin-top: 40px;
}

</style>
