<template>
  <div id="pokeAdd">
      <button @click="showed = !showed" type="button" class="btn btn-outline-info">+</button>
      <div v-if="showed" class="animation">
          <label for="name">Add Pokemon: </label>
          <input type="text" name="name" v-model="pokemon" placeholder="Poke Name" />
          <button type="button" @click="addPoke(pokemon)" class="bnt btn-success">Add</button>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const showed = ref(false)
    const pokemon = ref('')

    function addPoke (pokemon) {
      store.team.dispatch('addPokemon')
    }
    return {
      showed,
      pokemon,
      addPoke
    }
  }
}
</script>

<style scoped>
@keyframes inputAnimation {
  0% {
    left: 0px;
  }
  25%{
    left: 10px;
  }
  50%{
    left: 20px;
  }
  75%{
    left: 30px;
  }
  100%{
    left: 40px;
  }
}

#pokeAdd {
    display: flex;
}

.animation {
    display: flex;
    position: relative;
    left: 0;
    height: 2rem;
    animation: 2s 1 linear forwards inputAnimation;
}

.animation>*{
    padding: 0 1rem;
    margin: 0 0.5rem;
}
</style>
