<template>
  <v-row justify="center">
    <v-dialog persistent v-model="etlInfoVisibility" max-width="800px">
      <v-card class="pa-5" color="#EFEBE9">
        <v-card-text align="center" v-if="etlDataDetails.extractedData.details === null">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-card-text>
        <v-card-text align="center" v-else>
          <v-card color="#D7CCC8" class="pa-3">
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.extractedData.details === 1">{{etlDataDetails.extractedData.details}} set of product details has been
                extracted</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.extractedData.details}} sets of product details have been
                extracted</span>
            </v-card-text>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.extractedData.shops
               === 1">{{etlDataDetails.extractedData.shops}} set of shop objects has been
                extracted</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.extractedData.shops}} sets of shop objects have been
                extracted</span>
            </v-card-text>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.extractedData.comments
               === 1">{{etlDataDetails.extractedData.comments}} set of comment objects has been
                extracted</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.extractedData.comments}} sets of comment objects have been
                extracted</span>
            </v-card-text>
            <hr>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.transformedData.details === 1">{{etlDataDetails.transformedData.details}} set
                of product details has been
                transformed</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.transformedData.details}} sets of product details have been
                transformed</span>
            </v-card-text>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.transformedData.shops
               === 1">{{etlDataDetails.transformedData.shops}} set of shop objects has been
                transformed</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.transformedData.shops}} sets of shop objects have been
                transformed</span>
            </v-card-text>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.transformedData.comments
               === 1">{{etlDataDetails.transformedData.comments}} set of comment objects has been
                transformed</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.transformedData.comments}} sets of comment objects have been
                transformed</span>
            </v-card-text>
            <hr>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.loadedData.details === 1">{{etlDataDetails.loadedData.details}} set
                of product details has been
                loaded</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.loadedData.details}} sets of product details have been
                loaded</span>
            </v-card-text>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.loadedData.shops
               === 1">{{etlDataDetails.loadedData.shops}} set of shop objects has been
                loaded</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.loadedData.shops}} sets of shop objects have been
                loaded</span>
            </v-card-text>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="etlDataDetails.loadedData.comments
               === 1">{{etlDataDetails.loadedData.comments}} set of comment objects has been
                loaded</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{etlDataDetails.loadedData.comments}} sets of comment objects have been
                loaded</span>
            </v-card-text>
          </v-card>
<!--          <v-card-text>-->
<!--            <span style="font-size: 18px" class="brown-1&#45;&#45;text font-weight-bold" v-if="loadedDataDetails.newShopObjects === 1">{{loadedDataDetails.newShopObjects}}-->
<!--            set of shop objects has been loaded</span>-->
<!--            <span style="font-size: 18px" class="brown-1&#45;&#45;text font-weight-bold" v-else>{{loadedDataDetails.newShopObjects}}-->
<!--            sets of shop objects have been loaded</span>-->
<!--          </v-card-text>-->
<!--          <v-card-text>-->
<!--            <span style="font-size: 18px" class="brown-1&#45;&#45;text font-weight-bold" v-if="loadedDataDetails.newCommentObjects === 1">{{loadedDataDetails.newCommentObjects}}-->
<!--            set of comment objects has been loaded</span>-->
<!--            <span style="font-size: 18px" class="brown-1&#45;&#45;text font-weight-bold" v-else>{{loadedDataDetails.newCommentObjects}}-->
<!--            sets of comment objects have been loaded</span>-->
<!--          </v-card-text>-->
        </v-card-text>
        <div align="center">
          <v-btn @click="closeLoadDialog" color="red" class="white--text mx-2">Close</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'EtlInfo',
  props: {
    etlInfoVisibility: Boolean,
    etlDataDetails: Object
  },
  methods: {
    closeLoadDialog () {
      this.$emit('closeEtlDialog', false)
    }
  }
}
</script>

<style scoped>

</style>
