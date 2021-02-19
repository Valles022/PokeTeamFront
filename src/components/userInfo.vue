<template>
  <div>
    <div><img src="" alt="Imagen del usuario"></div>
    <p>Id: {{ user.userId}}</p>
    <h4>user.username</h4>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>

</style>
