<template>
<v-container fluid>
  <v-row>
    <v-col>
      {{scrapeData.details}}
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

<style scoped>

</style>
