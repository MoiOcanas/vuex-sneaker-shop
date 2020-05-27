<template>
  <div class="sneaker-container">
    <SneakerItem v-for="shoe in adidasSneakers" :shoe="shoe" :key="shoe.id"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SneakerItem from '../components/SneakerItem'
import SaleSwitch from '../components/SaleSwitch'
export default {
  data() {
    return {
      highprice: 800
    };
  },
  components: {
    SneakerItem,
    SaleSwitch
  },
  computed: {
    adidasSneakers() {
      return this.$store.getters.adidas.filter(shoe => 
        this.$store.state.sale
          ? shoe.price < this.highprice && shoe.sale
          : shoe.price < this.highprice
      )
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

  .sneaker-container {
    display: grid;
    grid-template-columns: repeat(4, auto);
  }

  @include mediaLg {
    .sneaker-container {
      grid-template-columns: repeat(3, auto);
    }
  }
  @include mediaMd {
    .sneaker-container {
      grid-template-columns: repeat(2, auto);
    }
  }
  @include mediaSm {
    .sneaker-container {
      grid-template-columns: auto;
    }
  }
</style>