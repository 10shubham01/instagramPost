<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>{{title}}</div>
     
      <div class="text--primary">
       {{body}}
      </div>
    </v-card-text>
     <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
       Edit
      </v-btn>
      <v-btn
        outlined
        rounded
        text
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name:"card"
,props:["title","id","body"],
  data: () => ({
      reveal: false,
    }),
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>