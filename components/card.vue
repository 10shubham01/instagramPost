<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <h3>{{ initialData.title }}</h3>

      <div class="text--primary">
        {{ initialData.body }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn outlined rounded text> Edit </v-btn>
      <v-btn outlined rounded text> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "card",
  props: {
    initialData: { type: Object, default: null, required: true },
  },
  data: () => ({
    reveal: false,
  }),
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>