<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <h3>{{ initialData.title }}</h3>

      <div class="text--primary">
        {{ initialData.body }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        fab
        small
        dark
        @click="$router.push(`/card/${initialData.id}`)"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn @click="deleteCard" color="error" fab small dark
        ><v-icon> mdi-delete </v-icon>
      </v-btn>
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
  methods: {
    deleteCard() {
      this.$emit("deleteCard", this.initialData.id);
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.v-card__actions {
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 8 px;
}
h3 {
  text-transform: uppercase;
}
</style>