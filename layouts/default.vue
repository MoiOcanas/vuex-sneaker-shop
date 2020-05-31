<template>
  <div class="app-container">
    <navbar />
    <div class="main-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

body {
  font-family: 'Mukta', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main-container {
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: auto;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 3.5rem;
}

@include mediaSm {
    .main-container {
      padding-top: 0;
      grid-template-columns: auto;
    }
}
</style>
