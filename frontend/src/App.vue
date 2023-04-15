<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <RouterLink to="/home">Home</RouterLink>
  <RouterLink to="/">Back</RouterLink>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';



export default {
  name: 'App',
  components: {
    RouterView
}
}
</script>

<style>

</style>
