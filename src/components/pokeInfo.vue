<template>
  <div class="pokeContainer">
    <figure>
      <a href="#">
        <img :src="poke.image" alt="Imagen pokemon">
      </a>
      <button @click="deletePokemon(index)">X</button>
    </figure>
    <div class="pokeData">
      <p>Nº: {{ poke.pokedexNumber }}</p>
      <h4>{{ poke.name.toUpperCase() }}</h4>
      <div class="abi">
        <div v-for="ability in poke.abilities" :key="ability">{{ ability.ability.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['poke', 'index'],
  methods: {
    ...mapActions('team', ['delete', 'getTeam']),
    deletePokemon (index) {
      this.delete({ index: index })
    }
  }
}
</script>

<style scoped>
.pokeContainer {
  width: 95%;
  background-color: lightcoral;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 1rem;
}

.pokeData {
  width: 95%;
  margin: 0 auto;
  align-items: center;
  display: grid;
  text-align: left;
  grid-auto-rows: minmax(35px, auto);
  grid-template-rows: repeat(3, 1fr);
}

.abi {
  display: flex;
}

.abi div {
  margin: 0.1rem 0.1rem;
  padding: 0 6px;
  background-color: lightsalmon;
  border-radius: 10px;
  color: white;
}

p {
  color: white;
  font-size: 100%;
  padding-top: 2px;
  margin: 0.5rem 0;
  font-weight: 500;
}

h4 {
  margin: 5px;
  color: white;
}

figure {
  background: #f2f2f2;
  display: block;
  margin: 0 auto;
  padding: 1rem 0;
  position: relative;
  border-radius: 1rem;
  width: 70%;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

figure>button{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  cursor: pointer;
  border: 0;
  background: none;
}

figure>button:hover{
  background-color: #ee534f;
  border: 1px;
}

img {
  max-height: 8rem;
}
</style>
