<template>
  <div class="container">
    <button @click="click(number)" v-for="(number, i) in numberButtons" :key="i">{{ number }}</button>
  </div>
</template>

<script>
export default {
  name: 'CountComponent',
  data () {
    return {
      numberButtons: [10, 50, 100]
    }
  },
  methods: {
    click (number) {
      this.$store.dispatch('get', number)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  max-width: 100px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  button {
    outline: none;
    display: block;
    border: none;
    background: none;
    color: #420000;
    font-weight: 500;
    font-size: 20px;
    transition: all .2s;
    cursor: pointer;

    &:hover {
      color: #c02323;
    }
  }
}
</style>
