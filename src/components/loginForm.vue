<template>
  <div id="login-form">
      <form @submit.prevent="handleSubmit">
        <div>
            <img src="@/assets/login-img.jpg" alt="Imagen pokedex">
        </div>
        <div>
            <input type="text" v-model="name" name="name" placeholder="Username">
        </div>
        <div>
            <input type="password" v-model="password"  name="password" placeholder="Password">
        </div>
        <div>
            <button id="btn-submit" >Submit</button>
        </div>
      </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const status = computed(() => store.account.status)
    const name = ref('')
    const password = ref('')

    function handleSubmit () {
      if (this.name && this.password) {
        store.login(this.name, this.password)
      }
    }

    return {
      name,
      password,
      handleSubmit,
      status
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
