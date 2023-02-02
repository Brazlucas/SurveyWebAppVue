<template>
  <div v-if="!showComponent" class="div">
    <hello-world />
    <error-ffoo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default Vue.extend({
  data() {
    return {
      showComponent: true,
      name: 'HomeView',
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  created() {
    this.checkScreenSize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      const width = window.innerWidth;
      const threshold = 800;
      this.showComponent = width > threshold;
      if (width > threshold) {
        window.location.href = '/about';

      }
    }
  },
  components: {
    HelloWorld,
  },

})
</script>
