<template>
  <v-row justify="center">
    <v-dialog persistent v-model="extractInfoVisibility" max-width="800px">
      <v-card class="pa-5" color="#EFEBE9">
        <v-card-text align="center" v-if="circularVisibility === true && extractedDataDetails.detailsQuantity ===
        null
         && extractedDataDetails.shopsQuantity === null &&
        extractedDataDetails.commentsQuantity === null">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-card-text>
        <div v-else>
          <div v-if="extractedDataDetails.detailsQuantity > 0 || extractedDataDetails.shopsQuantity > 0 ||
          extractedDataDetails.commentsQuantity > 0">
            <v-card color="#D7CCC8" class="pa-3">
              <v-card-text align="center">
                <span v-if="extractedDataDetails.detailsQuantity === 1" style="font-size: 18px" class="brown-1--text font-weight-bold">{{extractedDataDetails.detailsQuantity}} set of product details has been
                  extracted</span>
                <span v-else style="font-size: 18px" class="brown-1--text font-weight-bold">{{extractedDataDetails.detailsQuantity}} sets of product
                  details have been
                  extracted</span>
              </v-card-text>
              <v-card-text align="center">
                <span v-if="extractedDataDetails.shopsQuantity === 1" style="font-size: 18px" class="brown-1--text font-weight-bold">{{extractedDataDetails.shopsQuantity}}
                set of shop objects has been extracted</span>
                <span v-else style="font-size: 18px" class="brown-1--text font-weight-bold">{{extractedDataDetails.shopsQuantity}}
                sets of shop objects have been extracted</span>
              </v-card-text>
              <v-card-text align="center">
                <span v-if="extractedDataDetails.commentsQuantity === 1" style="font-size: 18px" class="brown-1--text font-weight-bold">{{extractedDataDetails.commentsQuantity}}
                set of comment objects has been extracted</span>
                <span v-else style="font-size: 18px" class="brown-1--text font-weight-bold">{{extractedDataDetails.commentsQuantity}}
                sets of comment objects have been extracted</span>
              </v-card-text>
            </v-card>
          </div>
          <div v-else-if="extractedDataDetails.detailsQuantity === null && extractedDataDetails.shopsQuantity === null &&
          extractedDataDetails.commentsQuantity === null">
            <v-card color="#D7CCC8" class="pa-3">
              <v-card-text align="center">
                <span style="font-size: 18px" class="brown-1--text font-weight-bold">There is no data to be
                  extracted, check your internet connection</span>
              </v-card-text>
            </v-card>
          </div>
            <div align="center">
              <v-btn @click="closeExtractDialog" color="red" class="white--text mx-2 my-3">Close</v-btn>
            </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ExtractInfo',
  data () {
    return {
      circularVisibility: false
    }
  },
  props: {
    extractInfoVisibility: Boolean,
    extractedDataDetails: Object
  },
  methods: {
    closeExtractDialog () {
      this.$emit('closeExtractDialog', false)
    }
  },
  watch: {
    'extractInfoVisibility' (value) {
      if (value === true) {
        this.circularVisibility = true
        setTimeout(function () { this.circularVisibility = false }
          .bind(this),
        6000)
      }
    }
  }
}
</script>

<style scoped>

</style>
