<template>
  <v-row justify="center">
    <v-dialog persistent v-model="extractInfoVisibility" max-width="800px">
      <v-card class="pa-5" color="#EFEBE9">
        <v-card-text align="center" v-if="extractedDataDetails.commentsQuantity === null">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-card-text>
        <v-card-text align="center" v-else>
          <v-card color="#D7CCC8">
            <span style="font-size: 18px" class="brown-1--text font-weight-bold">1 set of product details has been
              extracted</span><br>
            <span style="font-size: 18px" class="brown-1--text font-weight-bold">{{extractedDataDetails.shopsQuantity}}
            sets of shop objects have been extracted</span><br>
            <span style="font-size: 18px" class="brown-1--text font-weight-bold">{{extractedDataDetails.commentsQuantity}}
            sets of comment objects have been extracted</span>
          </v-card>
        </v-card-text>
        <div align="center">
          <v-btn @click="closeExtractDialog" color="red" class="white--text mx-2">Close</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ExtractInfo',
  props: {
    extractInfoVisibility: Boolean,
    extractedDataDetails: Object
  },
  methods: {
    closeExtractDialog () {
      this.$emit('closeExtractDialog', false)
    }
  }
}
</script>

<style scoped>

</style>
