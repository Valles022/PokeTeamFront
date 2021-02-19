<template>
  <div id="container">
    <div>
      <img src="@/assets/logo.png" alt="Imagen de perfil">
    </div>
    <div>
      <div>Bienvenido entrenador: <b>{{ user.username }}</b></div>
      <div v-if="team">Actualmente tiene un total de: <b>{{ team.length }}</b></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.account.user,
      team: state => state.account.team
    })
  }
}
</script>

<style scoped>
#container {
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
}

#container>div{
  width: 50%;
}

#container>div>div{
  text-align: left;
  padding: 0.5rem;
}

img{
  width: 100px;
  border-radius: 50px;
}
</style>
