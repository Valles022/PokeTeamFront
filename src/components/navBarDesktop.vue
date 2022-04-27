<template>
  <div class="nav">
    <div class="navList">
      <div class="navLeft">
        <div v-if="user">
          <router-link v-if="user.username === 'admin'" to="/admin">Admin Panel</router-link>
          <router-link v-if="user.username === 'admin'" to="/register">Register</router-link>
        </div>
        <div>
            <router-link to="/">Home</router-link>
        </div>
      </div>
      <div class="navRight">
        <div v-if="user">
          <router-link to="/login" v-on:click="logout()">Logout</router-link>
        </div>
        <div v-else>
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NavBarDesktop',
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
.nav {
  width: 100%;
  display: block;
}

.navList {
  background-color: #ee534f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navLeft {
  display: flex;
  gap: 0.5rem;
}

.navList a {
  font-weight: bold;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: underline;
  color: whitesmoke;
}
</style>
