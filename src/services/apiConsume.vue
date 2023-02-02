<template>
      <div class="container_content">
            <div class="content">
                  <p>{{ name }} </p>
                  <img v-bind:src="logo" alt="">
            </div>
            <div class="details_container_content">
                  <h1>{{ steps[1].title }}</h1>
                  <p>{{ steps[1].description }} </p>
                  <img v-bind:src="steps[1].icon" alt="">
                  <p>{{ steps[1].id }} </p>
            </div>
            <div class="button_container">
                  <!-- <div>
                        <button @click="previous">Previous</button>
                        <button @click="next">Next</button>
                  </div> -->
            </div>
      </div>
</template>

<script lang="ts">

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
      data: () => ({
            // currentStep: 0,
            name: null,
            logo: "",
            steps: [] as { title: string; description: string; icon: string; id: number }[]
      }),
      // methods: {
      //       next() {
      //             this.currentStep++;
      //       },
      //       previous() {
      //             this.currentStep--;
      //       },
      // },

      async mounted() {
            const API_URL = "https://dev-1s6qn3x642oxnn4.api.raw-labs.com/mock"
            const response = await axios.get(API_URL)
            const { name, logo, steps } = response.data

            Vue.set(this, 'name', response.data.name)
            Vue.set(this, 'logo', response.data.logo)
            Vue.set(this, 'steps', steps)

      }
}
</script>