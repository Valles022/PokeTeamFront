<template>
  <div class="nav">
    <div class="navButton">
      <a @click="showed = !showed" class="btn">
        Menu
      </a>
    </div>
    <Transition name="fade">
      <div v-if="showed" class="navList">
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
            <a v-on:click="logout()">Logout</a>
          </div>
          <div v-else>
            <router-link to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NavBar',
  data () {
    return {
      showed: false
    }
  },
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
.navButton {
  background-color: #ee534f;
  position: relative;
  border-bottom: 2px solid black;
  text-align: left;
  z-index: 100;
}

.navButton a {
  font-weight: bold;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transform: translateY(0);
}

.fade-enter-from, .fade-leave-to {
  transform: translateY(-12rem);
}

.nav {
  width: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.navList {
  background-color: #ee534f;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  position: relative;
  transition: 1s transform cubic-bezier(0, .12, .14,1);
}

.navLeft div{
  display: grid;
}

.navList a {
  font-weight: bold;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: underline;
  color: whitesmoke;
}

</style>
