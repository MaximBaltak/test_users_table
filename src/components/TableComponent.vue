<template>
  <table class="table" cellspacing="0">
    <thead>
    <td class="title">Имя</td>
    <td class="title">Фамилия</td>
    <td class="title">Почта</td>
    </thead>
    <tbody v-if="users.length > 0" >
     <CardComponent v-for="user in users" :user="user" :key="user.id.value"/>
    </tbody>
  </table>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import { mapState } from 'vuex'

export default {
  name: 'TableComponent',
  components: { CardComponent },
  computed: mapState({
    users: state => state.users.users
  })
}
</script>

<style lang="scss" scoped>
.table {
  margin: 20px 0 auto;
}

.title {
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}
</style>
