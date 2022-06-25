<template>
  <div>
    <CountComponent/>
    <TableComponent/>
  </div>
</template>

<script>
import CountComponent from '@/components/CountComponent'
import TableComponent from '@/components/TableComponent'

export default {
  name: 'MainComponent',
  components: {
    TableComponent,
    CountComponent
  }
}
</script>

<style scoped>

</style>
