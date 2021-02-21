<template>
  <div id="login-form">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <div>
            <img src="@/assets/login-img.jpg" alt="Imagen pokedex">
        </div>
        <div class="fields">
          <label> Upload Image</label> <br>
          <input
          type="file"
          ref="file"
          @change="onSelect"
          />
        </div>
        <div class="message">
          <h5>{{ message }}</h5>
        </div>
        <div>
            <input type="text" v-model="username" name="name" placeholder="Username">
        </div>
        <div>
            <input type="password" v-model="password"  name="password" placeholder="Password">
        </div>
        <div>
            <button id="btn-submit">Register</button>
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
      file: null,
      message: ''
    }
  },
  methods: {
    ...mapActions('account', ['register']),
    onSelect () {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
      const file = this.$refs.file.files[0]
      this.file = file
      if (!allowedTypes.includes(file.type)) {
        this.message = 'Solo se permiten imagenes'
      }
      if (file.size > 500000) {
        this.message = 'El archivo pesa demasiado!! Solo se permiten hasta 500KB'
      }
    },
    async onSubmit () {
      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('user', this.username)
      formData.append('password', this.password)
      try {
        this.register(formData)
      } catch (error) {
        console.log(error)
        this.message = 'Ha habido un error en el registro'
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
