<template>
  <div v-if="error.isError" class="container-flex">
    <p>{{ error.text }}</p>
    <button @click="click()" class="back">Вернуться</button>
  </div>
  <div v-else class="container-flex">
    <img v-if="user" class="image" :src="user.picture.medium" alt="avatar">
    <div class="info">
      <div class="container">
        <p>Имя: <span>{{ user.name.first }}</span></p>
        <p>Фамилия: <span>{{ user.name.last }}</span></p>
      </div>
      <div class="container">
        <p>Телефон: <span>{{ user.phone }}}</span></p>
        <p>Почта: <span>{{ user.email }}}</span></p>
      </div>
    </div>
    <button @click="click()" class="back">Вернуться</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserComponent',
  data () {
    return {
      user: {}
    }
  },
  computed: mapState({
    error: state => state.usersModule.error
  }),
  created () {
    const id = this.$route.params.id
    this.user = this.$store.getters.getUserId(id)
  },
  methods: {
    click () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="scss" scoped>
.container-flex {
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 700px;
}

.image {
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: solid 1px #420000;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 80%;
}

.container {
  p {
    font-weight: bold;
    font-size: 25px;
    color: black;

    span {
      font-size: 20px;
      color: #420000;
    }
  }
}

.back {
  margin-top: 50px;
  outline: none;
  background: #420000;
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 80%;
  color: white;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 0 10px #420000;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
