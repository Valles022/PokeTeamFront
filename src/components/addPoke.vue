<template>
  <div class="pokeAdd">
      <button @click="show = !show" type="button" class="btn btn-outline-info">+</button>
      <Transition name="fade">
        <div v-if="show" class="animation">
          <label for="name">Add Pokemon: </label>
          <input type="text" name="name" v-model="pokemon" placeholder="Poke Name" />
          <button type="button" @click="addPoke(pokemon)" class="btn btn-success">Add</button>
        </div>
      </Transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      pokemon: '',
      show: false
    }
  },
  methods: {
    ...mapActions('team', ['addPokemon']),
    addPoke (pokemon) {
      this.addPokemon({ name: pokemon })
      this.showed = false
      pokemon = ''
    }
  }
}
</script>

<style scoped>
.pokeAdd {
  padding: 1rem;
}

.animation {
  padding: 0.5rem;
  position: relative;
  top: 0;
  display: grid;
}

.fade-enter-active, .fade-leave-active {
  transition: 1s transform cubic-bezier(0, .12, .14,1);
}

.fade-enter-from, .fade-leave-to {
  transform: translateY(2rem);
}

.animation>*{
  margin: 0.2rem;
  width: 100%;
}
</style>
