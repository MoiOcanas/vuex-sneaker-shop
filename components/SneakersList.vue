<template>
    <div class="sneaker-container">
      <SneakerItem v-for="shoe in allAppSneakers" :shoe="shoe" :key="shoe.id"/>
    </div>
</template>

<script>
import SneakerItem from '../components/SneakerItem'

export default {
    name: 'SneakersList',
    data() {
      return {
        highprice: 1200
      }
    },
    components: {
      SneakerItem
    },
    computed: {
      allAppSneakers() {
        return this.$store.getters.allSneakers.filter(shoe => 
          this.$store.state.sale
            ? shoe.price < this.highprice && shoe.sale
            : shoe.price < this.highprice
        )
      }
    }
}
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
      grid-template-columns: auto auto;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .sneaker-container {
      grid-template-columns: auto;
    }
  }
</style>