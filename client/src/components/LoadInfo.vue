<template>
  <v-row justify="center">
    <v-dialog persistent v-model="loadInfoVisibility" max-width="800px">
      <v-card class="pa-5" color="#EFEBE9">
        <v-card-text align="center" v-if="loadedDataDetails.newDetailsObjects === null">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-card-text>
        <v-card-text align="center" v-else>
          <v-card color="#D7CCC8">
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="loadedDataDetails.newDetailsObjects === 1">{{loadedDataDetails.newDetailsObjects}} set of product details has been
                loaded</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{loadedDataDetails.newDetailsObjects}} sets of product details have been
                loaded</span>
            </v-card-text>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="loadedDataDetails.newShopObjects === 1">{{loadedDataDetails.newShopObjects}}
              set of shop objects has been loaded</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{loadedDataDetails.newShopObjects}}
              sets of shop objects have been loaded</span>
            </v-card-text>
            <v-card-text>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-if="loadedDataDetails.newCommentObjects === 1">{{loadedDataDetails.newCommentObjects}}
              set of comment objects has been loaded</span>
              <span style="font-size: 18px" class="brown-1--text font-weight-bold" v-else>{{loadedDataDetails.newCommentObjects}}
              sets of comment objects have been loaded</span>
            </v-card-text>
          </v-card>
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
  name: 'LoadInfo',
  props: {
    loadInfoVisibility: Boolean,
    loadedDataDetails: Object
  },
  methods: {
    closeLoadDialog () {
      this.$emit('closeLoadDialog', false)
    }
  }
}
</script>

<style scoped>

</style>
