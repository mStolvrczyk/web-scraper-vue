<template>
<v-container>
  <v-row>
    <v-col cols="8" offset="2">
      <v-card height="100px">
        <v-card-text style="font-size: 20px" class="darken-1--text font-weight-bold" align="center">DETAILS</v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card height="100px">
        <v-card-title>SHOPS</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import ScrapeService from '../services/ScrapeService'
export default {
  name: 'Dashboard',
  data () {
    return {
      scrapeService: new ScrapeService(),
      scrapeData: null
    }
  },
  methods: {
    async scrapePage () {
      let page = await this.scrapeService.getPage()
      this.scrapeData = page
      console.log(page)
    }
  },
  mounted () {
    this.scrapePage()
  },
  watch: {
    'scrapeData' (value) {
      console.log(value)
    }
  }
}
</script>

<style>
  .fill-height {
    height: 40%;
  }
</style>
