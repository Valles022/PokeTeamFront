<template>
  <div id="pokeContainer">
    <figure>
      <a href="#">
        <img :src="poke.image" alt="Imagen pokemon">
      </a>
    </figure>
    <div id="pokeData">
      <p id="id">Nº: {{ poke.pokedexNumber }}</p>
      <h4 id="nm">{{ poke.name }}</h4>
      <div id="abi">
        <div v-for="ability in poke.abilities" :key="ability">{{ ability.ability.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['poke']
}
</script>

<style scoped>
#pokeData {
  width: 70%;
  margin: 0 auto;
  display: grid;
  text-align: left;
  grid-auto-rows: minmax(35px, auto);
  grid-template-columns: repeat(1, 2fr);
  grid-template-areas:
  "id"
  "nm"
  "abi";
}

#pokeData>div {
  height: 20px;
}

#id {
  grid-area: id;
}

#nm {
  grid-area: nm;
}

#abi {
  grid-area: abi;
  display: flex;
}

#abi>div {
  margin: auto 5px;
  padding: 0 6px;
  background-color: thistle;
  border-radius: 10px;
}

p {
  color: #919191;
  font-size: 100%;
  padding-top: 2px;
  margin: 0.5rem 0;
  font-weight: 500;
}

h4 {
  margin: 5px;
}

figure {
  background: #f2f2f2;
  display: block;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
  width: 70%;
  padding-top: 70%;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

img {
  width: 100%;
  float: left;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
