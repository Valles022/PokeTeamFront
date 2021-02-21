<template>
  <div id="contenedor">
    <div>
      <div v-if="user">
        <router-link v-if="user.username === 'admin'" to="/admin">Admin Panel</router-link>
        <router-link v-if="user.username === 'admin'" to="/register">Register</router-link>
      </div>
      <div>
          <router-link to="/">Home</router-link>
      </div>
    </div>
    <div>
      <div v-if="user">
        <a v-on:click="logout()">Logout</a>
      </div>
      <div v-else>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapState({
      user: state => state.account.user
    })
  },
  methods: {
    ...mapActions('account', ['logout'])
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
  text-decoration: underline;
}

#contenedor {
    padding: 20px;
    background-color: #ee534f;
    display: flex;
    justify-content: space-between;
}

#contenedor div {
    padding: 0 10px;
    display: flex;
}

#contenedor a {
  font-weight: bold;
  color: white;
  padding: 6px;
}

#contenedor a.router-link-exact-active {
  color: whitesmoke;
}
</style>
