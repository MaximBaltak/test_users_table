<template>
  <tr class="row">
    <td class="col">
      <router-link :to="{name:'user',params:{id:user.id.value}}">
        {{ user.name.first }}
      </router-link>
    </td>
    <td class="col">
      <router-link :to="{name:'user',params:{id:user.id.value}}">
        {{ user.name.last }}
      </router-link>
    </td>
    <td class="col">
      <router-link :to="{name:'user',params:{id:user.id.value}}">{{ user.email }}</router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['user']
}
</script>

<style scoped>
.row {
  cursor: pointer;
}

.col {
  text-align: center;
}

a {
  text-decoration: none;
  color: #420000;
  font-size: 16px;
  font-weight: 500;
}
</style>
