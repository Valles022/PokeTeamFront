<template>
  <div class="container">
      <LoginForm class="" />
  </div>
</template>

<script>
import LoginForm from '@/components/loginForm'
export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 1rem auto;
}
</style>
