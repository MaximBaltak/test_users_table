<template>
  <div>
    <table class="table" cellspacing="0">
      <thead>
      <td class="title">Имя</td>
      <td class="title">Фамилия</td>
      <td class="title">Почта</td>
      </thead>
      <tbody v-if="error.isError">
      <tr>
        <td colspan="3" class="error">{{ error.text }}</td>
      </tr>
      </tbody>
      <tbody v-else>
      <CardComponent v-for="user in users" :user="user" :key="user.id.value"/>
      </tbody>
    </table>
    <LoaderComponent v-if="isLoader"/>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import { mapState } from 'vuex'
import LoaderComponent from '@/components/loaderComponent'

export default {
  name: 'TableComponent',
  components: {
    LoaderComponent,
    CardComponent
  },
  computed: mapState({
    users: state => state.usersModule.users,
    error: state => state.usersModule.error,
    isLoader: state => state.isLoader
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

.error {
  text-align: center;
  border: none;
}
</style>
