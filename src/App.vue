<template>
  <v-app>
    <v-app-bar app color="success" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn-icons-png.flaticon.com/512/846/846296.png" transition="scale-transition" width="40" />

        <v-img style="margin: 10px 10px 10px;" alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb30414bf9cea_Product_Dark.svg" width="200" />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/BrazLucas" target="_blank" text>
        <span class="mr-2">PRODUTOS</span>
        <v-icon large color="green darken-2">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
});

</script>
