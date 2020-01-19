<template>
  <v-row justify="center">
    <v-dialog persistent v-model="loadInfoVisibility" max-width="800px">
      <v-card class="pa-5" color="#EFEBE9">
        <v-card-text align="center" v-if="circularVisibility === true && loadedDataDetails.newDetailsObjects ===
        null
         && loadedDataDetails.newShopObjects === null &&
        loadedDataDetails.newCommentObjects === null">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-card-text>
        <div v-else>
          <div v-if="loadedDataDetails.newDetailsObjects > 0 || loadedDataDetails.newShopObjects > 0 ||
          loadedDataDetails.newCommentObjects > 0">
            <v-card color="#D7CCC8" class="pa-3">
              <v-card-text align="center">
                <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="loadedDataDetails.newDetailsObjects === 1">{{loadedDataDetails.newDetailsObjects}} set of product details has been
                  loaded</span>
                <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{loadedDataDetails.newDetailsObjects}} sets of product details have been
                  loaded</span>
              </v-card-text>
              <v-card-text align="center">
                <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="loadedDataDetails.newShopObjects === 1">{{loadedDataDetails.newShopObjects}}
                set of shop objects has been loaded</span>
                <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{loadedDataDetails.newShopObjects}}
                sets of shop objects have been loaded</span>
              </v-card-text>
              <v-card-text align="center">
                <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="loadedDataDetails.newCommentObjects === 1">{{loadedDataDetails.newCommentObjects}}
                set of comment objects has been loaded</span>
                <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{loadedDataDetails.newCommentObjects}}
                sets of comment objects have been loaded</span>
              </v-card-text>
            </v-card>
            <div align="center">
              <v-btn @click="closeLoadDialog" color="red" class="white--text mx-2 my-3">Close</v-btn>
              <v-btn @click="goToDatabase" color="blue" class="white--text mx-2 my-3">Go to database</v-btn>
            </div>
          </div>
          <div v-else-if="loadedDataDetails.newDetailsObjects === 0 && loadedDataDetails.newShopObjects === 0 &&
          loadedDataDetails.newCommentObjects === 0">
            <v-card color="#D7CCC8" class="pa-3">
              <v-card-text align="center">
                <span style="font-size: 18px" class="brown-1--text font-weight-bold">There is no new data to be
                  loaded</span>
              </v-card-text>
            </v-card>
            <div align="center">
              <v-btn @click="closeLoadDialog" color="red" class="white--text mx-2 my-3">Close</v-btn>
              <v-btn @click="goToDatabase" color="blue" class="white--text mx-2 my-3">Go to database</v-btn>
            </div>
          </div>
          <div v-else-if="loadedDataDetails.newDetailsObjects === null && loadedDataDetails.newShopObjects === null &&
          loadedDataDetails.newCommentObjects === null">
            <v-card color="#D7CCC8" class="pa-3">
              <v-card-text align="center">
                    <span style="font-size: 18px" class="brown-1--text font-weight-bold">An error with database
                      connection has occured</span>
              </v-card-text>
            </v-card>
            <div align="center">
              <v-btn @click="closeLoadDialog" color="red" class="white--text mx-2 my-3">Close</v-btn>
              <v-btn @click="goToDatabase" color="blue" class="white--text mx-2 my-3">Go to database</v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'LoadInfo',
  data () {
    return {
      circularVisibility: false
    }
  },
  props: {
    loadInfoVisibility: Boolean,
    loadedDataDetails: Object
  },
  methods: {
    closeLoadDialog () {
      this.$emit('closeLoadDialog', false)
    },
    goToDatabase () {
      this.$emit('goToDatabase', false)
    }
  },
  watch: {
    'loadInfoVisibility' (value) {
      if (value === true) {
        this.circularVisibility = true
        setTimeout(function () { this.circularVisibility = false }
          .bind(this),
        3000)
      }
    }
  }
}
</script>

<style scoped>

</style>
