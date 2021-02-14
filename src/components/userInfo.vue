<template>
  <div id="container">
    <div>
      <img src="@/assets/logo.png" alt="Imagen de perfil">
    </div>
    <div>
      <div>Id de entrenador</div>
      <div>Nombre del entrenador</div>
      <div>Total de pokemons en su equipo</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#container {
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
}

#container div{
  width: 50%;
}

#container div div{
  padding: 0.5rem;
}

img{
  width: 100px;
  border-radius: 50px;
}
</style>
