<template>
  <v-app>
    <Navbar/>
    <v-content>
      <v-container class="fill-height">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  })
}
</script>
<style>
  #app {
    background-color: #ECEFF1;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
