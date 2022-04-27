<template>
  <div class="homeLogged" v-if="user">
    <div class="trainerContainer">
      <div>
        <img v-if="user.image" :src="`http://localhost:3000/uploads/${user.image}`" alt="Imagen del usuario" class="trainerImg">
        <img v-else src="@/assets/pokeball.png" alt="Imagen del usuario" class="trainerImg">
      </div>
      <div class="trainerInfo">
        <div>Bienvenido entrenador: <b>{{ user.username }}</b></div>
        <div v-if="team">Actualmente tiene un total de: <b>{{ team.length }}</b> pokemons en su equipo</div>
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
      <div class="pokeList">
        <div v-for="(poke, index) in team" :key="index">
          <PokeInfo :poke='poke' :index="index"/>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="home">
    <div class="container">
      <div>
        <h1>Please, log in to catch them all!!</h1>
      </div>
      <div>
        <img class="imgHome" src="@/assets/pokemon-todos.jpg" alt="Imagen pokedex">
      </div>
    </div>
  </div>
</template>

<script>
import PokeInfo from '@/components/pokeInfo'
import PokeAdd from '@/components/addPoke'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  computed: mapState({
    user: state => state.account.user,
    team: state => state.team.team,
    messageTeam: state => state.team.message,
    deleteStatus: state => state.team.status.deleteState
  }),
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

<style>
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

.homeLogged {
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.home {
  height: 100vh;
  display: flex;
  align-items: center;
}

.container h1 {
  font-size: 2rem;
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

.pokeList {
  display: grid;
  gap: 1rem;
}

.trainerImg {
  width: 100%;
  max-width: 13rem;
  background: none;
}

li{
  list-style: none;
  display: flex;
}

@media screen and (min-width: 312px) {
  .trainerContainer {
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }

  .pokeList {
    width: 90%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 481px) {
  .trainerContainer {
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }

  .pokeList {
    width: 80%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 769px) {
  .home {
    padding-top: 0;
  }

  .trainerContainer {
    flex-flow: nowrap;
  }

  .trainerInfo {
    width: 50%;
  }

  .pokeAdd {
    padding: 0;
    display: flex;
    flex-flow: nowrap;
    align-items: center;
  }

  .pokeList {
    grid-template-columns: repeat(2, 1fr);
  }

  .animation {
    display: grid;
    grid-template-columns: repeat(3, 7rem);
    grid-template-rows: repeat(1, 3rem);
    gap: 0.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .pokeList {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    margin: 0 auto;
  }
  .animation {
    grid-template-columns: repeat(3, 10rem);
  }
}

@media screen and (min-width: 1201px) {
  .pokeList {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    margin: 0 auto;
  }
  .animation {
    grid-template-columns: repeat(3, 12rem);
  }
}

</style>
