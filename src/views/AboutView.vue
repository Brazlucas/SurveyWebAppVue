<template>
  <div class="about">
    <h1 class="zoom-animation">Acesse o WEB-APP através de algum dispositivo móvel</h1>
    <div>
      <img class="blockImg" src="https://www.pngall.com/wp-content/uploads/2016/06/Blocked-PNG-HD.png" alt="Bloqueado">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component

export default class AboutView extends Vue {
  created() {
    setTimeout(() => {
      window.location.href = "https://www.github.com/Brazlucas";
    }, 5000);
  }
}

</script>

<style scoped lang="scss">
.about {
  margin: 20%;
  margin: auto;
  text-align: center;
  display: table;
  justify-content: center;
}

.blockImg {
  margin-top: 2%;
  width: 50%;
  height: 50%;
}

h1 {
  color: red;
}

.zoom-animation {
  transition: transform 0.5s;
  /* a duração da animação */
}

.zoom-animation:hover {
  transform: scale(1.5);
  /* o elemento vai ficar 50% maior */
}
</style>
