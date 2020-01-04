<template>
<v-container>
  <v-row>
    <v-col cols="8" offset="2">
      <v-card class="pa-2">
        <v-card-text style="font-size: 20px" class="darken-1--text font-weight-bold" align="center">DETAILS</v-card-text>
        <v-row>
          <v-col cols="10" offset="1" style="text-align: center">
            <v-card color="#BCAAA4" class="pa-2">
              {{scrapeData.details.name}}
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" offset="1" style="text-align: center">
            <v-card color="#BCAAA4" class="pa-2">
              rate: {{scrapeData.details.rate}}
            </v-card>
          </v-col>
          <v-col cols="4" offset="2" style="text-align: center">
            <v-card color="#BCAAA4" class="pa-2">
              opinions: {{scrapeData.details.opinions}}
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <div class="text-center pa-2">
        <v-btn-toggle rounded>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn @click="chartSwitch = true" color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">E</span>
              </v-btn>
            </template>
            <span>Extract</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">T</span>
              </v-btn>
            </template>
            <span>Transform</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">L</span>
              </v-btn>
            </template>
            <span>Load</span>
          </v-tooltip>
        </v-btn-toggle>
      </div>
      <div class="text-center pa-2">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn rounded v-on="on">
              <span style="font-size: 20px" class="brown-1--text font-weight-bold">ETL</span>
            </v-btn>
          </template>
          <span>Extract -> Transform -> Load</span>
        </v-tooltip>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card height="100px">
        <v-card-text style="font-size: 20px" class="darken-1--text font-weight-bold" align="center">SHOPS</v-card-text>
        <div v-for="shop in scrapeData.shops" :key="shop.shopName">
          <v-row>
            <v-col cols="8" offset="2">

            </v-col>
          </v-row>
        </div>
      </v-card>
      <div class="text-center pa-2">
        <v-btn-toggle rounded>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn @click="chartSwitch = true" color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">E</span>
              </v-btn>
            </template>
            <span>Extract</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">T</span>
              </v-btn>
            </template>
            <span>Transform</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">L</span>
              </v-btn>
            </template>
            <span>Load</span>
          </v-tooltip>
        </v-btn-toggle>
      </div>
      <div class="text-center pa-2">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn rounded v-on="on">
              <span style="font-size: 20px" class="brown-1--text font-weight-bold">ETL</span>
            </v-btn>
          </template>
          <span>Extract -> Transform -> Load</span>
        </v-tooltip>
      </div>
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
      this.scrapeData = await this.scrapeService.getPage()
      console.log(this.scrapeData)
    }
  },
  mounted () {
    this.scrapePage()
  }
}
</script>

<style>
  .fill-height {
    height: 40%;
  }
</style>
