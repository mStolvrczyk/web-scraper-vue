<template>
  <v-app-bar
    app
    color="#6D4C41"
    dark
  >
    <v-toolbar-title>Web Scraper</v-toolbar-title>
    <v-spacer/>
    <div id="buttons">
      <router-link to="/" class="v-btn icon pa-3">
        <v-icon style="font-size: 30px" class="">
          mdi-home
        </v-icon>
      </router-link>
<!--      <router-link to="/users" class="v-btn icon pa-3">-->
<!--        <v-icon style="font-size: 30px">-->
<!--          mdi-view-dashboard        </v-icon>-->
<!--      </router-link>-->
      <router-link to="/users" class="v-btn icon pa-3">
        <v-icon style="font-size: 30px">
          mdi-database
        </v-icon>
      </router-link>
      <!--      <v-btn icon>-->
      <!--      </v-btn>-->
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Drawer'
}
</script>

<style scoped>

</style>
