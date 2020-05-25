<template>
  <div class="app-container">
    <navbar />
    <div class="main-container">
      <SideNav />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import SideNav from '~/components/SideNav'

export default {
  components: {
    Navbar,
    SideNav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap');
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
  grid-template-columns: 20% 80%;
}

@media (min-width: 320px) and (max-width: 768px) {
    .main-container {
      grid-template-columns: auto;
    }
}
</style>
