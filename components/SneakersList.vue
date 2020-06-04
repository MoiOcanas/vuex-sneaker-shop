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

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

  .sneaker-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  @include mediaLg {
    .sneaker-container {
      grid-template-columns: auto auto auto;
    }
  }
  @include mediaMd {
    .sneaker-container {
      grid-template-columns: auto auto;
    }
  }
  @include mediaSm {
    .sneaker-container {
      grid-template-columns: auto;
    }
  }
</style>