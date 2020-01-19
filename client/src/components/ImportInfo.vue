<template>
  <v-row justify="center">
    <v-dialog persistent v-model="importInfoVisibility" max-width="800px">
      <v-card class="pa-5" color="#EFEBE9">
        <v-card-text align="center">
          <span style="font-size: 18px" class="brown-1--text font-weight-bold">Imported data has been transformed
          and is ready to export</span>
        </v-card-text>
        <div align="center">
          <v-btn @click="closeImportDialog" color="red" class="white--text mx-2 my-3">Close</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ImportInfo',
  props: {
    importInfoVisibility: Boolean
  },
  methods: {
    closeImportDialog () {
      this.$emit('closeImportDialog', false)
    }
  }
}
</script>

<style scoped>

</style>
