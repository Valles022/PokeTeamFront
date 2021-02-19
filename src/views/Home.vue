<template>
  <div class="home" v-if="user">
    <div>
      <UserInfo />
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
import UserInfo from '@/components/userInfo'
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
    this.getTeam()
  },
  components: {
    UserInfo,
    PokeInfo
  }
}
</script>

<style scoped>
li{
  list-style: none;
  display: block;
  float: left;
  position: relative;
  width: 25%;
}
</style>
