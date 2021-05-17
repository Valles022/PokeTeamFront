<template>
  <div class="home" v-if="user">
    <div id="container">
      <div>
        <img v-if="user.image" :src="`http://localhost:3000/uploads/${user.image}`" alt="Imagen del usuario">
        <img v-else src="@/assets/logo.png" alt="Imagen del usuario">
      </div>
      <div>
        <div>Bienvenido entrenador: <b>{{ user.username }}</b></div>
        <div v-if="team">Actualmente tiene un total de: <b>{{ team.length }}</b></div>
        <div><PokeAdd /></div>
      </div>
    </div>
    <div>
      <div v-if="messageTeam">
        <div v-if="deleteStatus" class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{{ messageTeam }}</strong>
          <button @click="closeMessage" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div v-else class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>{{ messageTeam }}</strong>
          <button @click="closeMessage" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <ul>
        <li v-for="(poke, index) in team" :key="index">
          <PokeInfo :poke='poke' :index="index"/>
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
import PokeAdd from '@/components/addPoke'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      user: state => state.account.user,
      team: state => state.team.team,
      messageTeam: state => state.team.message,
      deleteStatus: state => state.team.status.deleteState
    })
  },
  methods: {
    ...mapActions('team', ['getTeam', 'resetMessage']),
    closeMessage () {
      this.resetMessage()
    }
  },
  mounted () {
    if (this.user) {
      this.getTeam()
    }
  },
  components: {
    PokeInfo,
    PokeAdd
  }
}
</script>

<style scoped>
@keyframes messageAnimation {
  0% {
    opacity: 1;
  }
  25%{
    opacity: 0.75;
  }
  50%{
    opacity: 0.5;
  }
  75%{
    opacity: 0.25;
  }
  100%{
    opacity: 0;
  }
}

.messageSuccess {
  width: 40%;
  opacity: 0;
  margin: 0 auto;
  border-radius: 25px;
  background-color: rgb(35, 223, 35);
  color: white;
  padding: 0.5rem;
  animation: 3s 1 linear messageAnimation;
}

.messageFailed {
  width: 40%;
  opacity: 0;
  margin: 0 auto;
  border-radius: 25px;
  background-color: #ff5650;
  color: white;
  padding: 0.5rem;
  animation: 3s 1 linear messageAnimation;
}

#container {
  width: 50%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
}

#container>div{
  width: 40%;
  align-self: center;
}

#container>div>div{
  text-align: left;
  padding: 0.5rem;
}

img{
  width: 120px;
  height: 120px;
  border-radius: 50px;
}

li{
  list-style: none;
  display: inline-block;
  position: relative;
  width: 33%;
}
</style>
