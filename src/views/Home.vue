<template>
  <div class="home" v-if="userLogged">
    <div>
      <UserInfo />
    </div>

    <div>
      Informacion del equipo del user
      <div>Componente con informacin de cada pokemon</div>
    </div>
  </div>
  <div v-else>
    <p>Esta es una app para conocer informacion sobre pokemons y ver tu propio equipo.</p>

    <p>Por favor, loggeese para más información</p>
  </div>
</template>

<script>
import UserInfo from '@/components/userInfo'

export default {
  name: 'Home',
  data () {
    return {
      userLogged: true
    }
  },
  components: {
    UserInfo
  }
}
</script>
