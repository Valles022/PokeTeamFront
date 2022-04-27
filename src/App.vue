<template>
  <div>
    <NavBar v-if="mobileView"/>
    <NavBarDesktop v-else/>
  </div>
  <router-view/>
</template>

<script>
import NavBar from '@/components/navbar.vue'
import NavBarDesktop from '@/components/navBarDesktop.vue'
export default {
  data () {
    return {
      mobileView: true
    }
  },
  components: {
    NavBar,
    NavBarDesktop
  },
  methods: {
    checkView () {
      this.mobileView = window.innerWidth <= 769
    }
  },
  created () {
    this.checkView()
    window.addEventListener('resize', this.checkView)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  margin: 0px;
  padding: 0px;
  border: 0;
  scroll-behavior: smooth;
  overflow: hidden;
}

img {
  width: 100%;
}
</style>
