<template>
  <div id="login-form">
      <form @submit.prevent="handleSubmit">
        <div>
            <img src="@/assets/login-img.jpg" alt="Imagen pokedex">
        </div>
        <div>
            <input type="text" v-model="username" name="name" placeholder="Username">
        </div>
        <div>
            <input type="password" v-model="password"  name="password" placeholder="Password">
        </div>
        <div>
            <button id="btn-submit">Submit</button>
        </div>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit () {
      if (this.username && this.password) {
        this.login({ username: this.username, password: this.password })
      }
    }
  }
}
</script>

<style scoped>
#login-form{
    width: 90%;
    margin: 0 auto;
    padding: 2rem;
    font-size: 18px !important;
}

#login-form div{
    padding: 0.5rem;
    margin: 0.5rem;
}

#login-form div input{
    width: 80%;
    height: 2.5rem;
    font-size: 25px;
}

img {
  border-radius: 50px;
}

#btn-submit{
    width: 80%;
    height: 2rem;
    background-color: #127eed;
    color: white;
    border: 0;
    border-radius: 10px;
    font-size: 20px;
}
</style>
