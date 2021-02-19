<template>
  <div id="contenedor">
    <div>
        <router-link to="/">Home</router-link>
    </div>
    <div>
        <router-link to="/register">Register</router-link>
        <a v-if="user" v-on:click="logout()">Logout</a>
        <router-link v-else to="/login">Login</router-link>
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
    padding: 10px;
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
