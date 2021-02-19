<template>
  <div id="pokeContainer">
    <figure>
      <a href="#">
        <img :src="poke.image" alt="Imagen pokemon">
      </a>
    </figure>
    <div id="pokeData">
      <p >Nº: <b>{{ poke.pokedexNumber }}</b></p>
      <h4>{{ poke.name }}</h4>
      <div v-for="ability in poke.abilities" :key="ability"><b>{{ ability.ability.name }}</b></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['poke']
}
</script>

<style scoped>
/* #pokeData {
  width: 80%;
  display: grid;
  grid-auto-rows: minmax(70px, auto);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "id whgt typ typ"
                        "nm atk atk atk";
}

#pokeData>div {
  text-align: left;
  height: 20px;
}

#pkid {
  grid-area: id;
}

#pkwhgt {
  grid-area: whgt;
}

#pknm {
  grid-area: nm;
}
#pktyp {
  grid-area: typ;
  display: flex;
}

#pktyp>div {
  margin: auto 5px;
  text-decoration: underline;
}

#pkatk {
  grid-area: atk;
  display: flex;
}

#pkatk>div {
  margin: auto 5px;
  text-decoration: underline;
} */
p {
  color: #919191;
  font-size: 100%;
  padding-top: 2px;
  margin: 0.5rem 0;
  font-weight: 500;
}

figure {
  background: #f2f2f2;
  float: left;
  display: block;
  position: relative;
  border-radius: 5px;
  width: 75%;
  padding-top: 80%;
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
