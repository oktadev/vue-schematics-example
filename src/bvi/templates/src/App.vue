<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-alert variant="success" show>Bootstrap Vue installed successfully!</b-alert>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>