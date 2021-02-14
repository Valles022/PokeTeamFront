<template>
  <div id="contenedor">
    <div>
        <router-link to="/">Home</router-link>
    </div>
    <div>
        <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
#contenedor {
    padding: 20px;
    background-color: #ee534f;
    display: flex;
    justify-content: space-between;
}

#contenedor div {
    padding: 10px;
}

#contenedor a {
  font-weight: bold;
  color: white;
}

#contenedor a.router-link-exact-active {
  color: whitesmoke;
}
</style>
