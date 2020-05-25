<template>
  <div class="sneaker-container">
    <SneakerItem v-for="shoe in adidas" :shoe="shoe" :key="shoe.id"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SneakerItem from '../components/SneakerItem'
export default {
  components: {
    SneakerItem
  },
  computed: {
    ...mapGetters([
        'adidas'
    ])
  }
};
</script>

<style scoped>
  .sneaker-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .sneaker-container {
      grid-template-columns: auto auto auto;
    }
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    .sneaker-container {
      display: grid;
      grid-template-columns: auto auto;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .sneaker-container {
      grid-template-columns: auto;
    }
  }
</style>