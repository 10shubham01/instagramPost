<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" absolute top>
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "snackbar",
  props: {
    snackbar: { type: Boolean, default: false },
    text: { type: String },
    timeout: { type: Number },
  },
};
</script>

<style>
</style>