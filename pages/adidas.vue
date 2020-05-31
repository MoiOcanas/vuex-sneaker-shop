<template>
  <div class="adidas-container">
    <SideNav />
    <div class="sneaker-container">
      <SneakerItem v-for="shoe in adidasSneakers" :shoe="shoe" :key="shoe.id"/>
    </div>
  </div>
</template>

<script>

import SneakerItem from '../components/SneakerItem'
import SideNav from '../components/SideNav'
export default {
  data() {
    return {
      highprice: 800
    };
  },
  components: {
    SneakerItem,
    SideNav
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

  .adidas-container {
    display: grid;
    grid-template-columns: 20% 80%;
    .sneaker-container {
      display: grid;
      grid-template-columns: repeat(4, auto);
    }
  }

  @include mediaLg {
    .adidas-container {
      grid-template-columns: 20% 80%;
      .sneaker-container {
        grid-template-columns: repeat(3, auto);
      }
    }
  }
  @include mediaMd {
    .adidas-container {
      grid-template-columns: auto;
      .sneaker-container {
        grid-template-columns: repeat(2, auto);
      }
    }
  }
  @include mediaSm {
    .adidas-container {
      grid-template-columns: auto;
      .sneaker-container {
        grid-template-columns: auto;
      }
    }
  }
</style>