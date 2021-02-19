<template>
  <div class="home" v-if="user">
    <div id="container">
      <div>
        <img src="@/assets/logo.png" alt="Imagen de perfil">
      </div>
      <div>
        <div>Bienvenido entrenador: <b>{{ user.username }}</b></div>
        <div v-if="team">Actualmente tiene un total de: <b>{{ team.length }}</b></div>
      </div>
  </div>

    <div>
      <ul>
        <li v-for="poke in team" :key="poke.id">
          <PokeInfo :poke='poke'/>
        </li>
      </ul>
    </div>
  </div>
  <div v-else>
    <p>Esta es una app para conocer informacion sobre pokemons y ver tu propio equipo.</p>

    <p>Por favor, loggeese para más información</p>
  </div>
</template>

<script>
import PokeInfo from '@/components/pokeInfo'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      user: state => state.account.user,
      team: state => state.account.team
    })
  },
  methods: {
    ...mapActions('account', ['getTeam'])
  },
  mounted () {
    if (this.user) {
      this.getTeam()
    }
  },
  components: {
    PokeInfo
  }
}
</script>

<style scoped>
#container {
  width: 50%;
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

li{
  list-style: none;
  display: inline-block;
  position: relative;
  width: 33%;
}
</style>
