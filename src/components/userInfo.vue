<template>
  <div>
    <div v-if="user.image"><img :src="`http://localhost:3000/uploads/${user.image}`" alt="Imagen del usuario"></div>
    <div v-else><img src="@/assets/logo.png" alt="Imagen del usuario"></div>
    <p>Id: {{ user.userId }}</p>
    <h4>{{ user.userName }}</h4>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>
img {
  width: 220px;
  height: 220px;
  border-radius: 25px;
}
</style>
