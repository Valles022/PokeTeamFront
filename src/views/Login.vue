<template>
  <div class="container">
      <LoginForm class="loginContainer" />

      <div>
        <button @click="guestSubmit" class="btn guestBtn">Continue as a Guest</button>
      </div>
  </div>
</template>

<script>
import LoginForm from '@/components/loginForm'
import { mapActions } from 'vuex'

export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions('account', ['login']),
    guestSubmit () {
      this.login({ username: 'guest', password: 'guest' })
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  gap: 1rem;
  align-items: center;
}

.loginContainer {
  margin-top: 4rem;
}

.guestBtn {
  width: 80%;
  border-radius: 1rem;
  background-color: black;
  color: whitesmoke;
}

</style>
